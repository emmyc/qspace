import React from "react";
import "../scss/defaults.scss";
import Modal from "react-modal";
const customStyles = {
  content: {
    maxWidth: 800,
    maxHeight: 700,
    borderRadius: 14,
    border: "7px rgb(33, 34, 45) solid",
    left: "20%"
  }
};
function StoryComponent(props) {
  const [modalState, setModalState] = React.useState(false);
  function openModal() {
    setModalState(true);
  }

  //   function afterOpenModal() {
  //     this.subtitle.style.color = "#f00";
  //   }

  function closeModal() {
    setModalState(false);
  }

  return (
    <div className="centered">
      <button className="story-container" onClick={() => openModal()}>
        <img src={props.topic} className="story-img" />
        <h2>{props.text}</h2>
      </button>
      <Modal
        isOpen={modalState}
        // onAfterOpen={this.afterOpenModal}
        style={customStyles}
        onRequestClose={() => closeModal()}
        contentLabel="Example Modal"
      >
        <h1>test</h1>
      </Modal>
    </div>
  );
}
export default StoryComponent;
