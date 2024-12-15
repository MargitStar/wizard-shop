import { useState, useEffect } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Not Ok");
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [url]);
  return { data, error, loading };
}

export default useFetch;
