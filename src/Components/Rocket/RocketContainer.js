import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import RocketList from './RocketList';
import rocket from './rocket.jpg';
import './Rocket.css';

const RocketContainer = () => {
  const [rockets] = useState([
    {
      id: 1,
      name: 'Falcon 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      images: rocket,
    },
    {
      id: 2,
      name: 'Falcon 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      images: rocket,
    },
    {
      id: 3,
      name: 'Falcon 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      images: rocket,
    },
  ]);

  return (
    <Container>
      <RocketList rockets={rockets} />
    </Container>
  );
};

export default RocketContainer;
