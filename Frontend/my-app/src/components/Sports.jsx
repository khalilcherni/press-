import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, ListGroup } from 'react-bootstrap';

function Sports() {
  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [updatingId, setUpdatingId] = useState(null);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/sports/getAll')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/sports/delete/${id}`)
      .then(() => {
        const updatedData = data.filter(e => e.id !== id);
        setData(updatedData);
      })
      .catch(err => console.log(err));
  }

  const handleUpdateClick = (id) => {
    setUpdatingId(id);
    const selectedItem = data.find(item => item.id === id);
    setNewTitle(selectedItem.title);
    setNewImage(selectedItem.image);
    setNewDescription(selectedItem.description);
  }

  const updateItem = (id) => {
    axios.put(`http://localhost:3000/api/sports/put/${id}`, {
      title: newTitle,
      image: newImage,
      description: newDescription
    })
      .then(() => {
        const updatedData = data.map(item => (
          item.id === id
            ? { ...item, title: newTitle, image: newImage, description: newDescription }
            : item
        ));
        setData(updatedData);
        setUpdatingId(null);
      })
      .catch(err => console.log(err));
  }

  const handleCancelUpdate = () => {
    setUpdatingId(null);
  }

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
    <div className="card-container">
      {data.map(e => (
        <div key={e.id} className="card-wrapper">
          <Card style={{ width: '18rem' }} className="custom-card">
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
              <Card.Title>{e.title}</Card.Title>
              {updatingId === e.id ? (
                <div>
                  <label htmlFor="newTitle">New Title:</label>
                  <input
                    type="text"
                    id="newTitle"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <label htmlFor="newImage">New Image URL:</label>
                  <input
                    type="text"
                    id="newImage"
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)}
                  />
                  <label htmlFor="newDescription">New Description:</label>
                  <input
                    type="text"
                    id="newDescription"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                </div>
              ) : (
                <Card.Text>{e.description}</Card.Text>
              )}
            </Card.Body>
            <ListGroup className="list-group-flush">
        
              <ListGroup.Item>{e.date}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {updatingId === e.id ? (
                <div>
                  <Button variant="success"  className='button-55' onClick={() => updateItem(e.id)}>Update</Button>
                  <Button variant="danger"  className='button-55' onClick={handleCancelUpdate}>Cancel</Button>
                </div>
              ) : (
                <div>
                  <Button variant="primary"  className='button-55' onClick={() => handleDelete(e.id)}>Delete</Button>
                  <Button variant="secondary"  className='button-55' onClick={() => handleUpdateClick(e.id)}>Update</Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Sports;
