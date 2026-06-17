import axios from 'axios';

export const brasilApiConnection = axios.create({
  baseURL: process.env.BRASIL_API_CONNECTION,
});
