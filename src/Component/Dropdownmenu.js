import React, { useState } from 'react'

const Dropdownmenu = () => {
    const[isOpen,setIsOpen]=useState(false);
    const handle_Click=()=>{
        setIsOpen((currentIsOpen)=>!currentIsOpen)
    }
  return (
    <>
<button  onClick={handle_Click}> Actions</button>
{
    isOpen?<ul>
        <li>Edit</li>
        <li>Remove</li>
        <li>Delete</li>
    </ul>:null
}
    </>
  )
}

export default Dropdownmenu