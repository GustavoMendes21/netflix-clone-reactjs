import { useEffect, useState } from 'react'
import api from '../../services/api'



export function Home() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList()
      setMovieList(list)
    }
    loadAll()
  }, [])

  
  return (
    <h1>HomePage</h1>
  )
}