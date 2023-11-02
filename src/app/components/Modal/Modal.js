import { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  //on cree un state sur false
  const toggleModal = () => {
    setModal(!modal);
  };
  //On lui cree une fonction toggle qu'on relira au bouton pour l'apparition du Modal

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        OPEN
      </button>
      {/* lui donner une condition ! modal "true" alors apparition du madal */}
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                C’est une ère de conflits qui vous attend sur Ivalice. Le petit
                royaume de Dalmasca est en ruines après sa conquête par l’empire
                d’Arcadia, et son avenir est incertain. La princesse Ashe, la
                seule et unique prétendante au trône, se dévoue corps et âme à
                la cause de la résistance. Vaan, un jeune orphelin de guerre,
                rêve de voler sans contraintes à travers les nuages.
                Joignez-vous à ces alliés improbables et à leurs compagnons
                alors qu’ils entament une quête héroïque pour délivrer leur pays
                de l’envahisseur et rétablir la royauté déchue.
              </p>
              <button onClick={toggleModal} className="close-modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
