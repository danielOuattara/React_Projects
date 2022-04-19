import React, { useState, useEffect } from "react";
import iconsListData from "./Icons";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const handleValue = (event) => {
    if (event.target.classList.contains("icon")) {
      setTitle(event.target.dataset.label);
      setValue(person[event.target.dataset.label]);
    }
  };

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Something went wrong");
      }

      const data = await response.json();
      const person = data.results[0];
      const { first, last } = person.name;
      const { age } = person.dob;
      const { email, phone } = person;
      const { password } = person.login;
      const { large: image } = person.picture;
      const { number, name } = person.location.street;

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

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
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
          <button className="btn" type="button" onClick={fetchUser}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
