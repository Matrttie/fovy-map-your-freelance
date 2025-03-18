
import React, { useState } from 'react';
import { InteractiveMindMap } from './InteractiveMindMap';

export const MindMap: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const handleNodeClick = (nodeId: string) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter(id => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  return (
    <div className="mind-map-container bg-gradient-to-br from-[#0a1c6b] to-[#0e2380] rounded-3xl overflow-hidden shadow-xl">
      <InteractiveMindMap 
        expandedNodes={expandedNodes}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
};
