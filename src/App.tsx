import React from 'react'
import Draggable from 'react-draggable';
import "./App.css"
import InputField from './component/InputField'
import TodoList from './component/TodoList'
import { useState } from 'react'
import { ToDo } from './component/Modal'

const App : React.FC = () => { 
  const [input , setInput] = useState <string> ("")
  const [todo , setTodo] = useState <ToDo[]>([])
  
  // console.log(todo)
  const handleFunction  = (e :React.FormEvent)=>{
    e.preventDefault()


    if(todo){
      setTodo([...todo , {id :Date.now() , todo : input , isDone : false }])
      setInput("")
    }
  }
  return (
    <div >
      <div className="App">
      <span className="title">
        TASK COMPLETION CHECKER
      </span>
      <InputField input={input} setInput={setInput} handleFunction={handleFunction}/>
      </div>
      <div style={{display : "flex" , flexDirection : "column" , alignItems: "center"}}>
      
      <TodoList todo={todo} setTodo={setTodo}/>
      
 
      </div>
    </div>
  )
}

export default App

