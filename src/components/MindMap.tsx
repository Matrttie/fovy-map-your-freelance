
import React, { useEffect, useRef, useState } from 'react';

// Define the data structure for skills
interface Skill {
  id: string;
  label: string;
  level: number;
  x: number;
  y: number;
  color: string;
}

// Define a connection between skills
interface Connection {
  source: string;
  target: string;
}

export const MindMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [skills, setSkills] = useState<Skill[]>([
    { id: 'core', label: 'Web Development', level: 5, x: 50, y: 50, color: '#0496FF' },
    { id: 'skill1', label: 'React', level: 4, x: 25, y: 25, color: '#536DFE' },
    { id: 'skill2', label: 'TypeScript', level: 4, x: 75, y: 25, color: '#536DFE' },
    { id: 'skill3', label: 'UI/UX Design', level: 3, x: 25, y: 75, color: '#536DFE' },
    { id: 'skill4', label: 'Node.js', level: 3, x: 75, y: 75, color: '#536DFE' },
    { id: 'subskill1', label: 'Redux', level: 3, x: 12, y: 15, color: '#94A3B8' },
    { id: 'subskill2', label: 'React Native', level: 2, x: 35, y: 10, color: '#94A3B8' },
    { id: 'subskill3', label: 'GraphQL', level: 2, x: 65, y: 10, color: '#94A3B8' },
    { id: 'subskill4', label: 'Express', level: 2, x: 85, y: 65, color: '#94A3B8' },
  ]);
  
  const connections: Connection[] = [
    { source: 'core', target: 'skill1' },
    { source: 'core', target: 'skill2' },
    { source: 'core', target: 'skill3' },
    { source: 'core', target: 'skill4' },
    { source: 'skill1', target: 'subskill1' },
    { source: 'skill1', target: 'subskill2' },
    { source: 'skill2', target: 'subskill3' },
    { source: 'skill4', target: 'subskill4' },
  ];

  // Animation for nodes appearing
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const container = containerRef.current;
          if (container) {
            container.classList.add('animate-fade-in');
            
            // Animate skill nodes with delay
            const nodes = container.querySelectorAll('.mind-map-node');
            nodes.forEach((node, index) => {
              const element = node as HTMLElement;
              element.style.opacity = '0';
              element.style.transform = 'scale(0.8)';
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
              }, 100 + index * 100);
            });
            
            // Animate connections with delay
            const connections = container.querySelectorAll('.mind-map-connection');
            connections.forEach((connection, index) => {
              const element = connection as SVGElement;
              element.style.opacity = '0';
              
              setTimeout(() => {
                element.style.opacity = '1';
              }, 500 + index * 50);
            });
          }
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Calculate positions based on container size
  const getNodePosition = (skill: Skill) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    return {
      x: (skill.x / 100) * width,
      y: (skill.y / 100) * height,
    };
  };

  // Get SVG paths for connections
  const getConnectionPath = (source: Skill, target: Skill) => {
    const sourcePos = getNodePosition(source);
    const targetPos = getNodePosition(target);
    
    // Calculate control points for curve
    const midX = (sourcePos.x + targetPos.x) / 2;
    const midY = (sourcePos.y + targetPos.y) / 2;
    
    return `M${sourcePos.x},${sourcePos.y} Q${midX},${midY} ${targetPos.x},${targetPos.y}`;
  };

  return (
    <div className="mind-map-container relative h-[500px] w-full overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md shadow-sm border border-white/20" ref={containerRef}>
      <svg className="absolute h-full w-full">
        {connections.map((connection) => {
          const source = skills.find((s) => s.id === connection.source);
          const target = skills.find((s) => s.id === connection.target);
          
          if (!source || !target) return null;
          
          return (
            <path
              key={`${connection.source}-${connection.target}`}
              d={getConnectionPath(source, target)}
              fill="none"
              className="mind-map-connection"
              strokeDasharray="5,5"
            />
          );
        })}
      </svg>
      
      {skills.map((skill) => {
        const { x, y } = getNodePosition(skill);
        const size = 30 + skill.level * 10; // Size based on level
        
        return (
          <div
            key={skill.id}
            className="mind-map-node absolute flex items-center justify-center rounded-full shadow-sm"
            style={{
              left: `${x - size / 2}px`,
              top: `${y - size / 2}px`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `${skill.color}10`,
              border: `2px solid ${skill.color}`,
              zIndex: skill.level,
            }}
          >
            <div className="text-center">
              <span className="text-xs font-medium whitespace-nowrap" style={{ color: skill.color }}>
                {skill.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
