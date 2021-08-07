import React from "react";
import { useFetchJson } from "../hooks/useFetchJson";
import Loader from "./Loader";

const Loading = () => {
  const [data, loading, error] = useFetchJson(
    "http://localhost:7070/loading",
    {}
  );
  return (
    <div>{loading && <Loader />}</div>
  );
};

export default Loading;
