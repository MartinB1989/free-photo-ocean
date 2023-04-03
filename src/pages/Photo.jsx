import React, { useEffect, useState } from 'react'
import Searcher from '../components/Searcher'
import { useParams } from 'react-router-dom'
import photosService from '../services/photos'

const Photo = () => {
  const { photo_id } = useParams()
  const [currentPhoto, setCurrentPhoto] = useState([])
  useEffect(() => {
    const getPhoto = async () => {
      const element = await photosService().getPhotoById(photo_id)
      const photo = {
          description: element.deescription,
          url: element.urls.full,
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
        <img width="50%" src={currentPhoto.url} alt="alte" />
      </div>
    </div>
  )
}

export default Photo