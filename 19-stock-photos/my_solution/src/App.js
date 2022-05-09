import React, { useContext } from "react";
import { PhotoContext } from "./context/PhotoContext";
import PhotoForm from "./components/PhotoForm";
import PhotosAlbum from "./components/PhotosAlbum";

function App() {
  const { error } = useContext(PhotoContext);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <main>
      <PhotoForm />
      <PhotosAlbum />
    </main>
  );
}

export default App;

//============================================================================================

// // back up for context transformation

// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import Photo from "./Photo";

// const mainUrl = `https://api.unsplash.com/photos/`;
// const searchUrl = `https://api.unsplash.com/search/photos/`;
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [photos, setPhotos] = useState([]);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
//   // const [error, setError] = useState(null);

//   const fetchImages = async () => {
//     try {
//       setLoading(true);
//       let url = "";
//       let nextPages = `&page=${page}`;
//       let userQuery = `&query=${query}`;

//       if (query) {
//         url = `${searchUrl}${clientID}${nextPages}${userQuery}`;
//       } else {
//         url = `${mainUrl}${clientID}${nextPages}`;
//       }
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`${response.statusText} ${response.status} `);
//       }
//       const data = await response.json();
//       console.log(data);
//       setPhotos((previousPhotos) => {
//         if (query && page === 1) {
//           return [...data.results];
//         } else if (query) {
//           return [...previousPhotos, ...data.results];
//         } else {
//           return [...previousPhotos, ...data];
//         }
//       });
//     } catch (error) {
//       // setError(error);
//       console.log(error.message);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchImages();
//   }, [page]);

//   useEffect(() => {
//     const event = window.addEventListener("scroll", () => {
//       const margin = 0;
//       if (
//         !loading &&
//         window.innerHeight + window.scrollY + margin >=
//           window.document.body.scrollHeight
//       ) {
//         setLoading(true);
//         setPage((previousPage) => previousPage + 1);
//       }
//     });
//     return () => window.removeEventListener("scroll", event);
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setPage(1);
//     if (!query) return;
//     if (page === 1) {
//       fetchImages();
//     }
//   };

//   return (
//     <main>
//       <section className="search">
//         <form className="search-form">
//           <input
//             type="text"
//             placeholder="search"
//             className="form-input"
//             value={query}
//             onChange={(event) => setQuery(event.target.value)}
//           />
//           <button type="submit" className="submit-btn" onClick={handleSubmit}>
//             <FaSearch />
//           </button>
//         </form>
//       </section>
//       <section className="photos">
//         <div className="photos-center">
//           {photos.map((photo, index) => {
//             return <Photo key={index} {...photo} />;
//           })}
//         </div>
//         {loading && <h2 className="loading">Loading...</h2>}
//       </section>
//     </main>
//   );
// }

// export default App;

//=============================================================================

// // Great Refactoring !

// import React, { useState, useEffect, useRef } from "react";
// import { FaSearch } from "react-icons/fa";
// import Photo from "./Photo";

// const mainUrl = `https://api.unsplash.com/photos/`;
// const searchUrl = `https://api.unsplash.com/search/photos/`;
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [photos, setPhotos] = useState([]);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
//   // const [error, setError] = useState(null);
//   const mounted = useRef(false);
//   const [nextPage, setNextPage] = useState(false);

//   const fetchImages = async () => {
//     try {
//       setLoading(true);
//       let url = "";
//       let nextPages = `&page=${page}`;
//       let userQuery = `&query=${query}`;

//       if (query) {
//         url = `${searchUrl}${clientID}${nextPages}${userQuery}`;
//       } else {
//         url = `${mainUrl}${clientID}${nextPages}`;
//       }
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`${response.statusText} ${response.status} `);
//       }
//       const data = await response.json();
//       console.log(data);
//       setPhotos((previousPhotos) => {
//         if (query && page === 1) {
//           return [...data.results];
//         } else if (query) {
//           return [...previousPhotos, ...data.results];
//         } else {
//           return [...previousPhotos, ...data];
//         }
//       });
//     } catch (error) {
//       // setError(error);
//       console.log(error.message);
//     }
//     setNextPage(false);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchImages();
//   }, [page]);

//   useEffect(() => {
//     if (!mounted.current) {
//       mounted.current = true;
//       return;
//     }
//     if (!nextPage) return;
//     if (loading) return;

//     setPage((previousPage) => previousPage + 1);

//     console.log("Here Next Page...");
//   }, [nextPage]);

//   const event = () => {
//     const margin = 10;
//     if (
//       window.innerHeight + window.scrollY + margin >=
//       window.document.body.scrollHeight
//     ) {
//       console.log("Next Page ...");
//       setNextPage(true);
//       // setLoading(true);

//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", event);
//     return () => window.removeEventListener("scroll", event);
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!query) return 0;
//     if (page === 1) {
//       return fetchImages();
//     }
//     setPage(1);
//   };

//   return (
//     <main>
//       <section className="search">
//         <form className="search-form">
//           <input
//             type="text"
//             placeholder="search"
//             className="form-input"
//             value={query}
//             onChange={(event) => setQuery(event.target.value)}
//           />
//           <button type="submit" className="submit-btn" onClick={handleSubmit}>
//             <FaSearch />
//           </button>
//         </form>
//       </section>
//       <section className="photos">
//         <div className="photos-center">
//           {photos.map((photo, index) => {
//             return <Photo key={index} {...photo} />;
//           })}
//         </div>
//         {loading && <h2 className="loading">Loading...</h2>}
//       </section>
//     </main>
//   );
// }

// export default App;
