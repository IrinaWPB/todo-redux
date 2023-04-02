import React from  'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <h1>My Todo List:</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
