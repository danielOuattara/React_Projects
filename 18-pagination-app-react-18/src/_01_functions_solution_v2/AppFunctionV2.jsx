import { useState, useEffect } from "react";
import { useFetchFollowers } from "./customHooks";
import {
  SingleFollower,
  PageButtonList,
  PersonPerPageSelector,
} from "./components";
import { paginator } from "./utilities";

export default function AppFunction() {
  const [personsNumberPerPage, setPersonsNumberPerPage] = useState(10);
  const { loading, rootData } = useFetchFollowers();
  const [data, setData] = useState([]);
  const [pageSelected, setPageSelected] = useState(0);
  const [followersToShowPerPage, setFollowersToShowPerPage] = useState([]);

  useEffect(() => {
    if (!loading) {
      setData(paginator(rootData, personsNumberPerPage));
    }
  }, [personsNumberPerPage, rootData, loading]);

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

  const handlePersonsPerPage = (event) => {
    setPersonsNumberPerPage(Number(event.target.value));
  };

  return (
    <>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>function solution version 2</p>
      <main>
        <div className="section-title">
          <h1> {loading ? "loading..." : "pagination"}</h1>
          <div className="underline"></div>
        </div>

        {/* select option for number of followers per page */}
        <PersonPerPageSelector handlePersonsPerPage={handlePersonsPerPage} />

        <section className="followers">
          {/* followers list */}
          <div className="container">
            {followersToShowPerPage?.map((person) => (
              <SingleFollower key={person.id} {...person} />
            ))}
          </div>

          {/* Previous & Next pages & ButtonList */}
          {!loading && (
            <PageButtonList
              data={data}
              setPageSelected={setPageSelected}
              pageSelected={pageSelected}
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
            />
          )}
        </section>
      </main>
    </>
  );
}
