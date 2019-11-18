import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const Characters = ({ characters }) => {
  const characterElements = characters.map((character, i) => {
    return (
      <li key={character._id || i}>
        <Character {...character} />
      </li>
    );
  });

  return (
    <ul>
      {characterElements}
    </ul>
  );

};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    photoUrl: PropTypes.string
  }))
};

export default Characters;
