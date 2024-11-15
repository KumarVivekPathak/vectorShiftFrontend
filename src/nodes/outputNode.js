// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-value`}
    //   />
    //   <div>
    //     <span>Output</span>
    //   </div>
    //   <div>
    //     <label>
    //       Name:
    //       <input 
    //         type="text" 
    //         value={currName} 
    //         onChange={handleNameChange} 
    //       />
    //     </label>
    //     <label>
    //       Type:
    //       <select value={outputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">Image</option>
    //       </select>
    //     </label>
    //   </div>
    // </div>

    <div className="bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg border border-violet-200 p-4 rounded-xl w-[300px] transition-all duration-300 hover:shadow-xl">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="w-3 h-3 bg-violet-500 border-2 border-white left-[-6px]"
      />
      
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
          Output
        </h3>
      </div>

      <div className="space-y-4">
        <label className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-violet-700">Name</span>
          {outputType === 'Text' ? (
            <input 
              className="w-full px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 placeholder-violet-300"
              type="text"
              value={currName} 
              placeholder="Enter name..."
              onChange={handleNameChange}
            />
          ) : (
            <input 
              className="w-full px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 placeholder-violet-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              type="file"
              accept="image/*"
              onChange={handleNameChange}
            />
          )}
        </label>

        <label className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-violet-700">Type</span>
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="w-full px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 cursor-pointer"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>


  );
}
