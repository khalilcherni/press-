import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function Home()  {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/home/get')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {data.map(e => (
        <Card key={e.id} className="bg-dark text-white">
          <Card.Img src={e.image} alt={e.title} />
          <Card.ImgOverlay>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>{e.description}</Card.Text>
            <Card.Text>Last updated {e.date}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
    </>
  );
}


export default Home;
