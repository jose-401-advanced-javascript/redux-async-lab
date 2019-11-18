import React from 'react';
import { useSelector } from 'react-redux';
import { getCharacters } from '../actions/charactersActions';
import Character from '../components/Character';

const DisplayCharacters = () => {
  const characters = useSelector(getCharacters);

  return (
    <Character characters={characters} />
  );
};

export default DisplayCharacters;
