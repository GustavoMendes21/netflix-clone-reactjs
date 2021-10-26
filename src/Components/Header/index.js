import { useState } from 'react'
import './style.css'

export function Header() {
  const [blackHeader, setBlackHeader] = useState(false)
  
  
  function scrollistener() {
    if(window.scrollY > 60) {
      setBlackHeader(true)
    } else {
      setBlackHeader(false)
    }
  }

  window.addEventListener("scroll", scrollistener) 
  
  return (
    <header className={blackHeader ? "black" : ""}>
      <a href="/" className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo-netflix"></img>
      </a>
      <a href="/" className="userIcon">
        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="logo-netflix"></img>
      </a>      
    </header>
  )
}