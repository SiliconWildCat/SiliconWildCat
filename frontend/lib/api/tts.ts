import axios from 'axios';

export const postText = ({ text }) =>
  axios.post(
    `https://jsonplaceholder.typicode.com/posts/`,
    JSON.stringify(text)
  );
export const getUsers = () =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
