// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (

    <div className="bg-violet-50 shadow-lg border border-violet-200 p-4 rounded-xl w-[300px] transition-all duration-300 hover:shadow-xl">
    <div className="mb-4 text-center">
      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-violet-600 ">
        Text
      </h3>
    </div>

    <div className="space-y-4">
      <label className="flex flex-col space-y-2">
        <span className="text-sm font-medium text-violet-700">Text:</span>
        <input
          type="text"
          value={currText}
          onChange={handleTextChange}
          className="w-full px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 placeholder-violet-300"
          placeholder="Enter text..."
        />
      </label>
    </div>

    <Handle
      type="source"
      position={Position.Right}
      id={`${id}-output`}
      className="w-3 h-3 bg-violet-500 border-2 border-white right-[-6px]"
    />
  </div>

  );
}
