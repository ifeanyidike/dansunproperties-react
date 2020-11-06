import React, {useState, useEffect} from 'react'
import axios from "axios"
import  "../styles/bedbath.css";

const OptionBoxes = (setBed, setBath) => {
  
  
  
  return (
    <div>
      
      <div className="containerWrap" >
         <div className="ButtonSet"> 
         <button onClick={()=>setBed(' ')} className="BottonOptions1">Any</button> 
         <button onClick={()=>setBed(1)} className="BottonOptions">1+</button> 
         <button onClick={()=>setBed(2)} className="BottonOptions">2+</button> 
         <button onClick={()=>setBed(3)} className="BottonOptions">3+</button> 
         <button onClick={()=>setBed(4)} className="BottonOptions">4+</button> 
         <button onClick={()=>setBed(5)} className="BottonOptions1 end">5+</button> 
      </div>
     
      <div className="ButtonSet2">
         <button onClick={()=> setBath(' ')} className="BottonOptions1">Any</button> 
         <button onClick={()=>setBath(1)} className="BottonOptions">1+</button> 
         <button onClick={()=>setBath(2)} className="BottonOptions">2+</button> 
         <button onClick={()=>setBath(3)} className="BottonOptions">3+</button> 
         <button onClick={()=>setBath(4)} className="BottonOptions">4+</button> 
         <button onClick={()=>setBath(5)} className="BottonOptions1 end">5+</button> 
      </div>
    </div>
         
      </div>
  )
}

export default OptionBoxes;
