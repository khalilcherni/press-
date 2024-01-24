import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
const [data,setData]=useState([])

useEffect(()=>{
axios.get('http://localhost:3000/api/home/get')
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
<p>{e.date} </p>
</div>

))}


    </div>
  )
}

export default Home