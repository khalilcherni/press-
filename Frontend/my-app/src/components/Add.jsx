import React, { useState } from 'react'
import axios from 'axios'

function Add() {
    const[title,settitle]=useState("")
    const[image,setimage]=useState("")
    const[description,setdescription]=useState("")
    const[date,setdate]=useState("")
    
    const handle=()=>{

        const newprod={
            title:title,
            image:image,
            description:description,
           
            date:date,
        
        
        }
        console.log(newprod);
        
        axios.post(`http://localhost:3000/api/home/add`,newprod)
        
        .then(res=>{
            console.log(res.data);
        settitle("")
       setimage("")
        setdescription("")
        
      setdate("")
        })
        .catch(err=>console.log(err))
        }
        
        
        
           return (
            <div>
        <button onClick={handle}> ADD </button>
        <input  placeholder='title' value={title} onChange={(e)=>settitle(e.target.value)}  />
        <input  placeholder='image' value={image} onChange={(e)=>setimage(e.target.value)}  />
        <input  placeholder='description' value={description} onChange={(e)=>setdescription(e.target.value)}  />    
        <input  placeholder='date' value={date} onChange={(e)=>setdate(e.target.value)}  />
        
        
        
            </div>
          )

}

export default Add