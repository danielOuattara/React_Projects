import { Component } from "react";
import { createContext } from "react";

const url = "https://course-api.com/react-tabs-project";

export const JobsContext = createContext();

export default class JobsContextProvider extends Component {
  state = {
    jobs: [{}],
    isLoading: true,
    error: "",
    jobIndex: 0,
  };

  updateStateIndex = (index) => {
    return this.setState({ ...this.state, jobIndex: index });
  };

  fetchJob = async () => {
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

  componentDidMount() {
    this.fetchJob();
  }
  render() {
    return (
      <JobsContext.Provider
        value={{ state: this.state, updateStateIndex: this.updateStateIndex }}
      >
        {this.props.children}
      </JobsContext.Provider>
    );
  }
}
