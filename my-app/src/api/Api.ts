import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    baseURL: "https://livequeryapi.azurewebsites.net/api/Questions"
})

export default api;