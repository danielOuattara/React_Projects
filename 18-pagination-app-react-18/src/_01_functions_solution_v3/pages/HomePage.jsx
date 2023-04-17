import { useState, useEffect } from "react";
import {
  SingleFollower,
  PageButtonList,
  PersonPerPageSelector,
} from "./../components";

import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { paginator } from "../utilities";

export default function HomePage() {
  const [personsNumberPerPage, setPersonsNumberPerPage] = useState(10);
  const [pageSelected, setPageSelected] = useState(0);
  const [followersToShowPerPage, setFollowersToShowPerPage] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setFollowersToShowPerPage(
      paginator(data, personsNumberPerPage)[pageSelected],
    );
  }, [personsNumberPerPage, data, pageSelected]);

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
      <p style={{ textAlign: "center" }}>
        function solution version 3 + react router{" "}
      </p>
      <main>
        <div className="section-title">
          <h1> pagination</h1>
          <div className="underline"></div>
        </div>

        {/* select option for number of followers per page */}
        <PersonPerPageSelector handlePersonsPerPage={handlePersonsPerPage} />

        <section className="followers">
          {/* followers list */}
          <div className="container">
            {followersToShowPerPage.map((person) => (
              <SingleFollower key={person.id} {...person} />
            ))}
          </div>

          {/* Previous & Next pages & ButtonList */}
          <PageButtonList
            data={paginator(data, personsNumberPerPage)}
            setPageSelected={setPageSelected}
            pageSelected={pageSelected}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </section>
      </main>
    </>
  );
}

//-------------------------------------------------------------------
// export const followersLoader = async () => {
//   const response = await fetch(
//     "https://api.github.com/users/john-smilga/followers?per_page=100",
//   );
//   if (!response.ok) {
//     throw new Error("Could not fetch the followers");
//   }
//   return response.json();
// };

//-------------------------------------------------------------------
export const followersLoader = async () => {
  const response = await axios(
    "https://api.github.com/users/john-smilga/followers?per_page=100",
  );

  return response.data;
};
