import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import PDFViewer from "./PDFViewer";
import DownloadPDF from "./DownloadPDF";
const customStyles = {
  content: {
    position: "absolute",
    top: "40px",
    left: "20%",
    right: "30%",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};
Modal.setAppElement(document.getElementById("root"));

const Modals = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    window.open("https://drive.google.com/file/d/1TKROi008m0S8bGUgzT3qkFoN8Zvam5l7/view?usp=sharing")
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        className="bg-[#915eff] py-2 px-4 rounded-xl -mt-2"
        onClick={() => {
          openModal();
          // handleResumeClick();
        }}
      >
        Resume
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="PDF Modal"
      >
        <div className="flex flex-row justify-end">
          <DownloadPDF />
        </div>
        <PDFViewer />
      </Modal>
    </div>
  );
};

export default Modals;
