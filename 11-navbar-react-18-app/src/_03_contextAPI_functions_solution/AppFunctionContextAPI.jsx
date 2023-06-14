import Navbar from "./components/Navbar";
import { NavbarContext } from "./context/NavbarContext";
import NavbarContextProvider from "./context/NavbarContext";

export default function AppFunctionContextAPI() {
  return (
    <NavbarContextProvider>
      <NavbarContext.Consumer>
        {(context) => {
          return (
            <>
              <p className="title">context API + functions solution</p>
              <Navbar
                showLinks={context.showLinks}
                setShowLinks={context.setShowLinks}
              />
            </>
          );
        }}
      </NavbarContext.Consumer>
    </NavbarContextProvider>
  );
}
