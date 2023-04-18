import React, { useReducer } from "react";

const initialState = {};

export default function AppUseReducerHookFunction() {
  const [state, dispatch] = useReducer();

  return (
    <>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        useReducer + useContext functions solution
      </p>
      <main></main>
    </>
  );
}
