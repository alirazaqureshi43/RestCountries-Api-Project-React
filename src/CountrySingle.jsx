import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
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
    <div>
       {country ? (
        <div>
          <h2>{country.name?.common}</h2>
          <p>Capital: {country.capital?.[0]}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
        <img src={country.flags?.png} alt="flag" /> <br></br>
        </div>
      ) : (
        <p>Loading country data...</p>
      )}
    </div>
  )
}

export default CountrySingle

