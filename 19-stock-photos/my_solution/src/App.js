import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
// const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  console.log("page = ", page);

  const fetchImages = async () => {
    try {
      setLoading(true);
      let nextPages = `&page=${page}`;
      let url;
      url = `${mainUrl}${clientID}${nextPages}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status} `);
      }
      const data = await response.json();
      setPhotos((previousData) => [...previousData, ...data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      // console.log(`inner height ${window.innerHeight}`);
      // console.log(`scroll_Y ${window.scrollY}`);
      // console.log(`body_height ${window.document.body.scrollHeight}`);
      const margin = 40;
      if (
        !loading &&
        window.innerHeight + window.scrollY + margin >=
          window.document.body.scrollHeight
      ) {
        setLoading(true);
        setPage((page) => page + 1);
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello");
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder="search" className="form-input" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
