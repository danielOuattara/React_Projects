import FriendsContextProvider from "./context/FriendsContext";
import Container from "./Container";

function AppFunctionUseReducerContextAPI() {
  return (
    <FriendsContextProvider>
      <Container />
    </FriendsContextProvider>
  );
}

export default AppFunctionUseReducerContextAPI;
