import React from 'react';
import PropTypes from 'prop-types';
import RocketItem from './RocketItem';

const RocketList = (props) => {
  const { rockets } = props;

  return (
    <ul>
      { rockets.map((rocket) => <RocketItem key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RocketList;
