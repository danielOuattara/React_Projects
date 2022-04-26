import React, { useState, useEffect } from "react";
import iconsListData from "./Icons";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");
  // const [continueFetch, setContinueFetch] = useState(true);

  const handleValue = (event) => {
    if (event.target.classList.contains("icon")) {
      setTitle(event.target.dataset.label);
      setValue(person[event.target.dataset.label]);
    }
  };

  // const stopContiniousFetching = (event) => {
  //   console.log(event.target.classList);
  //   if (event.target.classList.contains("container")) {
  //     setContinueFetch(false);
  //   }
  // };

  const fetchPerson = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Something went wrong");
      }

      const data = await response.json();
      const person = data.results[0];
      const { large: image } = person.picture;
      const { first, last } = person.name;
      const { email, phone } = person;
      const { age } = person.dob;
      const { number, name } = person.location.street;
      const { password } = person.login;

      const newPerson = {
        name: `${first} ${last}`,
        age,
        image,
        email,
        street: `${number} ${name}`,
        phone,
        password,
      };

      setPerson(newPerson);
      setValue(newPerson.name);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  // Is ok, but on over container, stop fetching (TODO)
  // useEffect(() => {
  //   if (continueFetch) {
  //     let timer = setInterval(() => fetchPerson(), 3000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }
  // }, []);

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container" /* onMouseOver={stopContiniousFetching} */>
          <img
            src={(person && person.image) || defaultImage}
            alt={(person && person.name) || "random user"}
            className="user-img"
          />
          <p className="user-title">Hi, My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            {iconsListData.map((item) => (
              <button
                key={item.id}
                className={item.className}
                data-label={item["data-label"]}
                onMouseOver={handleValue}
              >
                {item.icon}
              </button>
            ))}
          </div>
          <button className="btn" type="button" onClick={fetchPerson}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
