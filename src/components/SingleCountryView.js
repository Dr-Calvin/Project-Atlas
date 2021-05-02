import React, {useEffect} from "react"
import axios from "axios"
import PropTypes from "prop-types"


const SingleCountryView = ({ country, setWeather, api_key, weather }) => {
    return (
        <div>
            <p className='text-3xl'>
                {country.name}
            </p>
            <p>Population: {country.population}</p>
            <br />
            <img src={country.flag} height="200px" className='mx-auto w-32' alt={`${country.name} flag`} />
            <h3 className='py-2 text-blue-600'>Capital: {country.capital}</h3>

            <h3>Official Languages:</h3>
            <ul>
                {country.languages.map((el) => (
                    <li key={el.iso639_1}>{el.name}</li>
                ))}
            </ul>
            <br />
            <h4>Dialing Code: {"[+" + country.callingCodes + "]"}</h4>
            <br />
            <h2>Current Weather ({country.capital}):</h2>
            {useEffect(() => {
        
                axios
                    .get(
                        `https://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital} & units = m
& language = en`
                    )
                    .then((response) => {
                        setWeather(response.data)
                        console.log(response.data)
                    })
            }, [api_key, country.capital, setWeather])}
            {weather.current !== undefined ? (
                <div>
                    <p>Temperature: {weather.current.temperature} Celcius</p>
                    <p>
                        <img className='mx-auto'
                            src={weather.current.weather_icons[0]}
                            alt={weather.current.weather_descriptions[0]}
                        />
                    </p>
          Wind: {weather.current.wind_speed} mph, Direction:{" "}
                    {weather.current.wind_dir}
                </div>
            ) : <p>Weather information currently unavailable</p>}
        </div>
    )
}

SingleCountryView.propTypes = {
    api_key:PropTypes.string,
    country: PropTypes.object,
    setFilter: PropTypes.func,
    setWeather: PropTypes.func,
    weather: PropTypes.ojbect,
    setDisplay: PropTypes.func,


}

export default SingleCountryView
