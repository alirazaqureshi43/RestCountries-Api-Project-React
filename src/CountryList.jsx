import React, { useEffect, useState } from 'react';
import Country from './Country'
import Search from './Search';
import styles from './main.css'
function CountryList() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        // setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) 
  );
  return (
    <div>
      <Search searchQuery={searchQuery} onSearch={handleSearch}  /> 
      <h1 className={'country-h1'}>Country List</h1>

      { 
      filteredCountries ? filteredCountries.map((country) => (
            <Country key = {country.name.common} country ={country} /> )) :
      
      countries.map((country) => (
            <Country key = {country.name.common} country ={country} />      
      ))
      }

      {
        filteredCountries.length === 0 ? <h2 style={{color: 'white'}}> Country Not Found</h2> : filteredCountries.map((country) => (
          <Country key = {country.name.common} country ={country} /> ))
      }
    </div>
  );
}

export default CountryList;