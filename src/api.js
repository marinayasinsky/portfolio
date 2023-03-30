import axios from 'axios';

const apiKey = 'a26b4e22d5b441e2887475128febf6e1';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default api;