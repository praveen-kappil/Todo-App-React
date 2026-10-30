import { useState } from 'react'
import './App.css'


function App() {

const [task,setTask]=useState("")
const [todos,setTodos]=useState([])

function addTask(){

  if(task.trim()==="")return;
  setTodos([...todos,task])
  setTask("")

}

function deleteTask(index){
  setTodos(todos.filter((_,i) => i!==index));
}


  return(
    <>
    <div className='main'>
    <h1>My to do App</h1>
    <input type="text" placeholder='Enter a task' value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button className='btn' onClick={addTask}>Add Task</button>

    <ul>
      {todos.map((todo,index)=>(
      <li key={index}>
        {todo}
        <button onClick={()=>deleteTask(index)}>
          Delete
        </button>
      </li>))}
    </ul>
    </div>
    </>
  )

}

export default App
