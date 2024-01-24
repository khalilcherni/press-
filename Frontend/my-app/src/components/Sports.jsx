import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Sports() {
const [data,setData]=useState([])

useEffect(()=>{
axios.get('http://localhost:3000/api/sports/getAll')
.then(res=>setData(res.data))
.catch(err=>console.log(err))
},[])



  return (
    <div>
{data.map(e=>(
<div>

<h3>{e.title} </h3>
<img src={e.image} alt="" />
<p>{e.description} </p>
</div>

))}


    </div>
  )
}

export default Sports