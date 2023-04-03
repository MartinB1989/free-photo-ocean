import React, { useEffect, useState } from "react";
import searchService from "../services/search";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";
import Searcher from "../components/Searcher";
import Card from "../components/Card";
import './../assets/style/pages/search.css'
// import GridPhotos from "../components/GridPhotos";

const Search = () => {
  const [dataPhotos, setDataPhotos] = useState([])
  const [photosColumn1, setPhotosColumn1] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { search } = useLocation()

  const query = new URLSearchParams(search)
  const keyWord = query.get('key_word')
  const page = query.get('page')

  useEffect(() => {
    try {
      setIsLoading(true)
      const search = async () => {
        const { results } = await searchService().searchPhotos({
          keyWord,
          page
        })
        const photos = results.map(element => {
          return {
            id: element.id,
            url: element.urls.thumb,
            tags: element.tags?.map(tag => {
              return tag.title
            }),
            description: element?.description,
            alt: element.alt_description
          }
        })
        setDataPhotos(photos)
      }
      search()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [keyWord, page])

  useEffect(() => {
    setPhotosColumn1(dataPhotos.slice(0,19))

  }, [dataPhotos])

  return (
    <>
      <Hero height="500px">
          <h1>Search a free image, no copyrights</h1>
          <Searcher />
      </Hero>
      <div className="cards">
        { isLoading ?
          <h1>Cargando</h1> :
          photosColumn1.map(photo => {
            return (
              <Card
                key={photo.id}
                srcImg={ photo.url }
                description={ photo.description ?? 'No title'}
                tags={photo.tags}
                alt={photo.alt}
                id={ photo.id }
              />
            )
          })
        }
      </div>
    </>
  )
}

export default Search