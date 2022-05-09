import React, { useContext } from "react";
import Photo from "./Photo";
import { PhotoContext } from "./../context/PhotoContext";

function PhotosAlbum() {
  const { loading, photos } = useContext(PhotoContext);
  return (
    <section className="photos">
      <div className="photos-center">
        {photos.map((photo, index) => {
          return <Photo key={index} {...photo} />;
        })}
      </div>
      {loading && <h2 className="loading">Loading...</h2>}
    </section>
  );
}

export default PhotosAlbum;
