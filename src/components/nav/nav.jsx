import React from 'react'
import "./nav.css"
import {useState} from "react"
import CTA from "./CTA"
import { Link } from "react-scroll";


export const Nav = () => {
  
  const [navbar,setnavbar] = useState(false)


  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  };

  window.addEventListener("scroll", changeBackground)

  return (
    <div>
      
    <nav className={navbar ? "navbar active" : "navbar"}>
      <Link activeClass="active" spy to="info_text" offset={-150}><p>Home</p></Link>
      <Link activeClass="active" spy to="Alien" offset={-160}><p>Alien</p></Link>
      <Link activeClass="active" spy to="Mushroom" offset={-160}><p>Mushroom</p></Link>
      <Link activeClass="active" spy to="Blacknwhite" offset={-160}><p>Black n White</p></Link>
      <Link activeClass="active" spy to="Color" offset={-160}><p>Color</p></Link>      
    </nav>
    <CTA />    

    </div>
    
  )
}

// <a href='#Landscape' onClick={() => setActiveNav("#Landscape")} className={activeNav === "#Landscape" ? "active" : ""}>Landscape</a>
//<a href='#Texture' onClick={() => setActiveNav("#Texture")} className={activeNav === "#Texture" ? "active" : ""}>Texture</a>
//<a href='#Space' activeClass="active" smooth spy to="Space" onClick={() => setActiveNav("#Space")} className={activeNav === "#Space" ? "active" : ""}>Space</a>
//<a href='#Animals' onClick={() => setActiveNav("#Animals")} className={activeNav === "#Animals" ? "active" : ""}>Animals</a>