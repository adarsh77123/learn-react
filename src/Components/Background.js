import React from 'react'

export default function background() {
   const back=()=>{
    document.body.style.backgroundColor= "aqua"
   }
  return (
    <div>
      <button onClick={back}>back</button>
    </div>
  )
}
