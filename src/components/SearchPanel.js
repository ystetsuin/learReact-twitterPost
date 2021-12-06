import React from 'react'
import '../styles/SearchPanel.css'

const SearchPanel = ({onUpdate}) => {

    return (
        <input
        onChange={(e) => onUpdate(e.target.value)}
        className="form-control search-input"
        type="text"
        placeholder="Search by posts"
        />
    )
}

export default SearchPanel
