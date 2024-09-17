import { useState, useEffect } from "react";

export async function fetchTest(url) {
  const response = await fetch(url);
  const loadResponse = await response.json();
  return { result: loadResponse };
}

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const response = await fetch(url);
      const loadResponse = await response.json();

      setData(await loadResponse);
      setIsLoading(false);
    };
    getData();

  }, [url]);

  return [data, isLoading];
};
