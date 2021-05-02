import React from 'react'
import CountryOptions from './CountryOptions'
import SingleCountryView from './SingleCountryView'

const CountryInfo = ({
  countries,
  setFilter,
  setDisplay,
  api_key,
  setWeather,
  weather,
}) => {
  const num = countries.length;

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
          <div className='absolute top-4 w-full'>
          <SingleCountryView
            key={country.alpha2Code}
            country={country}
            setWeather={setWeather}
            api_key={api_key}
            weather={weather}
          />
          </div>
        ))
      )}
    </div>
  );
};

export default CountryInfo
