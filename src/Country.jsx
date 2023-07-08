// import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './main.css'
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
    <div  className={'country container'} >
      <div>
      <h2><b>Country: </b>{country.name.common}</h2>
      <p><b>Capital: </b> {country.capital}</p>
      <p><b>Population: </b> {country.population}</p>
      <p><b>Region: </b>{country.region}</p>
     
      <Link to={`country/${country.name.common}`}>Learn More..</Link>
      </div>
      <img src={country.flags.png} alt="flag" /> <br></br>
    </div>
    
  );
}

export default CountryList;