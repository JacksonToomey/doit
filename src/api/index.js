import axios from 'axios';
import cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  transformRequest: [(data, headers) => {
    const token = cookies.get('token');
    // eslint-disable-next-line no-param-reassign
    headers.Authorization = token;
    return JSON.stringify(data);
  }],
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
