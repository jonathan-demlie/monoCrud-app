import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}
export default api;
