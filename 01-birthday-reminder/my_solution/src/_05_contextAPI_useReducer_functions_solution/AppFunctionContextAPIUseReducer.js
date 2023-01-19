import FriendsContextProvider from "./context/FriendsContext";
import Container from "./Container";

function AppContextAPIUsereducer() {
  return (
    <FriendsContextProvider>
      <Container />
    </FriendsContextProvider>
  );
}

export default AppContextAPIUsereducer;
