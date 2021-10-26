import { GetYearRelease } from '../../Utils/getYearRelease'
import { FaPlay } from "react-icons/fa";
import './style.css'

export function FeatureMovie({ item }) {
  const yearDateRelease = GetYearRelease(item.first_air_date)
  const featuredGenres  = item.genres.map(genre => genre.name).join(", ")
  
  let description = item.overview

  if(description.length > 200) {
    description = description.substring(0, 200)+'...'
  }
  
  return (
    <section 
      className="featuredMovieWrapper" 
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <div className="featuredVerticalGradient">
        <div className="featuredHorizontalGradient">
          <h1 className="featuredName">{item.original_name}</h1>
          <div className="featuredInfo">
            <span className="featuredPoints">{item.vote_average}</span>
            <span className="featuredYear">{yearDateRelease}</span>
            <span className="featuredSeasons">{item.number_of_seasons} {item.number_of_seasons !== 1 ? "temporadas" : "temporada"}</span>
          </div>
          <p className="featuredDescription">{description}</p>
          <div className="featuredButtonsWrapper">
            <a href={ `/watch/${item.id}` } className="featuredWatchButton">
              <FaPlay/>
              Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="featuredAddListButton"> + Minha lista</a>
          </div>
          <div className="featuredGenres">
            <strong>Gêneros: </strong>
            {featuredGenres}
          </div>

        </div>
      </div>
    </section>
  )
}