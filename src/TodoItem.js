import "./TodoItem.css";
function TodoItem({todo,onChange,onDelete}){
    return(
        <div className="todoListItem">
                <input type="checkbox"checked={todo.isCompleted} onChange={(e)=>{
                    e.target.checked
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }}/>
                <span>{todo.text}</span>
                <button  className="todoListItemDelete" onClick={()=>{
                    onDelete(todo);
                }}>X</button>
        </div>
    )
}
export default TodoItem;