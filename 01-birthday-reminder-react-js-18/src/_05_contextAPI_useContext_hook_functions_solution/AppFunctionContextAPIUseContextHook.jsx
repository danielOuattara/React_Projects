import React from "react";
import FriendsContextProvider from "./context/FriendsContext";
import Container from "./Container";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <FriendsContextProvider>
      <Container />
    </FriendsContextProvider>
  );
}
