import { Component } from "react";

export default class useJobsFetch extends Component {
  state = {
    jobs: [],
    isLoading: true,
    error: "",
    jobIndex: 0,
  };

  componentDidMount() {
    (async (url) => {
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

        return this.state;
      } catch (error) {
        return error;
      }
    })();
  }

  render() {
    let state = this.state;
    return { state };
  }
}
