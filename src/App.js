import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos,setTodos]=useState([
    {
      id:Math.random(),
      text: "BMW",
      isCompleted:false
    },
    {
      id:Math.random(),
      text: "AUDI",
      isCompleted:false
    }  ,
    {
      id:Math.random(),
      text: "VOLVO",
      isCompleted:false
    }  

]);
  return (
    <div className="App">
      <TodoForm/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
