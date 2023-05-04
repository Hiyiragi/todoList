import {useReducer} from "react";
import AddTodo from "./AddTodo.js"
import TasksList from "./TasksList.js";


let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

function tasksReducer(tasks, action) {
  switch(action.type){
    case "ADD_TODO": 
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: false,
        }
      ];

    case "UPDATE_TODO":
      return tasks.map((t)=>{
        if (t.id===action.task.id){
          return action.task;
        }else {
          return t;
        }
      });

      case "DELETE_TODO":
        return tasks.filter((t)=> t.id !== action.id)

      case "DELETE_ALL":
        return [];
      default:
        return tasks;


  }
}




function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  console.log(tasks);


  return(
    <>
      <h2>TODO APP</h2>
          <AddTodo dispatch={dispatch}></AddTodo>
          <TasksList tasks = {tasks} dispatch={dispatch}></TasksList>
          <button onClick={()=> {
            dispatch({
              type: "DELETE_ALL",
            })
          }}>Delete All</button>
          
    </>
  )
}


export default App;

