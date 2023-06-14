import React from "react";
import Navbar from "./Navbar";
import { useNavbarContext } from "./../context/NavbarContext";

export default function Container() {
  const { showLinks, setShowLinks } = useNavbarContext();
  return (
    <>
      <p className="title">context API + useContext functions solution</p>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
    </>
  );
}
