//   // // submit.js

//   // export const SubmitButton = () => {

//   //     const onsubmit = () =>{
//   //         window.alert("submitt pessed " )
//   //     }

//   //     return (
//   //         <div className="flex items-center justify-center mt-4">
//   //       <button
//   //         type="submit"
//   //         onClick={onsubmit}
//   //         className="px-6 py-3 font-times bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xl font-medium rounded-lg 
//   //           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 
//   //           focus:ring-2 focus:ring-violet-300 focus:outline-none active:shadow-md active:translate-y-0
//   //           disabled:opacity-70 disabled:cursor-not-allowed hover:from-violet-600 hover:to-purple-800"
//   //       >
//   //         Submit
//   //       </button>
//   //     </div>
//   //     );
//   // }


//   import { useStore } from './store';
// import { shallow } from 'zustand/shallow';

// const selector = (state) => ({
//   nodes: state.nodes,
//   edges: state.edges,
// });

// export const SubmitButton = () => {
//   const { nodes, edges } = useStore(selector, shallow);

//   const onsubmit = () => {
//     const nodesCount = nodes.length;
//     const edgesCount = edges.length;
//     window.alert(`Total Nodes: ${nodesCount}\nTotal Edges: ${edgesCount}`);


//   }



//   return (
//     <div className="flex items-center justify-center mt-4">
//       <button
//         type="submit"
//         onClick={onsubmit}
//         className="px-6 py-3 font-times bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xl font-medium rounded-lg 
//           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 
//           focus:ring-2 focus:ring-violet-300 focus:outline-none active:shadow-md active:translate-y-0
//           disabled:opacity-70 disabled:cursor-not-allowed hover:from-violet-600 hover:to-purple-800"
//       >
//         Submit
//       </button>
//     </div>
//   );
// }


import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [isLoading, setIsLoading] = useState(false);

  const onsubmit = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Display the results in an alert
      window.alert(
        `Pipeline Analysis Results:\n` +
        `Total Nodes: ${data.num_nodes}\n` +
        `Total Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
      );

    } catch (error) {
      console.error('Error submitting pipeline:', error);
      window.alert('Error submitting pipeline. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        type="submit"
        onClick={onsubmit}
        disabled={isLoading}
        className="px-6 py-3 font-times bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xl font-medium rounded-lg 
          shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 
          focus:ring-2 focus:ring-violet-300 focus:outline-none active:shadow-md active:translate-y-0
          disabled:opacity-70 disabled:cursor-not-allowed hover:from-violet-600 hover:to-purple-800"
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};