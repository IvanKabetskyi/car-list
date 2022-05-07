import axios from 'axios';

const restApi = axios.create({baseURL: 'https://myfakeapi.com/api'});

export default restApi;
