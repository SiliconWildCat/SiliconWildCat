import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://34.81.205.172:8000/';

// client.defaults.baseURL = '';
//client.defaults.withCredentials = true;

export default client;
