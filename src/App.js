import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useState } from 'react';

function App() {



  return (
    <div>
      <PipelineToolbar />
      <PipelineUI  />
      <SubmitButton />
    </div>
  );
}

export default App;
