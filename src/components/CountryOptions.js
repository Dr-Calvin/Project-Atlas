import React from 'react'
import ShowButton from './ShowButton'

const CountryOptions = ({ countryList, setFilter, setDisplay }) => {
  return (
    <div >
    <ul>
      

      {countryList.map((c) => {
        return (
          <li key={c.alpha2Code}>
            {c.name} {"[+" + c.callingCodes + "]"}{" "}
            <ShowButton
              setDisplay={setDisplay}
              setFilter={setFilter}
              country={c}
            />
          </li>
        );
      })}
    </ul>
      </div>
  );
};
export default CountryOptions
