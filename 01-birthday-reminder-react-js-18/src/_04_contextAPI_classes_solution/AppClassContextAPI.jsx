import React from "react";
import FriendsContextProvider from "./contextClass/FriendsContext";
import ContainerClass from "./ContainerClass";
function AppClassContextAPI() {
  return (
    <FriendsContextProvider>
      <ContainerClass />
    </FriendsContextProvider>
  );
}

export default AppClassContextAPI;
