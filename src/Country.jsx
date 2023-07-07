// import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
function CountryList({ country }) {
//   const [country, setCountry] = useState([]);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/name/pakistan');
//         const data = await response.json();
//         setCountry(data);

//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <img src={country.flags.png} alt="flag" /> <br></br>
      <Link to={`country/${country.name.common}`}>Learn More..</Link>
    </div>
    
  );
}

export default CountryList;