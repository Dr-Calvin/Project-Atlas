import React from "react"
import PropTypes from "prop-types"

const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div className="w-screen text-center">
            <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
                onChange={handleFilterChange}
                value={filter}
                placeholder="Search for a Country"
            ></input>
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    handleFilterChange: PropTypes.func,
  
}

export default Filter
