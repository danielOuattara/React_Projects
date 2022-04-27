import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import PersonPerPage from "./PersonPerPage";

function App() {
  const [personPerPage, setPersonPerPage] = useState(5);
  const { loading, data } = useFetch(personPerPage);
  const [page, setPage] = useState(0);
  const [followersPerPage, setFollowersPerPage] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFollowersPerPage(data[page]);
    }
  }, [loading, page, data]);

  const handlePreviousPage = () => {
    setPage((previousPage) => {
      if (previousPage - 1 < 0) {
        return data.length - 1;
      }
      return previousPage - 1;
    });
  };

  const handleNextPage = () => {
    setPage((previousPage) => {
      if (previousPage + 1 >= data.length) {
        return 0;
      }
      return previousPage + 1;
    });
  };

  const handlePersonsPerPage = (event) => {
    setPersonPerPage(Number(event.target.value));
  };

  return (
    <main>
      <div className="section-title">
        <h1> {loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <PersonPerPage handlePersonsPerPage={handlePersonsPerPage} />
      <section className="followers">
        <div className="container">
          {followersPerPage.map((person) => {
            return <Follower key={person.id} {...person} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePreviousPage}>
              Previews
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${page === index ? "active-btn" : null}`}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}

            <button className="next-btn" onClick={handleNextPage}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
