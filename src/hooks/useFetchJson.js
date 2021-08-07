import { useEffect, useState } from "react";

export const useFetchJson = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendRequest = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: options.method ? options.method : "GET",
          headers: options.headers
            ? options.headers
            : { "Content-Type": "application/json" },
          body: options.body ? JSON.stringify(options.body) : null,
        });
        if (!response.ok) {
          throw new Error("Компонент Error");
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    sendRequest();
  }, [options.method, options.headers, options.body, url]);

  return [data, loading, error];
};
