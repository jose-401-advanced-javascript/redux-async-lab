import { fetchCharacters } from '../services/avatarApi';
import { createAction } from 'promise-middleware-redux';

// export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
// export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
// export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';

export const updateCharacters = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS_LOADING
  });

  fetchCharacters()
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });

      dispatch({
        type: FETCH_CHARACTERS_DONE
      });
    });
};

// const updateCharactersPromise = () => ({
//   type: FETCH_CHARACTERS,
//   pendingType: FETCH_CHARACTERS_LOADING,
//   fulfilledType: FETCH_CHARACTERS_DONE,
//   payload: fetchCharacters()
// });

export const [
  updateCharactersPromise,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_DONE
] = createAction('FETCH_CHARACTERS', fetchCharacters);
