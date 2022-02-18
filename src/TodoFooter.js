import './TodoFooter.css';


function TodoFooter({todos}){
    return(
        <div className='todoAppFooter'>
            <span className='todoLength'>{todos.length} lenght</span>
        </div>
    )
}

export default TodoFooter