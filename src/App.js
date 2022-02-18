import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

function App() {
  const [todos, setTodos]= useState([
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
          <header>
          <h1 className="todoAppTitle">Todos</h1>
        </header>
      <TodoForm onAdd={(text)=>{
        setTodos([
         ...todos ,
          {
           id:Math.random(),
           text: text,
           isCompleted: false
          }
        ]);
      }} />
      <TodoList 
       todos={todos} 
       onDelete={(todo)=>{
         setTodos(todos.filter((t)=> t.id !== todo.id));
       }}
       onChange={(newTodo)=>{
         setTodos(todos.map((todo)=>{
           if(todo.id === newTodo.id){
             return newTodo;
           }
           return todo;
         }));
       }}
       
      />
      <TodoFooter todos={todos} />
    </div>
  );
}

export default App;
