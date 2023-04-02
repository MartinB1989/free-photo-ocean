import React from 'react'
import PhotoCard from './PhotoCard'
import './../assets/style/components/grid-photos.css'

const GridPhotos = ({ column1, column2, column3}) => {
  return (
    <div className="row">
      <div className="column">
        {
          column1.map(photo => {
            return (
              <PhotoCard
                srcImg={ photo.urls.thumb} key={photo.id}
                description={photo.description}
              />
            )
          })
        }
      </div>
      <div className="column">
        {
          column2.map(photo => {
            return (
              <PhotoCard
                srcImg={ photo.urls.thumb}
                key={photo.id}
              />
            )
          })
        }
      </div>
      <div className="column">
        {
          column3.map(photo => {
            return (
              <PhotoCard
                srcImg={ photo.urls.thumb} key={photo.id}
                description={photo.description}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default GridPhotos