import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCharacters } from '../actions/charactersActions';
import { getCharacters, getCharactersLoading } from '../selectors/charactersSelectors';
import Characters from '../components/Characters';

const DisplayCharacters = () => {
  const characters = useSelector(getCharacters);
  const loading = useSelector(getCharactersLoading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(updateCharacters());
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <Characters characters={characters} />
  );
};

export default DisplayCharacters;
