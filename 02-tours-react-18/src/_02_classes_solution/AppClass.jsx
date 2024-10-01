import { Component } from "react";
import Error from "./Error";
import LoadingClass from "./LoadingClass";
import ResetTours from "./ResetTours";
import ToursClass from "./ToursClass";

const url = "https://www.course-api.com/react-tours-project";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isError: false,
      errorMessage: "",
      tours: [],
    };

    this.fetchTours = this.fetchTours.bind(this);
  }

  async fetchTours() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        this.setState((prevState) => ({
          ...prevState,
          isError: true,
          loading: false,
          errorMessage: `${response.status} ${response.statusText}`,
        }));
        throw Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      this.setState((prevState) => ({
        ...prevState,
        tours: data,
        loading: false,
        errorMessage: "",
      }));
    } catch (err) {
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        isError: true,
      }));
      return err;
    }
  }

  componentDidMount() {
    this.fetchTours();
  }

  removeTourItem = (id) => {
    this.setState((prevState) => ({
      ...prevState,
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
