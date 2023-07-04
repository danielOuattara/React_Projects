import React from "react";
import { JobsContainer, SearchJobContainer } from "../../components";
import { useSelector } from "react-redux";

import ReactDOM from "react-dom";
import { Modal } from "./../../components";

export default function AllJobs() {
  const { isModalVisible } = useSelector((state) => state.modalState);
  return (
    <>
      {isModalVisible &&
        ReactDOM.createPortal(
          <Modal />,
          document.getElementById("modal-redux-toolkit-functions"),
        )}
      <SearchJobContainer />
      <JobsContainer />
    </>
  );
}
