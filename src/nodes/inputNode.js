// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    // <div
    // className=' flex flex-col border border-black px-2 py-2 rounded-md items-center justify-center'
    // >
    //   <div className='flex justify-center items-center w-full'>
    //     <h3 className=' font-semibold text-xl self-center justify-center' >Input</h3>
    //   </div>
    //   <div className='flex flex-col text-md font-normal px-2 my-2 ' >
    //     <label className=' my-2'>
    //       Name:
    //       <input 
    //         className=' py-1 px-2 mx-1 rounded-full border-violet-700 text-md'
    //         type={inputType}
    //         value={currName} 
    //         placeholder={currName}
    //         onChange={handleNameChange} 
    //       />
    //     </label>
    //     <label>
    //       Type:
    //       <select value={inputType} onChange={handleTypeChange}
    //       className=' py-1 px-2 mx-1 rounded-full'
    //       >
    //         <option value="Text">Text</option>
    //         <option value="File">File</option>
    //       </select>
    //     </label>
    //   </div>
    //   <Handle

    //     type="source"
    //     position={Position.Right}
    //     id={`${id}-value`}
    //   />
    // </div>

    <div className="bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg border border-violet-200 p-4 rounded-xl min-w-[250px] transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
          Input
        </h3>
      </div>

      <div className="space-y-4">
        <label className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-violet-700">Name</span>
          {inputType === 'Text' ? (
            <textarea 
              className=" w-52 px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 placeholder-violet-300 resize-y "
              value={currName} 
              placeholder="Enter name..."
              onChange={handleNameChange}
              rows={4}
            />
          ) : (
            <div className="w-full">
              <input 
                className="w-full px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 placeholder-violet-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                type="file"
                onChange={handleNameChange}
              />
            </div>
          )}
        </label>

        <label className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-violet-700">Type</span>
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            className="px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 cursor-pointer"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="w-3 h-3 bg-violet-500 border-2 border-white right-[-6px]"
      />
    </div>
  );
}
