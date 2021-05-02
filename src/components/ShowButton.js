import React from "react"
import PropTypes from "prop-types"

const ShowButton = ({ country, setFilter, setDisplay }) => {
    return (
        <button className='rounded px-3 py-2 m-1 shadow-lg bg-blue-800 border-blue-900 text-white'
            type="button"
            value={country.name}
            onClick={() => {
                setFilter(country.name)
                setDisplay([country])
                return null
            }}
        >
      show
        </button>
    )
}


ShowButton.propTypes = {
    country: PropTypes.object,
    setFilter: PropTypes.func,
    setDisplay: PropTypes.func,


}


export default ShowButton
