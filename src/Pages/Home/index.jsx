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
    api.getHomeList().then(list => setMovieList(list))
  }, [])

  useEffect(() => {
    if(movieList.length > 0) {
      let originalsCategory = movieList.filter(item => item.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originalsCategory[0].items.results.length) - 1)
      let chosen = originalsCategory[0].items.results[randomChosen]
      
      
      if(chosen) {
        api.getMovieInfo(chosen.id, 'tv').then(info => setFeatureData(info))
      }else{
        let chosen = originalsCategory[0].items.results[0]
        api.getMovieInfo(chosen.id, 'tv').then(info => setFeatureData(info))
      }
    }
  }, [movieList])

  
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