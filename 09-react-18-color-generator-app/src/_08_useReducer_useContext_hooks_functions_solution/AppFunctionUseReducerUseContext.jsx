import ColorGeneratorContextProvider from "./context/ColorGeneratorContext";
import { ColorForm, ColorList } from "./components";

export default function AppFunctionUseReducerUseContext() {
  return (
    <ColorGeneratorContextProvider>
      <p className="title">useReducer + useContext functions solution</p>
      <ColorForm />
      <ColorList />
    </ColorGeneratorContextProvider>
  );
}
