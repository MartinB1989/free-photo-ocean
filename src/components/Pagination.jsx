import React from 'react'
import '../assets/style/components/pagination.css'
import { Link } from "react-router-dom";

const Pagination = ({
    currentPage,
    totalItems,
    hasPrev,
    hasNext,
    nextPage,
    prevPage,
    totalPages,
    keyWord
  }) => {

  function linkNumber () {
    let numberPage = []
    let page = Number(currentPage)
    const initialNumberPage = page <= 3 ? 1 : page - 3
    const endNumberPage = page + 3 > totalPages ? totalPages : page + 3

    for(let i = initialNumberPage; i <= endNumberPage; i++) {
      numberPage.push(<Link key={ 'page-' + i} to={'/search?key_word='+ keyWord + '&page=' + i} className={ `page_number ${ page === i ? 'active' : '' }` }>{ i }</Link>)
    }
    return numberPage
  }
  function prevPageActiveOrNot() {
    if (hasPrev) {
      return <Link to={'/search?key_word='+ keyWord + '&page=' + Number(prevPage)} className='page_number'>Prev</Link>
    }
    return <span className='page_number inactive'>Prev</span>
  }
  function nextPageActiveOrNot() {
    if (hasNext) {
      return <Link to={'/search?key_word='+ keyWord + '&page=' + Number(nextPage)} className='page_number'>Next</Link>
    }
    return <span className='page_number inactive'>Next</span>
  }
  return (
    <div className='pagination_main'>
      <Link to={'/search?key_word='+ keyWord + '&page=1'} className='page_number'>First page</Link>
    <span className='page_number'>|</span>
      { prevPageActiveOrNot() }
      { (Number(currentPage) - 3) > 1 && <span className='page_number'>...</span> }
      { linkNumber() }
      { (Number(currentPage) + 3) < totalPages && <span className='page_number'>...</span> }
      { nextPageActiveOrNot() }
      <span className='page_number'>|</span>
      <Link to={'/search?key_word='+ keyWord + '&page=' + totalPages} className='page_number'>Last page</Link>
    </div>
  )
}

export default Pagination