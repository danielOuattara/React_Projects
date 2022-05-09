import React from "react";
import useFetch from "../hooks/useFetch";

export const PhotoContext = React.createContext();

function PhotoContextProvider(props) {
  const { loading, photos, error, page, query, setQuery, submitQueryRequest } = useFetch();
  return (
    <PhotoContext.Provider value={{ loading, photos, error, page, query, setQuery, submitQueryRequest }}>
      {props.children}
    </PhotoContext.Provider>
  );
}

export default PhotoContextProvider;
