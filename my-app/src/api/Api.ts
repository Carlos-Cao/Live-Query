import axios from 'axios';

const api = axios.create({
    baseURL: "https://livequeryapi.azurewebsites.net/api/Questions"
})

export default api;