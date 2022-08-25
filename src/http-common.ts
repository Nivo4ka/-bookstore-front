import axios from 'axios';
import getToken from './getToken';

export default axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});
