import { useState, useEffect } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleFetchData = async () => {
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData);
    setLoading(false);
  };

  useEffect(() => {
    handleFetchData();
  }, [url]);

  return { data, loading };
}

export default useFetch;
