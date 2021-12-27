import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Search = () => {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");

  const [query, setQuery] = useState("hooks");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/categories`
        );
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    search();
  }, []);

  // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   setQuery(value);
  // };

  const handleClick = async (e) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${e.target.innerText}`
      );
      setJoke(data.value);
    } catch (error) {}
    setIsLoading(false);
  };

  const displayCategories = categories.map((category, index) => {
    return (
      <Fragment key={index}>
        <button onClick={handleClick}>{category}</button>
      </Fragment>
    );
  });

  return (
    <div>
      <div className="results-list">{displayCategories}</div>
      <p>{joke}</p>
    </div>
  );
};

export default Search;
