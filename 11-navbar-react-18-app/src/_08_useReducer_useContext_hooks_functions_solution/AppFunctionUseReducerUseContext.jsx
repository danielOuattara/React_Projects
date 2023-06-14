import Navbar from "./components/Navbar";
import NavbarContextProvider from "./context/NavbarContext";

export default function AppFunctionUseReducerUseContext() {
  return (
    <NavbarContextProvider>
      <>
        <p className="title"> useReducer + useContext functions solution</p>
        <Navbar />
      </>
    </NavbarContextProvider>
  );
}
