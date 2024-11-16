// // import { useState, useEffect } from "react";
// // import { Handle, Position } from "reactflow";
// // import TextareaAutosize from "react-textarea-autosize";

// // export const TextNode = ({ id, data }) => {
// //   const [currText, setCurrText] = useState(data?.text || "{{input}}");
// //   const [variables, setVariables] = useState({});
// //   const [handleCount, setHandleCount] = useState(0);

// //   const handleTextChange = (event) => {
// //     const newText = event.target.value;
// //     setCurrText(newText);
// //     parseVariables(newText);
// //   };

// //   const parseVariables = (text) => {
// //     const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
// //     const matches = text.matchAll(variableRegex);
// //     const newVariables = {};

// //     for (const match of matches) {
// //       const variableName = match[1];
// //       newVariables[variableName] = true;
// //     }

// //     setVariables(newVariables);
// //     setHandleCount(Object.keys(newVariables).length);
// //   };

// //   // const countHandle = (text) =>{
// //   //   const variables = {};
// //   // const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
// //   // let match;

// //   // while ((match = regex.exec(text)) !== null) {
// //   //   const variableName = match[1];
// //   //   variables[variableName] = true;
// //   // }

// //   // return Object.keys(variables).length;
// //   // }

// //   useEffect(() => {
// //     parseVariables(currText);
// //   }, []);

// //   console.log(parseVariables(currText));

// //   return (
// //     <div className="bg-violet-50 shadow-lg border border-violet-200 p-4 rounded-xl min-w-72 transition-all duration-300 hover:shadow-xl">
// //       <div className="mb-4 text-center">
// //         <h3 className="text-xl font-bold bg-clip-text text-transparent bg-violet-600">
// //           Text
// //         </h3>
// //       </div>

// //       <div className="space-y-4">
// //         <label className="flex flex-col space-y-2">
// //           <span className="text-sm font-medium text-violet-700">Text:</span>
// //           <TextareaAutosize
// //             value={currText}
// //             onChange={handleTextChange}
// //             minRows={3}
// //             maxRows={7}
// //             className="w-full px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 placeholder-violet-300"
// //             placeholder="Enter text..."
// //           />
// //         </label>
// //       </div>

// //       <div className="flex flex-wrap">
// //         {/* {Object.keys(variables).map((variable, index) => {

// //           return (
// //             <Handle
// //             key={variable}
// //             type="source"
// //             position={Position.Left}
// //             id={`${variable}-${index}`}
// //             className="w-3 h-3 bg-violet-500 border-2 border-white left-[-6px] top-[-6px]"
// //           />
// //           )

// //         }
// //         )
// //         } */}

// //     {Array.from({ length: handleCount }, (_, index) => (
// //           <Handle
// //             key={`handle-${index}`}
// //             type="source"
// //             position={Position.Left}
// //             id={`handle-${index}`}
// //             className="w-3 h-3 bg-violet-500 border-2 border-white left-[-6px] top-[-6px]"
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// import { useState, useEffect } from "react";
// import { Handle, Position } from "reactflow";
// import TextareaAutosize from "react-textarea-autosize";

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || "{{input}}");
//   const [variables, setVariables] = useState({});
//   const [handleCount, setHandleCount] = useState(0);
//   const handlers = [];

//   const handleTextChange = (event) => {
//     const newText = event.target.value;
//     setCurrText(newText);
//     parseVariables(newText);
//   };

//   const parseVariables = (text) => {
//     const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
//     const matches = text.matchAll(variableRegex);
//     const newVariables = {};

//     for (const match of matches) {
//       const variableName = match[1];
//       newVariables[variableName] = true;
//     }

//     setVariables(newVariables);
//     let abc = Object.keys(newVariables).length;
//     console.log("abcd length is : ", abc);
//     setHandleCount(abc);
//     for(let index = 0; index < abc; index++){
//       handlers.push(
//         <Handle
//         key={`handle-${index}`}
//         type="source"
//         position={Position.Left}
//         id={`handle-${index}`}
//         className="w-3 h-3 bg-violet-500 border-2 border-white "
//       />

//       )
//     }
//   };

//   useEffect(() => {
//     parseVariables(currText); // Parse variables on initial render
//   }, [currText]); // Trigger only when currText changes

//   return (
//     <div className="bg-violet-50 shadow-lg border border-violet-200 p-4 rounded-xl min-w-72 transition-all duration-300 hover:shadow-xl">
//       <div className="mb-4 text-center">
//         <h3 className="text-xl font-bold bg-clip-text text-transparent bg-violet-600">
//           Text
//         </h3>
//       </div>

//       <div className="space-y-4">
//         <label className="flex flex-col space-y-2">
//           <span className="text-sm font-medium text-violet-700">Text:</span>
//           <TextareaAutosize
//             value={currText}
//             onChange={handleTextChange}
//             minRows={3}
//             maxRows={7}
//             className="w-full px-4 py-2 rounded-lg bg-white border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none transition-all duration-200 placeholder-violet-300"
//             placeholder="Enter text..."
//           />
//         </label>
//       </div>

//       <div className="flex flex-wrap">
//         {/* {Array.from({ length: handleCount }, (_, index) => (
//           <div className=" flex flex-col mt-4 ">
//             <div className=" w-6 rounded-full h-6" />
//             <Handle
//               key={`handle-${index}`}
//               type="source"
//               position={Position.Left}
//               id={`handle-${index}`}
//               className="w-3 h-3 bg-violet-500 border-2 border-white "
//             />
//           </div>
//         ))} */}
//         {handlers.map((item, index) => (
//           <div>
//  <Handle
//   key={`handle-${index}`}
//   type="source"
//   position={Position.Left}
//   id={`handle-${index}`}
//   className="w-3 h-3 bg-violet-500 border-2 border-white "
// />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

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
    const matches = Array.from(text.matchAll(variableRegex));
    const newVariables = {};

    matches.forEach((match, index) => {
      const variableName = match[1];
      newVariables[variableName] = {
        name: variableName,
        position: match.index,
        id: `handle-${variableName}-${index}`,
      };
    });

    setVariables(newVariables);
  };

  useEffect(() => {
    parseVariables(currText);
  }, [currText]);

  return (
  
    <div className="bg-violet-50 shadow-lg border border-violet-200 p-4 rounded-xl min-w-72 transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold text-violet-600">Text Node</h3>
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
            placeholder="Enter text with {{variables}}"
          />
        </label>
      </div>

    <div className="absolute left-0 top-3 flex flex-col gap-1 mt-20">
        {Object.values(variables).map((variable, index) => (
          <div key={variable.id} className="w-6 h-6 relative">
            <Handle
              key={`handle-${index}`}
              type="source"
              position={Position.Left}
              id={`handle-${index}`}
              className="w-3 h-3 bg-violet-500 border-2 border-white"
              style={{
                left: '-6px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
      
  );
};
