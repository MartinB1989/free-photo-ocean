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
          description: element.description ?? 'There is not description for this image',
          url: element.urls.raw,
          urlDownload: element.urls.full,
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
    <div className='photo__parent'>
      <div className='photo__body'>
        <div className='photo__menu'>
          <Searcher />
        </div>
        <div className='photo_container'>
          <div className='photo__img_container'>
            <img src={currentPhoto.url} alt="alt" />
          </div>
          <div className='photo__image_info'>
            <p className='photo__image_description'>
              { currentPhoto.description }
            </p>
            <a href={ currentPhoto.urlDownload } download target='_blank' className='photo__download_btn' rel="noreferrer">Descargar</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo