import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

function App() {
  const [todos, setTodos]= useState([
    {
      id:Math.random(),
      text: "08:00 run in the morning",
      isCompleted:false
    },
    {
      id:Math.random(),
      text: "11:00 go to work",
      isCompleted:false
    }  ,
    {
      id:Math.random(),
      text: "14:00 meeting with employees",
      isCompleted:false
    } , 
    {
      id:Math.random(),
      text: "17:00 break",
      isCompleted:false
    },
    {
      id:Math.random(),
      text: "20:00 to go home",
      isCompleted:false
    }  ,
    {
      id:Math.random(),
      text: "23:00 sleep",
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
