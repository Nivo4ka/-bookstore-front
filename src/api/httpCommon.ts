import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/api',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

instance.interceptors.response.use((config) => {
  const token = config.data.token;
  if (token) {
    localStorage.setItem('token', token);
  }
  return config;
});

export default instance;
