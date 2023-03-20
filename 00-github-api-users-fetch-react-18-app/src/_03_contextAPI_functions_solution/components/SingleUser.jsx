import { useState } from "react";
import { SingleUserContext } from "../context/SingleUserContext";
//-----------------------------------------------------------------

export default function SingleUser() {
  const [userName, setUserName] = useState("");

  return (
    <SingleUserContext.Consumer>
      {(context) => {
        const { singleState, fetchSingleUser } = context;

        const handleChange = (event) => {
          setUserName(event.target.value);
        };

        const handleSubmit = (event) => {
          event.preventDefault();
          if (!userName) return;
          fetchSingleUser(userName);
          setUserName("");
        };

        return (
          <>
            <form className="form" onSubmit={handleSubmit}>
              <h3>fetch single user infos</h3>
              <div
                className="form-control"
                //   style={{ "grid-template-columns": "150px 1fr" }}
              >
                <label htmlFor="username">Github username :</label>
                <input
                  className=""
                  type="text"
                  name="username"
                  id="username"
                  value={userName}
                  onChange={handleChange}
                />
              </div>
              <p>examples: danielOuattara, quincyLarson, ...</p>
              <button className="btn" type="submit">
                fetch
              </button>
            </form>

            {Object.entries(singleState.singleUserData).length !== 0 && (
              <h3>User infos :</h3>
            )}
            <ul>
              {Object.entries(singleState.singleUserData).map((subArray) => {
                const [key, value] = subArray;
                return (
                  <li
                    style={{ textAlign: "left", margin: "10px 0 10px 10px" }}
                    key={key}
                  >
                    {" "}
                    <b>{key}</b> : {value}
                  </li>
                );
              })}
            </ul>
          </>
        );
      }}
    </SingleUserContext.Consumer>
  );
}
