import { useState, useEffect } from "react";
import dataParser from "../utilities/dataParser";

const url = "https://randomuser.me/api/";

export default function useFetchUser() {
  const [state, setState] = useState({
    isLoading: true,
    person: null,
    infoTitle: "name",
    infoValue: "random person",
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
        isLoading: false,
        person: newPerson,
        infoValue: newPerson.name,
      }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPerson();
  }, []);

  return {
    isLoading: state.isLoading,
    person: state.person,
    infoTitle: state.infoTitle,
    infoValue: state.infoValue,
    setState,
    fetchPerson,
  };
}
