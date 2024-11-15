// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div className="bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg border border-violet-200 p-4 rounded-xl min-w-full transition-all duration-300 hover:shadow-xl">
    <Handle
      type="target"
      position={Position.Left}
      id={`${id}-system`}
      className="w-3 h-3 bg-violet-500 border-2 border-white left-[-6px]"
      style={{ top: '33.33%' }}
    />
    
    {/* Prompt Input Handle */}
    <Handle
      type="target"
      position={Position.Left}
      id={`${id}-prompt`}
      className="w-3 h-3 bg-violet-500 border-2 border-white left-[-6px]"
      style={{ top: '66.66%' }}
    />

    <div className="space-y-3">
      <div className="text-center mb-2">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
          LLM
        </h3>
      </div>

      <div className="text-center text-sm text-violet-700 bg-violet-50 p-3 rounded-lg border border-violet-100">
        <span>This is a LLM.</span>
      </div>
    </div>

    <Handle
      type="source"
      position={Position.Right}
      id={`${id}-response`}
      className="w-3 h-3 bg-violet-500 border-2 border-white right-[-6px]"
    />
  </div>
  );
}
