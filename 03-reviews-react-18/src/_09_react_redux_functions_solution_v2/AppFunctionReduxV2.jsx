/* 
Version 2: action in reviewsAction then dispatch in connected components 
*/

import store from "./redux/store";
import { Provider } from "react-redux";
import Container from "./components/Container";

export default function AppFunctionReduxV2() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
