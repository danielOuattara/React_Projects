import { useState, useEffect } from "react";
import { useFetchFollowers } from "./customHooks";
import { SingleFollower } from "./components";

export default function AppFunction() {
  const { loading, data } = useFetchFollowers();
  const [pageSelected, setPageSelected] = useState(0);
  const [followersToShowPerPage, setFollowersToShowPerPage] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFollowersToShowPerPage(data[pageSelected]);
    }
  }, [loading, data, pageSelected]);

  const handlePreviousPage = () => {
    setPageSelected((previousPage) => {
      if (previousPage - 1 < 0) {
        return data.length - 1;
      }
      return previousPage - 1;
    });
  };

  const handleNextPage = () => {
    setPageSelected((previousPage) => {
      if (previousPage + 1 >= data.length) {
        return 0;
      }
      return previousPage + 1;
    });
  };

  return (
    <>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>function solution</p>
      <main>
        <div className="section-title">
          <h1> {loading ? "loading..." : "pagination"}</h1>
          <div className="underline"></div>
        </div>

        {/* followers list */}
        <section className="followers">
          <div className="container">
            {followersToShowPerPage.map((person) => (
              <SingleFollower key={person.id} {...person} />
            ))}
          </div>

          {/* Previous & Next pages & ButtonList */}
          {!loading && (
            <div className="btn-container">
              <button className="prev-btn" onClick={handlePreviousPage}>
                previous
              </button>

              {data.map((item, index) => (
                <button
                  key={index}
                  className={`page-btn ${
                    pageSelected === index ? "active-btn" : null
                  }`}
                  onClick={() => setPageSelected(index)}
                >
                  {index + 1}
                </button>
              ))}

              <button className="next-btn" onClick={handleNextPage}>
                next
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
