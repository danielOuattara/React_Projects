import { useState } from "react";
import { Modal, Sidebar, Home } from "./components";

export default function AppFunction() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <p className="title">function solution</p>
      <Home
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </>
  );
}
