import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, asperiores consequuntur? Molestiae, similique enim. Quod quisquam necessitatibus praesentium quos magni dolorem quis eligendi, fugiat distinctio maxime molestias. Repellendus, est ipsum!</p>
      <img src={imgHomeShop} alt="Acceuil shop" />
    </div>
  )
}
