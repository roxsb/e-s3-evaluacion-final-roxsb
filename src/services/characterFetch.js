

const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const getHPCharacter = () => fetch(ENDPOINT)
.then(response => response.json())

export{getHPCharacter};