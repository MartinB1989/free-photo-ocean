import React from "react";
import './../assets/style/components/photo-card.css'
const PhotoCard = ({ srcImg, title = '' }) => {
  return (
    <>
      <img src={ srcImg } alt="card" className="card_image"/>
      <h2>{ title }</h2>
    </>
  )
}

export default PhotoCard