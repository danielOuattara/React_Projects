import React from "react";
import FriendsContextProvider from "./context/FriendsContext";
import Container from "./Container";

function AppContextAPI() {
  return (
    <FriendsContextProvider>
      <Container />
    </FriendsContextProvider>
  );
}

export default AppContextAPI;
