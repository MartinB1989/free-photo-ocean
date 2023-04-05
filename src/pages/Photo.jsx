import React, { useEffect, useState } from 'react'
import Searcher from '../components/Searcher'
import { useParams } from 'react-router-dom'
import photosService from '../services/photos'
import './../assets/style/pages/photo.css'

const Photo = () => {
  const { photo_id } = useParams()
  const [currentPhoto, setCurrentPhoto] = useState([])
  useEffect(() => {
    const getPhoto = async () => {
      const element = await photosService().getPhotoById(photo_id)
      const photo = {
          description: element.description,
          url: element.urls.raw,
          downloads: element.downloads,
          tags: element.tags.map(tag => {
            return tag.title
          })
        }
      setCurrentPhoto(photo)
    }
    getPhoto()
  }, [photo_id])

  return (
    <div>
      <div>
        <Searcher />
        <div className='photo_container'>
          <div className='img_container'>
            <img src={currentPhoto.url} alt="alt" />
          </div>
          <div className='image_info'>
            <p className='image_description'>
              { currentPhoto.description ?? 'There is not description for this image' }
            </p>
            <a href='' className='download_btn'>Descargar</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo