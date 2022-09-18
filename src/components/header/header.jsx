import React from 'react'
import {useState} from "react"
import "./header.css"
import alien from "../../assets/alien.PNG"
import alien2 from "../../assets/alien2.jpg"
import alien3 from "../../assets/alien3.jpg"
import alien4 from "../../assets/alien4.jpg"
import alien5 from "../../assets/alien5.jpg"
import alien6 from "../../assets/alien6.jpg"
import alien7 from "../../assets/alien7.jpg"
import mushroom from "../../assets/mushroom.jpg"
import mushroom2 from "../../assets/mushroom2.jpg"
import mushroom3 from "../../assets/mushroom3.jpg"
import mushroom4 from "../../assets/mushroom4.jpg"
import mushroom5 from "../../assets/mushroom5.jpg"
import blacknwhite from "../../assets/blacknwhite.PNG"
import blacknwhite2 from "../../assets/blacknwhite2.jpg"
import blacknwhite3 from "../../assets/blacknwhite3.jpg"
import blacknwhite4 from "../../assets/blacknwhite4.jpg"
import blacknwhite5 from "../../assets/blacknwhite5.PNG"
import blacknwhite6 from "../../assets/blacknwhite6.jpg"
import blacknwhite7 from "../../assets/blacknwhite7.jpg"
import blacknwhite8 from "../../assets/blacknwhite8.jpg"
import blacknwhite9 from "../../assets/blacknwhite9.PNG"
import color from "../../assets/color.jpg"
import color2 from "../../assets/color2.jpg"
import color3 from "../../assets/color3.jpg"
import color4 from "../../assets/color4.PNG"
import color5 from "../../assets/color5.jpg"
import color6 from "../../assets/color6.PNG"
import color7 from "../../assets/color7.PNG"
import color8 from "../../assets/color8.jpg"
import color9 from "../../assets/color9.PNG"
import color10 from "../../assets/color10.jpg"
import color11 from "../../assets/color11.jpg"
import color12 from "../../assets/color12.PNG"
import color13 from "../../assets/color13.PNG"
import color14 from "../../assets/color14.PNG"
import { render } from '@testing-library/react'
import {useRef, useEffect} from 'react';
  

    

export const Header = () => {

  React.useEffect(() => {

    const previewImg = document.querySelectorAll('.img-wrapper img');
    const modalImg = document.querySelector('.modal-img');
    const modal = document.querySelector('.modal');
    const imgText = document.querySelector('.caption');
    
    previewImg.forEach((images) => {
      images.addEventListener('click', () => {
        modal.classList.add('open');
        
        const imgSrc = images.src;
        modalImg.src = imgSrc;

        const altText = images.alt
        imgText.textContent = altText;
        console.log(altText)
      });
    });
    
    modal.addEventListener('click', e => {
      if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
      }
    });

  });
  
      


  
  

  return (  
    
    <div className="Main">
        

      
      <div className="info_text">
        <h5>Hello I'm</h5>
        <h1 className='my_name'>Anton Kristiansson</h1>
        <h5>Fullstack Developer</h5>
      </div>



{/* Add new picture by adding the div wrapper, img and p. Wrapper and p only shows on Hover*/}
      
             
    
    <h2>Alien</h2>
    <div class="category_one" id="Alien">
      <div class="img-wrapper">
        <img src={alien} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={alien2} alt="hej"/>
      </div>
      <div class="img-wrapper">
        <img src={alien3} alt="LOL"/>
      </div>
      <div class="img-wrapper">
        <img src={alien4} alt="lorem ipsum"/>
      </div>
      <div class="img-wrapper">
        <img src={alien5} alt="lorem ipsum"/>
      </div>
      <div class="img-wrapper">
        <img src={alien6} alt="lorem ipsum"/>
      </div>
      <div class="img-wrapper">
        <img src={alien7} alt="lorem ipsum"/>
      </div>
    </div>

    <h2>Mushroom</h2>
    <div class="category_one" id="Mushroom">
      <div class="img-wrapper">
        <img src={mushroom} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={mushroom2} alt="hej"/>
      </div>
      <div class="img-wrapper">
        <img src={mushroom3} alt="LOL"/>
      </div>
      <div class="img-wrapper">
        <img src={mushroom4} alt="lorem ipsum"/>
      </div>
      <div class="img-wrapper">
        <img src={mushroom5} alt="lorem ipsum"/>
      </div>
    </div>

    <h2>Black n White</h2>
    <div class="category_one" id="Blacknwhite">
      <div class="img-wrapper">
        <img src={blacknwhite} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={blacknwhite2} alt="hej"/>
      </div>
      <div class="img-wrapper">
        <img src={blacknwhite3} alt="LOL"/>
      </div>
      <div class="img-wrapper">
        <img src={blacknwhite4} alt="lorem ipsum"/>
      </div>
      <div class="img-wrapper">
        <img src={blacknwhite5} alt="lorem ipsum"/>
      </div>
      <div class="img-wrapper">
        <img src={blacknwhite6} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={blacknwhite7} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={blacknwhite8} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={blacknwhite9} alt="testtes teest test"/>
      </div>
    </div>

    <h2>Color</h2>
    <div class="category_one" id="Color">
      <div class="img-wrapper">
        <img src={color} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color2} alt="hej"/>
      </div>
      <div class="img-wrapper">
        <img src={color3} alt="LOL"/>
      </div>
      <div class="img-wrapper">
        <img src={color4} alt="lorem ipsum"/>
      </div>
      <div class="img-wrapper">
        <img src={color5} alt="lorem ipsum"/>
      </div>
      <div class="img-wrapper">
        <img src={color6} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color7} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color8} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color9} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color10} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color11} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color12} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color13} alt="testtes teest test"/>
      </div>
      <div class="img-wrapper">
        <img src={color14} alt="testtes teest test"/>
      </div>
    </div>
      
      <div class="modal">
        <img class="modal-img" src="#" alt=""/>
        <p class="caption"></p>
      </div>




    </div>

    
  );

  

}

