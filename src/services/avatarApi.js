export const fetchCharacters = (page) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
    .then(results => results.json());
};
