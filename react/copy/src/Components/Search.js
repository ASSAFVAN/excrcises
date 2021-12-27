import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1/");
      setResults(data);
      console.log(results);
    };
    search();
  }, []);

  const renderedResults = () => {
    return (
      <div key={results.title}>
        <div>Name:{results.title}</div>
        <div>Director:{results.director}</div>
      </div>
    );
  };

  return (
    <div>
      <div>{renderedResults()}</div>
    </div>
  );
};

export default Search;
