import React from "react"
import PropTypes from "prop-types"

const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div className="m-0 w-screen absolute text-center translate-x-1/2 translate-y-1/4 top-101">
      Search Filter:{" "}
            <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
                onChange={handleFilterChange}
                value={filter}
                placeholder="Afghanistan"
            ></input>
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.array,
    handleFilterChange: PropTypes.func,
  
}

export default Filter
