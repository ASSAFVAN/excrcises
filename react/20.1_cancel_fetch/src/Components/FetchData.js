import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const FetchData = () => {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const search = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/random`,
          {
            cancelToken: source.token,
          }
        );
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    search();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div>
      <div>{isLoading}</div>
      <p>{joke}</p>
    </div>
  );
};

export default FetchData;
