import React from "react";
import { useFetchJson } from "../hooks/useFetchJson";

const Error = () => {
  const [data, loading, error] = useFetchJson(
    "http://localhost:7070/error",
    {}
  );
  return (
    <div>{error && <p>{error}</p>}</div>
  );
};

export default Error;
