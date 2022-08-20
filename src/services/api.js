import axios from 'axios';
//https://api.themoviedb.org/3/movie/now_playing?api_key=e805e9778b716d4245f886bc7ad93a98

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;