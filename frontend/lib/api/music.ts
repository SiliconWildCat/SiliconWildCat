import client from './client';

export const getMusic = () => client.get(`/SVS`);
