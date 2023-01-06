import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    searchApi("fish");
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      setError("");
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "clearwater",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError(error.message);
    }
  };

  return [searchApi, results, error];
};
