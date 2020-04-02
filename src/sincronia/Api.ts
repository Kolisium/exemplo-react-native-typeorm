import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://192.168.0.103:3300/api',
});

export default Api;
