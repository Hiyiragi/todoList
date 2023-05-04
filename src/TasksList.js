import { useContext, useState} from "react";
import { TasksContext, TasksDisptachContext } from "./TasksContext";

export default function TasksList({tasks, dispatch}){
    
    return (
        <>
            {tasks.map(task=>
            <li key={task.id}>
                <Task task ={task} dispatch={dispatch}/>
            </li>
            )}
        </>
    )
}

function Task ({task, dispatch}){
    let structure;
    const [isEditing, setIsEditing] = useState(false);
    if (isEditing) {
        structure = (
            <>
            <input value={task.text} onChange={e=>dispatch({
                type: "UPDATE_TODO",
                task: {...task, text: e.target.value}
            })}></input>
            <button onClick={()=>{
                setIsEditing(false)
            }}>Save</button>
            </>
        )
    } else if(task.done){
        structure =(
            <>
            <span className="done">{task.text}</span>
            <button onClick={()=>{
                setIsEditing(true)
            }}>Edit</button>
            </>
        )

    } else{
        structure =(
            <>
            <span>{task.text}</span>
            <button onClick={()=>{
                setIsEditing(true)
            }}>Edit</button>
            </>
        )
    };

    return (
        <label>
            <input 
            onChange={()=>dispatch({
                type: "UPDATE_TODO",
                task: {...task, done:!task.done},
              })}
            type="checkbox" checked={task.done}
            />
            {structure}
            <button onClick={()=>dispatch({
                type: "DELETE_TODO",
                id: task.id,
            })}>Delete</button>
        </label>
    )
}