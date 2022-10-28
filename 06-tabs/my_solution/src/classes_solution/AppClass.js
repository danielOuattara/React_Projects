import React, { Component } from "react";
import JobAccessButtonFunction from "./JobAccessButtonClass";
import JobDetailsFunction from "./components/JobDetailsClass";
import useJobsFetchClass from "../useJobsFetchClass";

const url = "https://course-api.com/react-tabs-project";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      isLoading: true,
      error: "",
      jobIndex: 0,
    };
    this.handleJobIndexChange = this.handleJobIndexChange.bind(this);
  }

  handleJobIndexChange(newJobIndex) {
    this.setState(() => ({ jobIndex: newJobIndex }));
  }

  componentDidMount() {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          this.setState(() => ({
            error: ` ${res.status} ${res.statusText}`,
            isLoading: false,
          }));
          throw new Error();
        }
        const jobsFetched = await res.json();
        this.setState(() => ({
          error: false,
          jobs: jobsFetched,
          isLoading: false,
        }));
      } catch (error) {
        return error;
      }
    })();
  }

  render() {
    const { jobs, jobIndex, isLoading, error } = this.state;

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
              jobIndex={jobIndex}
              handleJobIndexChange={this.handleJobIndexChange}
              jobs={jobs}
            />
            <JobDetailsFunction jobIndex={jobIndex} jobs={jobs} />
          </div>
        </section>
      </div>
    );
  }
}
