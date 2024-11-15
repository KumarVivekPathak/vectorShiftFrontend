// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (

      <div
      className={`${type} min-w-[80px] h-[60px] flex items-center justify-center flex-col 
        bg-gradient-to-r from-slate-800 to-slate-900 
        rounded-lg shadow-lg cursor-grab 
        border border-slate-700 
        hover:shadow-xl hover:border-slate-600 
        transition-all duration-300 
        transform hover:-translate-y-0.5
        group`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className="text-white font-medium group-hover:text-violet-200 transition-colors duration-200">
        {label}
      </span>
      
      <div className="absolute inset-0 rounded-lg bg-violet-500/0 group-hover:bg-violet-500/5 transition-all duration-200" />
    </div>
    );
  };
  