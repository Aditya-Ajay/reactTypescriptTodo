import {useState} from "react"
import Draggable from 'react-draggable';
import {ToDo} from "./Modal"
import {useRef} from "react"
import {useEffect} from "react"
interface TodoProps {
    todo :Array<ToDo>
    setTodo : React.Dispatch<React.SetStateAction<ToDo[]>>
}

const TodoList = ({todo , setTodo} : TodoProps) => {
   console.log(todo)
    const inputRef = useRef<HTMLInputElement>(null)
    const [edit , setEdit] = useState<boolean>(false)
    const[input , setInput] = useState<string>("")
    // console.log(input)
    const [editingId, setEditingId] = useState<number | null>(null);
    useEffect(()=>{
   inputRef.current?.focus()
    },[edit])
    const handleDelete = (id : number)=>{ 
      setTodo( todo.filter((e)=>e.id !== id))
    }
    const handleEdit = (id:number)=>{
        setEditingId(id);
        setEdit(true)

    }
    const handleDone = ( id:number)=>{
     setTodo(todo.map((e)=>
    e.id === id  ? {...e , isDone : !e.isDone} : e
    ))  
    
   
    }
    const handleSubmit = (id :number)=>{
       
        setTodo(todo.map((e)=>
        e.id === id  ? {...e ,  todo : input} : e
        ))
    
   
    }
    return (
        <div>
        {todo.length > 0 && <div style={{backgroundColor : "skyblue" ,  paddingLeft : "1rem" , paddingRight : "1rem" ,paddingBottom : "1rem" ,  borderRadius : "0.2rem" }} >
             {todo.length > 0 ? <div style={{display : "flex" , justifyContent : "center" , background : "none" , marginBottom : "2rem"}}>
             <h1 style={{border : "none" , background : "none" , justifyContent : "center"}}>ACTIVE TASK</h1>
             </div> : null} 
            {todo.map((e)=>{

                return(
                    
                    <div className="mainPlay">
        
                        {edit && e.id === editingId ? (
                             
                            <form  style={{backgroundColor : "#fda500"}} onSubmit={(event)=>{

                                inputRef.current?.blur()
                                event.preventDefault()
                                handleSubmit(

                                e.id)
                                setEdit(false)
                            }}
                               
                                 >
                            <input value={input} ref={inputRef} style={{backgroundColor : "#fda500" , border : "none" , outline : "none" , color : "white" ,fontSize : "larger" , fontWeight : "bold"}} onChange={(event) => 
                                {if(event.target.value.length  < 24){
                                setInput(event.target.value)
                                }}
                            } />
                            </form> 
                        ) : (
                            e.isDone  ?
                                <s style={{marginRight : "2rem" , backgroundColor : "#fda500" , color : "white" ,fontSize : "larger" , fontWeight : "bold"}}>{e.todo} </s>
             :<div style={{marginRight : "2rem" , backgroundColor : "#fda500" , color : "white" ,fontSize : "larger" , fontWeight : "bold"}}>{e.todo} </div>
   )}
 <div style={{backgroundColor : "#fda500"}}>
  <button className="material-symbols-outlined" onClick={()=>{
      if(!edit && !e.isDone ){
        setInput(e.todo)
        handleEdit(e.id)}
      }
     
      }>edit</button>
 <button className="material-symbols-outlined"  onClick={()=>{handleDone(e.id)}}>done</button>
<button className="material-symbols-outlined" onClick={()=>{handleDelete(e.id)}}>delete</button>
</div>

</div>

)

}
)}

</div>
}
</div>

)
}

export default TodoList
