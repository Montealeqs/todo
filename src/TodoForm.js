import { useState } from "react";
import './TodoForm.css';

function TodoForm({onAdd}){
        const [text,setText]=useState("");
    return(
        <form className="todoAppForm" onSubmit={(e)=>{
            e.preventDefault();
            if(!text.trim()) return;
            onAdd(text);
            setText("")
        }}>
            <input className="todoInput" type="text" value={text} onChange={(e)=>{
                setText(e.target.value);{
                }
            }} />
            <button className="todoAppAddButton">Add</button>
        </form>
    )

}
export default TodoForm;