import React, { Component } from "react";
import Error from "./Error";
import LoadingClass from "./LoadingClass";
import ResetTours from "./ResetTours";
import ToursClass from "./ToursClass";

const url = "https://course-api.com/react-tours-project";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isError: false,
      errorMessage: "",
      tours: [],
    };
  }

  fetchTours = async () => {
    // async function fetchTours() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        this.setState({
          isError: true,
          loading: false,
          errorMessage: `${res.status} ${res.statusText}`,
        });
        throw Error(`${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      this.setState({
        tours: data,
        loading: false,
        errorMessage: "",
      });
    } catch (err) {
      this.setState({
        loading: false,
        isError: true,
      });
      return err;
    }
  };

  componentDidMount() {
    this.fetchTours();
  }

  // removeTourItem = (id) => {  // OK!
  //   this.setState((prevState) => {
  //     return { tours: prevState.tours.filter(item => item.id !== id)};
  //   });
  // }

  removeTourItem = (id) => {
    // OK !
    this.setState((prevState) => ({
      tours: prevState.tours.filter((item) => item.id !== id),
    }));
  };

  render() {
    if (this.state.isError) {
      return <Error errorMessage={this.state.errorMessage} />;
    }

    if (this.state.loading) {
      return <LoadingClass />;
    }

    if (this.state.tours.length === 0) {
      return <ResetTours fetchTours={this.fetchTours} />;
    }

    return (
      <ToursClass
        tours={this.state.tours}
        removeTourItem={this.removeTourItem}
      />
    );
  }
}

//-----------------------------------
