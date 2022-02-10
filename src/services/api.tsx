import axios from 'axios'

// URL FILMES EM CARTAZ
// /movie/now_playing?language=pt-BR&page=1

export const key = '9b9227a7b25e80191487c005f822f394'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
