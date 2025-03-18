
import React, { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Node,
  Edge,
  Connection,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Code, Figma, PenTool, PaintBucket, Users, Search, BarChart2, Type } from 'lucide-react';

// Define initial skill categories and their sub-skills
const initialSkills = {
  'UIUX': {
    icon: <PenTool className="h-5 w-5 text-white" />,
    subSkills: ['UI design', 'UX design', 'User Research', 'Coding', 'Typography']
  },
  'UI design': {
    icon: <PaintBucket className="h-5 w-5 text-white" />,
    subSkills: ['Figma', 'Color Theory']
  },
  'UX design': {
    icon: <Users className="h-5 w-5 text-white" />,
    subSkills: ['Competitive Analysis']
  },
  'User Research': {
    icon: <Search className="h-5 w-5 text-white" />,
    subSkills: []
  },
  'Coding': {
    icon: <Code className="h-5 w-5 text-white" />,
    subSkills: []
  },
  'Typography': {
    icon: <Type className="h-5 w-5 text-white" />,
    subSkills: []
  },
  'Figma': {
    icon: <Figma className="h-5 w-5 text-white" />,
    subSkills: []
  },
  'Color Theory': {
    icon: <PaintBucket className="h-5 w-5 text-white" />,
    subSkills: []
  },
  'Competitive Analysis': {
    icon: <BarChart2 className="h-5 w-5 text-white" />,
    subSkills: []
  }
};

// Custom node component
const SkillNode = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fovy-blue mb-2 shadow-md">
        {data.icon}
      </div>
      <div className="text-sm font-medium text-center whitespace-nowrap bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">
        {data.label}
      </div>
    </div>
  );
};

// Define the props interface for the InteractiveMindMap component
interface InteractiveMindMapProps {
  expandedNodes: string[];
  onNodeClick: (nodeId: string) => void;
}

export const InteractiveMindMap: React.FC<InteractiveMindMapProps> = ({ expandedNodes, onNodeClick }) => {
  // Generate initial nodes
  const generateInitialNodes = (): Node[] => {
    return [
      {
        id: 'UIUX',
        position: { x: 250, y: 250 },
        data: { 
          label: 'UIUX',
          icon: initialSkills['UIUX'].icon,
          expanded: false
        },
        type: 'skillNode'
      }
    ];
  };

  // State
  const [nodes, setNodes, onNodesChange] = useNodesState(generateInitialNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Node types
  const nodeTypes = {
    skillNode: SkillNode
  };

  // Connection handler
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#0496FF' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#0496FF' } }, eds)),
    [setEdges]
  );

  // Click handler to expand/collapse nodes
  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    const nodeId = node.id;
    onNodeClick(nodeId);
    
    // Only expand nodes that haven't been expanded yet
    if (!expandedNodes.includes(nodeId)) {
      const nodeData = initialSkills[nodeId as keyof typeof initialSkills];
      
      if (!nodeData || nodeData.subSkills.length === 0) {
        return; // No sub-skills
      }

      // Calculate positions for sub-skills (in a circle around parent)
      const centerX = node.position.x;
      const centerY = node.position.y;
      const radius = 180;
      const angleStep = (2 * Math.PI) / nodeData.subSkills.length;

      // Create new nodes for sub-skills
      const newNodes = nodeData.subSkills.map((skill, index) => {
        const angle = index * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return {
          id: skill,
          position: { x, y },
          data: { 
            label: skill, 
            icon: initialSkills[skill as keyof typeof initialSkills]?.icon || nodeData.icon 
          },
          type: 'skillNode'
        };
      });

      // Create connections from parent to sub-skills
      const newEdges = nodeData.subSkills.map(skill => ({
        id: `${nodeId}-${skill}`,
        source: nodeId,
        target: skill,
        animated: true,
        style: { stroke: '#0496FF' },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#0496FF'
        }
      }));

      // Update state with new nodes and edges
      setNodes(nodes => [...nodes, ...newNodes]);
      setEdges(edges => [...edges, ...newEdges]);

      // Add animation class to new nodes
      setTimeout(() => {
        const nodeElements = document.querySelectorAll('.react-flow__node');
        nodeElements.forEach(el => {
          if (!el.classList.contains('animated')) {
            el.classList.add('animate-scale-in', 'animated');
          }
        });
      }, 50);
    }
  }, [expandedNodes, onNodeClick, setNodes, setEdges, nodes]);

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md shadow-sm border border-white/20 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        className="interactive-mindmap"
        panOnScroll
        zoomOnScroll={false}
      >
        <Background color="#f0f0f0" gap={16} />
        <Controls />
        <MiniMap 
          nodeStrokeColor={() => '#0496FF'}
          nodeColor={() => '#0496FF'} 
          nodeBorderRadius={10}
        />
      </ReactFlow>
    </div>
  );
};
