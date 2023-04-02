import React from "react";
import Searcher from "./../components/Searcher"
import './../assets/style/pages/home.css'
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero >
        <h1 className="header">Search a free image, no copyrights</h1>
        <Searcher />
      </Hero>
    </>
  )
}

export default Home
