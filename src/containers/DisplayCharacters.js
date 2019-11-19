import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCharacters } from '../actions/charactersActions';
import { getCharacters } from '../selectors/charactersSelectors';
import Characters from '../components/Characters';

const DisplayCharacters = () => {
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(updateCharacters());
  }, []);

  return (
    <Characters characters={characters} />
  );
};

export default DisplayCharacters;
