import { useEffect, useState } from 'react'
import { FeatureMovie } from '../../Components/FeatureMovie'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { Loading } from '../../Components/Loading'
import { MovieRow } from '../../Components/MovieRow/index'

import api from '../../services/api'
import './style.css'



export function Home() {
  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList()
      setMovieList(list)
      
      let originalsCategory = list.filter(item => item.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originalsCategory[0].items.results.length) - 1)
      let chosen = originalsCategory[0].items.results[randomChosen]
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv')
      
      setFeatureData(chosenInfo)
    }
    

    loadAll()
  }, [])

  
  return (
    <div className="page">
      <Header/>
      {featureData && <FeatureMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, index) => (
          <MovieRow title={item.title} items={item.items} key={index}/>
        ))}
      </section>
      {movieList.length <= 0 && <Loading/>}
      <Footer/>
    </div>
  )
}