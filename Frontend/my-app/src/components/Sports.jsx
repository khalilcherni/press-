import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, ListGroup } from 'react-bootstrap';

function Sports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/home/get')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {data.map(e => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <img src={e.image} alt={e.title} />
          <p>{e.description}</p>
          <p>{e.date}</p>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
              <Card.Title>{e.title}</Card.Title>
              <Card.Text>
                {e.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>{e.date}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary">Card Link</Button>
              <Button variant="secondary">Another Link</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Sports;
