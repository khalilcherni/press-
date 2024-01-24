import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card,Button } from 'react-bootstrap/Card';
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
  
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
   

))}


    </div>
  )
}

export default Sports