import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/home/get')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {data.map(e => (
        <div key={e.id} style={{ margin: '10px' }}>
          <Card style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{e.title}</Card.Title>
              <Card.Text>
                {/* <h6>{e.description}</h6> */}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>  <h6>{e.date}</h6> </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Home;
