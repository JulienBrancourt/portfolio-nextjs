import React from "react";
import './Legal.css'

const Legal = ({ onClose }) => {
  return (
    <div className="legal-overlay">
      <div className="legal-content">
              <h2>Mentions légales</h2>
              
        <h3>Collecte des données</h3> 
        <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur et collecter des données statistiques anonymes sur la fréquentation du site via Google Analytics.</p>

        <h3>Utilisation des données</h3> 
        <p>Les données collectées servent exclusivement à analyser le comportement des visiteurs pour améliorer la qualité du site et de son contenu.</p> 

        <h3>Partage des données</h3> 
        <p>Vos données ne sont pas partagées avec des tiers, à moins d'une obligation légale.</p> 

        <h3>Sécurité des données</h3> 
        <p>Des mesures de sécurité ont été mises en place pour protéger vos données contre l'accès, la modification ou la divulgation non autorisés.</p> 

        <h3>Vos droits</h3> 
        <p>Conformément aux lois applicables, vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles.</p> 

        <h3>Modifications de cette politique</h3> 
        <p>Cette Politique de Confidentialité peut être mise à jour. Les modifications seront affichées sur cette page.</p> 

        <h3>Contact</h3> 
        <p>Pour toute question concernant cette Politique de Confidentialité, vous pouvez me contacter via le formulaire de contact sur ce site.</p>
              
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