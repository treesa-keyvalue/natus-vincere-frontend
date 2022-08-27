import axios from 'axios';

export const natusVincereApi = axios.create({
  baseURL: 'localhost:9090',
});
