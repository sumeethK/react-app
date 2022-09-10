import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';

function App() {
  return (
    <div className="App">
      <TodoContainer name="MyTodo"/>
    </div>
     
  );
}

export default App;
