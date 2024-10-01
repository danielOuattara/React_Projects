import { Component, createContext } from "react";

export const ToursContext = createContext();

const url = "https://www.course-api.com/react-tours-project";

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
    try {
      const res = await fetch(url);
      if (!res.ok) {
        this.setState((prevState) => ({
          ...prevState,
          isError: true,
          loading: false,
          errorMessage: `${res.status} ${res.statusText}`,
        }));

        throw Error(`${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        errorMessage: ``,
        tours: data,
      }));
    } catch (err) {
      this.setState((prevState) => ({
        ...prevState,
        isError: true,
        loading: false,
      }));
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
