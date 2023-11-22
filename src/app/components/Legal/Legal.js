import React from "react";
import './Legal.css'

const Legal = ({ onClose }) => {
  return (
    <div className="legal-overlay">
      <div className="legal-content">
        <h2>Mentions légales</h2>
        {/* Ajoutez le contenu des mentions légales ici */}
        <p>Ceci est un exemple de contenu des mentions légales.</p>
        <div class="container-close" onClick={onClose}>  
            <div class="circle">
                <div class="line first"></div>
                <div class="line second"></div>
            </div>
        </div>
        {/* <button onClick={onClose}>Fermer</button> */}
      </div>
    </div>
  );
};

export default Legal;