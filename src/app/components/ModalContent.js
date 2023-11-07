import React from 'react'
import "./ModalContent.css"

const ModalContent = ({closeModal}) => {
  return (
    <>
      <div
        onClick={closeModal}
        className="overlay"
      ></div>
      <div className="contenu">
        <div>Here is the content</div>
        <button
          className="close"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </>
  )
}

export default ModalContent