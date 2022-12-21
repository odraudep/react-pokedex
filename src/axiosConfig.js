import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios;
