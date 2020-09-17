import axios from 'axios';

const api = axios.create({
    url: "https://livequeryapi.azurewebsites.net/api/Questions"
})

export default api;