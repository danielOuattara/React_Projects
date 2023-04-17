/* 
TODO: Must correction  componentDidUpdate, handleNextPage, handlePreviousPage


*/

import { Component } from "react";
import {
  SingleFollower,
  PageButtonList,
  PersonPerPageSelector,
} from "./components";
import { paginator } from "./utilities";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export default class AppClasses extends Component {
  state = {
    loading: true,
    rootData: [],
    data: [],
    pageSelected: 0,
    personsNumberPerPage: 10,
    followersToShowPerPage: [],
  };

  componentDidMount() {
    const fetchFollowers = async () => {
      const response = await fetch(url);
      const fetchedData = await response.json();

      this.setState((previousState) => ({
        ...previousState,
        loading: false,
        rootData: fetchedData,
        data: paginator(this.state.rootData, this.state.personsNumberPerPage),
        followersToShowPerPage: this.state.data[this.state.pageSelected],
      }));
    };
    fetchFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageSelected !== this.state.pageSelected ||
      prevState.personsNumberPerPage !== this.state.personsNumberPerPage ||
      prevState.loading !== this.state.loading
    ) {
      if (!this.state.loading) {
        this.setState((previousState) => ({
          ...previousState,
          data: paginator(this.state.rootData, this.state.personsNumberPerPage),
          followersToShowPerPage: this.state.data[this.state.pageSelected],
        }));
      }
    }
  }

  handlePreviousPage = () => {
    this.setState((previousState) => {
      console.log("previousState = ", previousState);
      if (previousState.previousPage - 1 < 0) {
        return {
          ...previousState,
          pageSelected: previousState.data.length - 1,
        };
      }
      return { ...previousState, pageSelected: previousState.previousPage - 1 };
    });
  };

  handleNextPage = () => {
    this.setState((previousState) => {
      if (previousState.previousPage + 1 > this.state.data.length - 1) {
        return {
          ...previousState,
          pageSelected: 0,
        };
      }
      return { ...previousState, pageSelected: previousState.previousPage + 1 };
    });
  };

  handlePersonsPerPage = (event) => {
    return this.setState((previousState) => ({
      ...previousState,
      personsNumberPerPage: Number(event.target.value),
    }));
  };

  handlePageSelected = (indexArg) => {
    return this.setState((previousState) => ({
      ...previousState,
      pageSelected: indexArg,
    }));
  };

  render() {
    console.log("this.state =", this.state);
    console.log("personsNumberPerPage", this.state.personsNumberPerPage);

    return (
      <>
        <br /> <hr /> <br />
        <p style={{ textAlign: "center" }}>class solution</p>
        <main>
          <div className="section-title">
            <h1> {this.state.loading ? "loading..." : "pagination"}</h1>
            <div className="underline"></div>
          </div>

          {/* select option for number of followers per page */}
          <PersonPerPageSelector
            handlePersonsPerPage={this.handlePersonsPerPage}
            personsNumberPerPage={this.state.personsNumberPerPage}
          />

          <section className="followers">
            {/* followers list */}
            <div className="container">
              {this.state.followersToShowPerPage?.map((person) => (
                <SingleFollower key={person.id} {...person} />
              ))}
            </div>

            {/* Previous & Next pages & ButtonList */}
            {!this.state.loading && (
              <PageButtonList
                data={this.state.data}
                handlePageSelected={this.handlePageSelected}
                pageSelected={this.state.pageSelected}
                handlePreviousPage={this.handlePreviousPage}
                handleNextPage={this.handleNextPage}
              />
            )}
          </section>
        </main>
      </>
    );
  }
}
