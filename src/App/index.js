import React from 'react';
import { AppUI } from './AppUi';
import { TodoProvider } from '../TodoContex';

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}



export default App;
