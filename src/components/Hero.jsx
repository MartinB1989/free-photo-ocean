import React from 'react'
import './../assets/style/components/hero.css'

const defImg = 'https://images.unsplash.com/photo-1678802765102-a1da63a40fac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

const Hero = ({ bgImage = defImg, height = '600px' , children }) => {
  const hero_line_style = {
    height,
    backgroundImage: `url(${bgImage})`
  }
  return (
    <>
      <div className="hero" style={ hero_line_style }>
        <div className="overlay">
          { children }
        </div>
      </div>
    </>
  )
}

export default Hero