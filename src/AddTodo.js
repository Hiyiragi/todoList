import { useState, useContext} from "react";
import { TasksDisptachContext } from "./TasksContext";
export default function AddTodo ({dispatch}) {
    const [text, setText] = useState("");


    return (
        <>
            <input type="text" 
                value = {text}
                onChange={(e)=>setText(e.target.value)}>
            </input>
            <button onClick={()=>{
                setText("");
                dispatch({
                    type: "ADD_TODO",
                    text: text,
                  });
            }}>
                Add
            </button>
        </>
    )
}