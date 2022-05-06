import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchImages = async () => {
    try {
      setLoading(true);
      let url = "";
      let nextPages = `&page=${page}`;
      let userQuery = `&query=${query}`;
      if (query) {
        url = `${searchUrl}${clientID}${nextPages}${userQuery}`;
      } else {
        url = `${mainUrl}${clientID}${nextPages}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status} `);
      }
      const data = await response.json();
      setPhotos((previousData) => {
        if (query && page === 1) {
          return [...data.results];
        } else if (query) {
          return [...previousData, ...data.results];
        } else {
          return [...previousData, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  console.log(photos);

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
    setPage(1)
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
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
