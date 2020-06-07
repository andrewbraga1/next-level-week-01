import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.43.224:3333'
});

export default api;
