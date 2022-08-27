import axios from 'axios';

export const natusVincereApi = axios.create({
  baseURL: 'http://localhost:9090',
});
