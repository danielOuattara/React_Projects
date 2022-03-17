import React from "react";
import JobAccessButtonFunction from "./JobAccessButtonFunction";
import JobDetailsFunction from "./components/JobDetailsFunction";
import useJobsFetchFunction from "../useJobsFetchFunction";



function App() {
  const url = "https://course-api.com/react-tabs-project";
  const { jobs, value, setValue, isLoading, error } = useJobsFetchFunction(url);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section loading">
        <h1>{error}</h1>
      </section>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <JobAccessButtonFunction
            value={value}
            setValue={setValue}
            jobs={jobs}
          />
          <JobDetailsFunction value={value} jobs={jobs} />
        </div>
      </section>
    </div>
  );
}

export default App;
