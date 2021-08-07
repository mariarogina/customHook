import React from "react";
import { useFetchJson } from "../hooks/useFetchJson";

const Data = () => {
  const [data, loading, error] = useFetchJson("http://localhost:7070/data", {});

  return (
    <div>
      <span>Компонент Data</span>
      {data && <p className="text-centered">{data.status}</p>}

      {data && (
        <p className="text-centered">
          Данные c сервера:  {data.myData.glossary.title}
        </p>
      )}
    </div>
  );
};

export default Data;
