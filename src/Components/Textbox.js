import React from 'react'
import { useState } from 'react';


export default function Textbox(props) {

    const[text,settext]=useState("");
   
    
    const Covert_To_Uppercase=()=>{
      let t=text.toUpperCase();
      props.Showalert(" Converted To Uppercase  ","success")
      settext(t)
    }
    const Covert_To_Lowercase=()=>{
      let t=text.toLowerCase();
      props.Showalert(" Converted To Lowercase  ","success")
      settext(t);
    }

    const type=(h)=>{
      settext(h.target.value)
    }

 
   
  return (
    <>
    <div className="mb-3" >
  <label style={{ color: props.mode==="light"?"black":"white" }}>Comment</label>
  <textarea
    className="form-control my-3"
    id="floatingTextarea2"
    onChange={type}
    value={text}
    placeholder="Enter Your Text Here"
    style={{ backgroundColor: props.color, color: props.mode==="light"?"black":"white" } }
    
    //style={{ backgroundColor:"" }}
    rows="8"
  ></textarea>
         <div className="d-inline-block me-2"   >
  <button className="btn btn-primary" onClick={Covert_To_Uppercase}>
    Convert to Uppercase
  </button>
</div>
<div className="d-inline-block">
  <button className="btn btn-primary" onClick={Covert_To_Lowercase}>
    Convert to Lowercase
  </button>
  </div>
  <div className="container" style={{ color: props.mode==="light"?"black":"white" }}> 
    <h2>Preview</h2>
    <p>
      {text}
    </p>
  </div>
    </div>
    </>
  )
}
