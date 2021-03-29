import axios from 'axios';
import { getItem } from '@/utils/storage';

axios.defaults.baseURL = 'https://quattroapp.ru/api';

axios.interceptors.request.use(config => {
  const token = getItem('token');
  const authorizationToken = token ? `Token ${token}` : '';
  config.headers.Authorization = authorizationToken;
  return config;
});

export default axios;
