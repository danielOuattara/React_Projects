import { usePhotoContext } from "../context/PhotoContext";
import Photo from "./Photo";

function PhotosAlbum() {
  const { loading, photos } = usePhotoContext();
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
