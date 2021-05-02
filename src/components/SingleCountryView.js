import React, {useEffect} from "react"
import axios from "axios"
import PropTypes from "prop-types"


const SingleCountryView = ({ country, setWeather, api_key, weather }) => {
    
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    
    const degToCompass = (num)=> {
        var val = Math.floor((num / 22.5) + 0.5)
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
        return arr[(val % 16)]
    }

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios(
                    `https://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.iso639_1}&appid=${api_key}`,
                ) 
                setWeather(response.data)
            } catch(error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request)
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message)
                }
                setWeather({})
            }
        }
        fetchWeather()
    }, [])

    
    return (
        <div className='container mx-auto px-4 max-w-3xl'>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 box-content bg-white opacity-80 rounded-md mb-8">
                <div className="relative z-10 col-start-1 row-start-1 px-4 pt-8 sm:pt-2 pb-3 bg-gradient-to-t  from-black sm:bg-none">
                    <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">{country.name}</h2>
                    <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Population: {numberWithCommas(country.population)}</p>
                    <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Dialing Code: {"[+" + country.callingCodes + "]"}</p>
                    <p className="text-sm font-medium text-white sm:mb-1 sm:text-blue-600">Capital: {country.capital}</p>
                </div>
                <div className="col-start-1 row-start-2 px-4 text-left">
                    <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
                        <div className="ml-1">
                            <span className="text-black">{country.languages.length}</span>
                            
                        </div>
                        <div className="text-base font-normal mx-2">·</div>
                        <div>Official Language{country.languages.length>1?"s":""}:</div>
                    </div>
                    <ul className=''>
                        {country.languages.map((el) => (
                            <li key={el.iso639_1}>{el.name}</li>
                        ))}
                    </ul>
                    <br />
                    {weather.weather !== undefined ? (
              
                        <div>
                            <h2>Current Weather in the capital:</h2>
                            <p>Temperature: {Math.round((weather.main.temp-273.15)*10)/10} Celcius</p>
                            <p>
                                <img className='mx-auto'
                                    src={
                                        `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
                                    }
                                    alt={weather.weather[0].description}
                                />
                        Summary: {weather.weather[0].description}
                            </p>
                    Wind: {weather.wind.speed} m/s, Direction:{" "}
                            {degToCompass(weather.wind.deg)} 
                        </div>
                    ) : <p>Weather information for {country.capital} is unavailable</p>}
                </div>
                <div className="col-start-1 row-start-3 space-y-3 px-4">
                </div>
                <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
                    <div className="w-full ">
                        <div className="relative">
                            <img src={country.flag} className='mx-auto' alt={`${country.name} flag`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SingleCountryView.propTypes = {
    api_key:PropTypes.string,
    country: PropTypes.object,
    setFilter: PropTypes.func,
    setWeather: PropTypes.func,
    weather: PropTypes.object,
    setDisplay: PropTypes.func,
}

export default SingleCountryView
