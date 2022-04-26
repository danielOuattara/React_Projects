import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFollowers(data[page]);
    }
  }, [loading, page]);

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

  return (
    <main>
      <div className="section-title">
        <h1> {loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((person) => {
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
                  className={
                    page === index ? "page-btn active-btn" : "page-btn"
                  }
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
