import React, { Component } from "react";

export const ToursContext = React.createContext();

const url = "https://course-api.com/react-tours-project";

export class ToursContextProvider extends Component {
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
        this.setState({ isError: true });
        this.setState({ loading: false });
        this.setState({ errorMessage: `${res.status} ${res.statusText}` });
        throw Error(`${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      this.setState({ tours: data });
      this.setState({ loading: false });
      this.setState({ errorMessage: `${res.status} ${res.statusText}` });
    } catch (err) {
      this.setState({ isError: true });
      this.setState({ loading: false });
      return err;
    }
  };

  componentDidMount() {
    this.fetchTours();
  }

  removeTourItem = (id) => {
    this.setState({ tours: this.state.tours.filter((item) => item.id !== id) });
  };

  render() {
    return (
      <ToursContext.Provider
        value={{
          loading: this.state.loading,
          isError: this.state.isError,
          errorMessage: this.state.errorMessage,
          tours: this.state.tours,
          removeTourItem: this.removeTourItem,
          fetchTours: this.fetchTours,
        }}
      >
        {this.props.children}
      </ToursContext.Provider>
    );
  }
}

export default ToursContextProvider;
