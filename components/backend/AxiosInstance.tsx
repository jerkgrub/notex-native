import axios from 'axios';

// ip address of the machine running the backend server
const ip = '192.168.1.4'; // choifsssssssssssssssssssss
// ip address of the machine running the backend server

const AxiosInstance = axios.create({
  baseURL: `http://${ip}:8000/api`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default AxiosInstance;
