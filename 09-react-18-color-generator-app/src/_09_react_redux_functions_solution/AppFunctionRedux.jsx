import { Provider } from "react-redux";
import store from "./redux/store";
import { ColorForm, ColorList } from "./components";

export default function AppFunctionRedux() {
  return (
    <Provider store={store}>
      <>
        <p className="title">react redux functions solution</p>
        <ColorForm />
        <ColorList />
      </>
    </Provider>
  );
}
