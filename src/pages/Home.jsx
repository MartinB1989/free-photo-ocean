import React from "react";
import Searcher from "./../components/Searcher"
import './../assets/style/pages/home.css'
import Hero from "../components/Hero";
import { useEffect } from "react";
import photosService from "../services/photos";
import { useState } from "react";

const Home = () => {
  const [bgImage, setBgImage] = useState()
  useEffect(() => {
    const getPhotoForHero = async () => {
      const photo = await photosService().getRandomPhoto()
      setBgImage(photo.urls.regular)
    }
    getPhotoForHero()
  },[])

  return (
    <>
      <Hero bgImage={ bgImage }>
        <h1 className="header">Search a free image, no copyrights</h1>
        <Searcher />
      </Hero>
    </>
  )
}

export default Home
