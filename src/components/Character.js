import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, name, photoUrl }) => {
  return (
    <div key={id}>
      <img src={photoUrl} alt={name} />
      <p>{name}</p>
    </div>
  );

};

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Character;
