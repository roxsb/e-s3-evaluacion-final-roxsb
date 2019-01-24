
const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const getHPCharacterList = () => fetch(ENDPOINT)
.then(response => response.json())

export{getHPCharacterList};