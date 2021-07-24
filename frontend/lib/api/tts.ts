import axios from 'axios';

export const postText = () =>
  axios.post(`https://jsonplaceholder.typicode.com/posts/`);
export const getUsers = () =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
