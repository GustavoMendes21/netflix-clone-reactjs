import './style.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react'

export function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(-400)
  const widthListArea = (items.results.length) * 150
  
  function handleLeftArrow() {
    let newScroll = scrollX + Math.round(window.innerWidth / 2)
    if(newScroll > 0 ){
      newScroll = 0
    }

    setScrollX(newScroll)
  }

  function handleRightArrow() {
    let newScroll = scrollX - Math.round(window.innerWidth / 2)
    if(window.innerWidth - widthListArea > newScroll) {
      newScroll = window.innerWidth - widthListArea - 110
    }

    setScrollX(newScroll)
  }
  
  return (
    <div className="movieRowWrapper">
      <h2>{title}</h2>
      
      <div className="arrowLeft" onClick={handleLeftArrow}>
        <FaAngleLeft size="50"/>
      </div>
      <div className="arrowRight" onClick={handleRightArrow}>
        <FaAngleRight size="50"/>
      </div>

      <ul className="listArea" style={{
        marginLeft: scrollX,
        width: widthListArea + 'px'
      }}>
        {items.results.length >0 && items.results.map((item, key) => (
          <li className="listItem" key={key}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
          </li>
        ))}

      </ul>
    </div>
  )
}