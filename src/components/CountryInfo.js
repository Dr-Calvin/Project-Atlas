import React from "react"
import CountryOptions from "./CountryOptions"
import SingleCountryView from "./SingleCountryView"
import PropTypes from "prop-types"

const CountryInfo = ({
    countries,
    setFilter,
    setDisplay,
    api_key,
    setWeather,
    weather,
}) => {
    const num = countries.length

    return (
        <div >
            {!num || num > 10 ? (
                <p>Please adjust your search, {num} countries match current criteria</p>
            ) : num > 1 ? ( <div className='absolute top-4 w-full'>
                <CountryOptions
                    countryList={countries}
                    setFilter={setFilter}
                    setDisplay={setDisplay}
                /> </div>
            ) : (
                countries.map((country) => (
                    <div key={country.alpha2Code} className='absolute top-4 w-full'>
                        <SingleCountryView
                            country={country}
                            setWeather={setWeather}
                            api_key={api_key}
                            weather={weather}
                        />
                    </div>
                ))
            )}
        </div>
    )
}

CountryInfo.propTypes = {
    countries: PropTypes.array,
    api_key: PropTypes.string,
    setFilter: PropTypes.func,
    setWeather: PropTypes.string,
    weather: PropTypes.object,
    setDisplay: PropTypes.function,


}


export default CountryInfo
