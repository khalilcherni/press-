import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import "../index.css";
import styled from 'styled-components';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/home/get')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Wrapper>
      <Splide options={{
      erPage: 1,
      arrows: true,
      pagination: true,
      drag: 'free',
      heightRatio: 0.5 // A// Adjust the height ratio as needed
      }}>
        {data.map(e => (
          <SplideSlide key={e.id}>
            <CardContainer>
              <StyledCard className="bg-dark text-white mb-3">
                <Card.Img
                  src={e.image}
                  alt={e.title}
                  className="card-img-overlay-hover"
                />
              <Card.ImgOverlay className="custom-overlay">
  <Card.Title>
    <h1>{e.title}</h1>
  </Card.Title>
  <Card.Text>{e.description}</Card.Text>
  <Card.Text className="date">{e.date}</Card.Text>
</Card.ImgOverlay>

              </StyledCard>
            </CardContainer>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
`;

const CardContainer = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
`;

const StyledCard = styled(Card)`
width: 90vw; 
height: 80vh; 
  border-radius: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9);
  }

  .card-img-overlay-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  &:hover .card-img-overlay-hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .custom-overlay {
    transition: background-color 0.3s ease, opacity 0.3s ease;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0; /* Initially hidden */
  }
  
  &:hover .custom-overlay {
    opacity: 1; /* Display on hover */
  }
  
`;

export default Home;
