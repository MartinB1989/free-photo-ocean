import React, { useEffect, useState } from "react";
import searchService from "../services/search";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";
import Searcher from "../components/Searcher";
import GridPhotos from "../components/GridPhotos";

const Search = () => {
  const [dataPhotos, setDataPhotos] = useState([])
  const [photosColumn1, setPhotosColumn1] = useState([])
  const [photosColumn2, setPhotosColumn2] = useState([])
  const [photosColumn3, setPhotosColumn3] = useState([])
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
        setDataPhotos(results)
      }
      search()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [keyWord, page])

  useEffect(() => {
    setPhotosColumn1(dataPhotos.slice(0,9))
    setPhotosColumn2(dataPhotos.slice(10,19))
    setPhotosColumn3(dataPhotos.slice(20,29))

  }, [dataPhotos])

  return (
    <>
      <Hero height="500px">
          <h1>Search a free image, no copyrights</h1>
          <Searcher />
      </Hero>
      {
        isLoading ?
          <div>
            <h1>Cargando</h1>
          </div> :
          <GridPhotos
            column1={ photosColumn1 }
            column2={ photosColumn2 }
            column3={ photosColumn3 }
          />
      }
    </>
  )
}

export default Search