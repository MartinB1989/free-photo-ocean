import React from 'react'
import './../assets/style/components/card.css'
import { useNavigate } from 'react-router-dom'
import Tag from './Tag'
const Card = ({ srcImg, description, tags = [], alt='alt-description', id }) => {
  const navigate = useNavigate()
  const goTo = (photoId) => {
    navigate('/photo/'+ photoId)
  }
  return (
    <div className='card_main' onClick={() => goTo(id)}>
      <div className='cool_bg'></div>
      <div className='card'>
        <div className='img_container'>
          <img
            src={ srcImg }
            alt={alt}
          />
        </div>
        <div className='text_container'>
          <p className='description'>{ description }</p>
          <div className='tags'>
            {
              tags.map((tag, i) => <Tag tag={tag} key={ 'card-' + i }/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card