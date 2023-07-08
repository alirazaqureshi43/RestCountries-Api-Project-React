import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './main.css'
import { Link } from "react-router-dom";
function CountrySingle() {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  // console.log(name)
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const encodedName = encodeURIComponent(name);
        // console.log(name)
        const response = await fetch(`https://restcountries.com/v3.1/name/${encodedName}`);
        if (response.ok) {
          const [data] = await response.json();
          setCountry(data);
        } else {
          throw new Error('Country not found');
        }
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };

    fetchCountry();
  }, [name]);

  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <div className='container'>
       {country ? (
        <>
           <h1 className='country-h1'>{country.name?.common}</h1>

        <div className='single-country'>
          <div>
          <p> <b>Full Name:</b> {country.name?.official}</p>
          <p><b>Capital:</b> {country.capital?.[0]}</p>
          <p><b>Population:</b> {country.population}</p>
         <p><b>Area:</b> {country.area} Square Kilometers</p>
           {/* <p>Location: {country.latlng[0]} Lat {country.latlng[1]} Lng</p> */}
          <p><b>Region: </b>{country.region}</p>
          <p><b>Subregion:</b> {country.subregion}</p>
          <p><b>Landlocked:</b> {country.landlocked ? "Yes" : "No"}</p>
          <p><b>Timezones:</b> {country.timezones}</p>
          </div>
          
           {/* <p>Borders: {country.borders.join(' ')}</p> 
          <p>Flag Meaning: {country.flags.alt}</p> */}
          
          
          {/* <p>Languages: {
          Object.values(country.languages).forEach (value =>{
            console.log(value)
          })
          }</p> */}
        <img src={country.flags?.png} alt="flag" /> <br></br>
        
        </div>
        </>
      ) : (
        <p>Loading country data...</p>
      )}

        <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default CountrySingle

