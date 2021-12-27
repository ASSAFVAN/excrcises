import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("hooks");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        );
        setResults(data.hits);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    search();
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    setQuery(value);
  };

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setResults(data.hits);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const renderResults = results.map((result) => {
    return (
      <Fragment key={result.objectID}>
        <li>
          <a href={`${result.url}`} target="_blank">
            {result.title}
          </a>
        </li>
      </Fragment>
    );
  });

  return (
    <div>
      {<input value={query} onChange={(event) => handleSearch(event)} />}
      <button onClick={handleClick}>Search</button>
      {isLoading && <div>Loading...</div>}
      <ul className="results-list">{renderResults}</ul>
    </div>
  );
};

export default Search;
