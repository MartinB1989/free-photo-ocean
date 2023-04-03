import React from 'react'
import './../assets/style/components/tag.css'
const Tag = ({ tag = 'tag name' }) => {
  return (
    <span className='tag'>
      { tag }
    </span>
  )
}

export default Tag