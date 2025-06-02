import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        console.error("API Error:", error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
