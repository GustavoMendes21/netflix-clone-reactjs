import axios from 'axios'

const API_KEY = "c452ede8f550a680aa74cbf98f357fd6"
const API_BASE = "https://api.themoviedb.org/3"

/*
  - originais da netlfix,
  - recomendados (trending)
  -  em alta(top rated)
  - ação
  - comédia
  - terror
  - romance 
  - documentários
*/

const api = axios.create({
  baseURL: API_BASE
})

const getItems = async (endpoint) => {
  const response = await api.get(endpoint)

  return response.data
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await getItems(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await getItems(`/trending/all/day?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'topRated',
        title: 'Em alta',
        items: await getItems(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await getItems(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await getItems(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await getItems(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await getItems(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await getItems(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

      },
    ]
  },
  getMovieInfo: async (id, type) => {
    let info = {}

    if(id) {
      switch(type) {
        case 'movie ':
          info = await getItems(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
        break;
        case 'tv': 
          info = await getItems(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
        break
        default :
          info = null
      }
    }

    return info
  }
}