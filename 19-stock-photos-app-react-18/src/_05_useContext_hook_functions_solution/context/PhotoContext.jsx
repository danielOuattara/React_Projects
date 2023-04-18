import { useContext, createContext } from "react";
import { useFetchPhotos } from "../customHooks";

export const PhotoContext = createContext();

export default function PhotoContextProvider({ children }) {
  const {
    loading,
    photos,
    page,
    query,
    error,
    setPhotoState,
    submitQueryRequest,
  } = useFetchPhotos();
  return (
    <PhotoContext.Provider
      value={{
        loading,
        photos,
        page,
        query,
        error,
        setPhotoState,
        submitQueryRequest,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
}

export const usePhotoContext = () => {
  return useContext(PhotoContext);
};
