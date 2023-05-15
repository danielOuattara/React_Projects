import FriendsContextProvider from "./context/FriendsContext";
import Container from "./Container";

export default function AppFunctionUseReducerUseContext() {
  return (
    <FriendsContextProvider>
      <Container />
    </FriendsContextProvider>
  );
}
