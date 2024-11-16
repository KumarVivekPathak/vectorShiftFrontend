// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className=' w-full bg-gradient-to-r from-slate-200 to-gray-400 p-3 '>
            <div  className="flex flex-wrap gap-3 justify-center">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
            </div>
        </div>


    );
};
