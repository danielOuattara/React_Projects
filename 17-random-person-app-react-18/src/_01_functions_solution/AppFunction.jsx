import { useState, useEffect } from "react";
import iconsListData from "./components/Icons";
import dataParser from "./utilities/dataParser.js";

const url = "https://randomuser.me/api/";

export default function AppFunction() {
  const [state, setState] = useState({
    isLoading: true,
    person: null,
    infoTitle: "name",
    infoValue: "",
    continueFetching: true,
  });

  const fetchPerson = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`);
      }

      const data = await response.json();
      const person = data.results[0];
      const newPerson = dataParser(person);
      setState((prevState) => ({
        ...prevState,
        person: newPerson,
        infoValue: newPerson.name,
        isLoading: false,
      }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  const handleInfo = (event) => {
    event.preventDefault();
    if (event.target.classList.contains("icon")) {
      setState((prevState) => ({
        ...prevState,
        infoTitle: event.target.dataset.label,
        infoValue: state.person[event.target.dataset.label],
      }));
    }
  };

  return (
    <>
      <main>
        <div className="block bcg-black">
          <br /> <hr /> <br />
          <p style={{ textAlign: "center", color: "white" }}>
            function solution
          </p>
        </div>
        <div className="block">
          <div className="container">
            {state.isLoading && (
              <>
                <img src="" alt="" className="user-img" />
                <p className="user-title">Loading...</p>
                <p className="user-value">Loading ...</p>
              </>
            )}

            {!state.isLoading && (
              <>
                <img src={state.person.image} alt="" className="user-img" />

                <p className="user-title">
                  {state.infoTitle === "name"
                    ? `Hi, My ${state.infoTitle} is`
                    : `My ${state.infoTitle} is`}
                </p>
                <p className="user-value">{state.infoValue}</p>
              </>
            )}

            <div className="values-list">
              {iconsListData.map((item) => (
                <button
                  key={item.id}
                  className="icon"
                  data-label={item["data-label"]}
                  onMouseOver={handleInfo}
                >
                  {item.icon}
                </button>
              ))}
            </div>
            <button className="btn" type="button" onClick={fetchPerson}>
              {state.isLoading ? "isLoading..." : "random user"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
