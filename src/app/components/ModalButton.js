import React, { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"
import "./ModalButton.css"

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button 
      className="apparition"
      onClick={() => setShowModal(true)}>Voir plus</button>
      {showModal && createPortal(
        <ModalContent closeModal={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}

export default ModalButton