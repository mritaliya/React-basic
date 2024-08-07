import React,{useState} from 'react'

export default function Textform() {
    let [text,settext]=useState('enter text here');
    let [counter,setcounter]=useState(0);
    
  return (
    <>
      
<div className="mb-3">
  
  <div className="container">
    <h1>enter your text here</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(event)=>{
    settext(event.target.value);
    
  }} value={text} rows="6"></textarea>
  <button className='mt-3 btn btn-primary' onClick={()=>{
    let newtext=text.toUpperCase();
    settext(newtext)
  }}>convert to uppercase</button>
  </div>
  
    <div className="container">
    <p>{counter}</p>
    <button className='btn btn-primary' onClick={()=>{
        setcounter(counter+1);
    }}>increase value</button>
    </div>
  </div>

    </>
  )
}
