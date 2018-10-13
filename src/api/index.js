import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: { Authorization: 'Bearer token', Accept: 'application/json' },
});

export default instance;
