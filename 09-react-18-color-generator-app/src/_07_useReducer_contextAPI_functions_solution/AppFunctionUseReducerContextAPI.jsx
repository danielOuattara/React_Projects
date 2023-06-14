import ColorGeneratorContextProvider from "./context/ColorGeneratorContext";
import { ColorForm, ColorList } from "./components";

export default function AppFunctionUseReducerContextAPI() {
  return (
    <ColorGeneratorContextProvider>
      <p className="title">useReducer + context API functions solution</p>
      <ColorForm />
      <ColorList />
    </ColorGeneratorContextProvider>
  );
}
