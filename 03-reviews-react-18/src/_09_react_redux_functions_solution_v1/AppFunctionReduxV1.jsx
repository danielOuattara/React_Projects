/* 
Version 1: action directly in connected components 
*/
import store from "./redux/store";
import { Provider } from "react-redux";
import Container from "./components/Container";

export default function AppFunctionReduxV1() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
