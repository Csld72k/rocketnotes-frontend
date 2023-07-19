import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-1xz0.onrender.com/'
});
