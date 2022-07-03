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
        <div className='absolute top-20 w-full'>
            {!num || num > 10 ? (
                <p className='absolute w-full mt-32 px-4'>Please adjust your search, {num} countries match current criteria</p>
            ) : num > 1 ? ( <div >
                <CountryOptions
                    countryList={countries}
                    setFilter={setFilter}
                    setDisplay={setDisplay}
                /> </div>
            ) : (
                countries.map((country) => (
                    <div key={country.name.common} >
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
    setWeather: PropTypes.func,
    weather: PropTypes.object,
    setDisplay: PropTypes.func,


}


export default CountryInfo
