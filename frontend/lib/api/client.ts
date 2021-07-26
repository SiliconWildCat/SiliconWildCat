import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://localhost:8000/';

// client.defaults.baseURL = '';
//client.defaults.withCredentials = true;

export default client;
