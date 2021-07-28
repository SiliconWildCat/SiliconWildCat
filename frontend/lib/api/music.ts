import client from './client';

export const getMusic = ({title}) => {
    const headers = {
        'Content-type': 'text/html; charset=UTF-8',
      };
      // const Accept = '*/*';
      const data = JSON.stringify({ title: title});
    client.get(`/SVS`,data,{headers})

};
