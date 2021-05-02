import React, { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import CountryInfo from "./components/CountryInfo"
// import Header from './components/Header'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState([])
    const [display, setDisplay] = useState([])
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_WEATHERSTACK_API_KEY

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        let disp = countries.filter((p) =>
            p.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setDisplay(disp)
    }

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
            setCountries(response.data)
        })
    }, [])

    return (
        <div className='text-center'>
            <Filter handleFilterChange={handleFilterChange} filter={filter} />
            <CountryInfo
                countries={display}
                setFilter={setFilter}
                setDisplay={setDisplay}
                setWeather={setWeather}
                api_key={api_key}
                weather={weather}
            />
        </div>
    )
}

export default App
