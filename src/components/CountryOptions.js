import React from "react"
import ShowButton from "./ShowButton"
import PropTypes from "prop-types"

const CountryOptions = ({ countryList, setFilter, setDisplay }) => {
    return (
        <div >
            <ul>
      

                {countryList.map((c) => {
                    return (
                        <li key={c.name.common}>
                            {c.name.common}
                            <ShowButton
                                setDisplay={setDisplay}
                                setFilter={setFilter}
                                country={c}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


CountryOptions.propTypes = {
    countryList: PropTypes.array,
    setFilter: PropTypes.func,
    setDisplay: PropTypes.func,
}


export default CountryOptions
