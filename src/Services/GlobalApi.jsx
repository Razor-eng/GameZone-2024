import axios from "axios";

const key = "4ea90d00d6204fec9f5c50fd4e2b8c41";
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key=' + key);
const getAllGames = axiosCreate.get('/games?key=' + key);
const getGameListByGenreId = (id) => axiosCreate.get('/games?key=' + key + '&genres=' + id);

export default { getGenreList, getAllGames, getGameListByGenreId };