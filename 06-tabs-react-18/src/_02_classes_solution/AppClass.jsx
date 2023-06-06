// CASE 1 : locally fetch data

import { Component } from "react";
import { JobAccessButton, JobDetails } from "./components";

const url = "https://course-api.com/react-tabs-project";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [{}],
      isLoading: true,
      error: "",
      jobIndex: 0,
    };
    this.handleJobIndexChange = this.handleJobIndexChange.bind(this);
  }

  handleJobIndexChange(newJobIndex) {
    return this.setState((prevState) => ({
      ...prevState,
      jobIndex: newJobIndex,
    }));
  }

  componentDidMount() {
    //  CASE 1 : create a function & call it immediately : OK !
    const fetchJob = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          this.setState((prevState) => ({
            ...prevState,
            error: `${res.status} ${res.statusText}`,
            isLoading: false,
          }));
          throw new Error();
        }
        const jobsFetched = await res.json();
        this.setState((prevState) => ({
          ...prevState,
          error: false,
          isLoading: false,
          jobs: jobsFetched,
        }));
      } catch (error) {
        return error;
      }
    };

    fetchJob();

    // CASE 2: use IFFE with async/await : OK !

    // (async () => {
    //   try {
    //     const res = await fetch(url);
    //     if (!res.ok) {
    //       this.setState((prevState) => ({
    //         ...prevState,
    //         error: `${res.status} ${res.statusText}`,
    //         isLoading: false,
    //       }));
    //       throw new Error();
    //     }
    //     const jobsFetched = await res.json();
    //     this.setState((prevState) => ({
    //       ...prevState,
    //       error: false,
    //       isLoading: false,
    //       jobs: jobsFetched,
    //     }));
    //   } catch (error) {
    //     return error;
    //   }
    // })();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <section className="section loading">
          <h1>Loading ...</h1>
        </section>
      );
    }

    if (this.state.error) {
      return (
        <section className="section loading">
          <h1>{this.state.error}</h1>
        </section>
      );
    }
    return (
      <div>
        <section className="section">
          <div className="title">
            <h2>experience</h2>
            <h4>class solution</h4>
            <div className="underline"></div>
          </div>

          <div className="jobs-center">
            <JobAccessButton
              jobIndex={this.state.jobIndex}
              handleJobIndexChange={this.handleJobIndexChange}
              jobs={this.state.jobs}
            />
            <JobDetails job={this.state.jobs[this.state.jobIndex]} />
          </div>
        </section>
      </div>
    );
  }
}
