import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Search = () => {
  const [country, setCountry] = useState([]);
  const [filteredData, setFilteredData] = useState(country);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountry(data);
      setFilteredData(data);
    };
    search();
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    console.log(value);
    let result = [];
    result = country.filter((data) => {
      return data.name.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

  const renderedCountries = filteredData.map((country) => {
    return (
      <Fragment key={country.alpha2Code}>
        <li>{country.name}</li>
      </Fragment>
    );
  });

  return (
    <div>
      <div>{<input onChange={(event) => handleSearch(event)} />}</div>
      <ul className="countries-list">{renderedCountries}</ul>
    </div>
  );
};

export default Search;
