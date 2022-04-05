import React, { } from "react";
import Container from "./components/Container";

import ToursContextProvider from "./context/ToursContext";

// const url = "https://course-api.com/react-tours-project";

function AppFunctionContextAPI() {
  return (
    <ToursContextProvider>
      <Container />
    </ToursContextProvider>
  );
}

export default AppFunctionContextAPI;
