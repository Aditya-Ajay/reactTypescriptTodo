import React from "react";
import {useRef} from "react"
interface InputFieldProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
  handleFunction : (e :React.FormEvent)=> void
}





const InputField = ({input , setInput ,handleFunction} : InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="input" onSubmit={(e)=>{
     
      handleFunction(e)
      
    
    }}>
      <input  ref= {inputRef} type="text" placeholder="ENTER TASK MAX LIMIT (20 LETTERS)"  className="field" value={input} onChange={(e)=>{
        if(e.target.value.length <20)
        setInput(e.target.value)
        }} ></input>
      <button className="btn" onClick={(e)=>{e.preventDefault() 
         if(input){
         handleFunction(e)
         }
      }}>ADD</button>
    
    </form>
  );
};

export default InputField;
