import React, { useState } from "react";
import "./../assets/style/components/searcher.css"
import { Link, useNavigate } from "react-router-dom";

const Searcher = () => {
  const [inputValue, setInputValue] = useState()
  const navigate = useNavigate()
  const getData = e => {
    setInputValue(e.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate('/search?key_word='+ inputValue + '&page=1')
    }
  };
  return (
    <>
    <div className="searcher_container">
      <input type="text" className="searcher_input" onChange={ getData } onKeyDown={ handleKeyDown } />
      <Link to={ '/search?key_word='+ inputValue + '&page=1'}>
        <button className="search_button">Search</button>
      </Link>
    </div>
    </>
  )
}

export default Searcher