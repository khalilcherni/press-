import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import "../index.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/home/get')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      {data.map(e => (
        <Card key={e.id} className="bg-dark text-white mb-3" style={{ width: '80em', height: '25rem' }}>
          <Card.Img
            src={e.image}
            alt={e.title}
            style={{ objectFit: 'cover', height: '100%' }}
            className="card-img-overlay-hover"
          />
          <Card.ImgOverlay className="custom-overlay">
            <Card.Title>
              <h1>{e.title}</h1>
            </Card.Title>
            {/* <Card.Text>{e.description}</Card.Text>
            <Card.Text>{e.date}</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
      ))}
    </div>
  );
}

export default Home;
