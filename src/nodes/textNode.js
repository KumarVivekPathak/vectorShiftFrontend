import { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";
import TextareaAutosize from "react-textarea-autosize";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState({});

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setCurrText(newText);
    parseVariables(newText);
  };

  const parseVariables = (text) => {
    const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    const matches = text.matchAll(variableRegex);
    const newVariables = {};

    for (const match of matches) {
      const variableName = match[1];
      newVariables[variableName] = true;
    }

    setVariables(newVariables);
  };

  const countHandle = (text) =>{
    const variables = {};
  const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const variableName = match[1];
    variables[variableName] = true;
  }

  return Object.keys(variables).length;
  }

  useEffect(() => {
    parseVariables(currText);
  }, []);

  return (
    <div className="bg-violet-50 shadow-lg border border-violet-200 p-4 rounded-xl min-w-72 transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-violet-600">
          Text
        </h3>
      </div>

      <div className="space-y-4">
        <label className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-violet-700">Text:</span>
          <TextareaAutosize
            value={currText}
            onChange={handleTextChange}
            minRows={3}
            maxRows={7}
            className="w-full px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 placeholder-violet-300"
            placeholder="Enter text..."
          />
        </label>
      </div>

      <div className="flex flex-wrap">
        {Object.keys(variables).map((variable, index) => {
        console.log(countHandle(currText));
        
          return (
            <Handle
            key={variable}
            type="source"
            position={Position.Left}
            id={`${variable}-${index}`}
            className="w-3 h-3 bg-violet-500 border-2 border-white left-[-6px] top-[-6px]"
          />
          )
         
        }
        )
        }
      </div>
    </div>
  );
};
