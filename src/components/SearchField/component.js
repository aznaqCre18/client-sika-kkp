import React from 'react'
import { SearchIcon } from '../../configs/icons'

function SearchField({onChange, placeholder, onEnter}) {
  return (
    <div className="search-field-container">
        <img src={SearchIcon} alt="search-icon" />
        <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default SearchField