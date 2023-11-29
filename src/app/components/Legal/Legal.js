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
        <p>Les données fournies seront utilisées uniquement dans le but pour lequel vous les avez partagées. Elles peuvent être utilisées pour répondre à vos demandes, personnaliser votre expérience sur le site, et améliorer nos services. Elles ne seront pas utilisées à des fins autres que celles explicitement indiquées.</p> 

        <h3>Partage des données</h3> 
        <p>Vos données ne sont pas partagées avec des tiers, à moins d'une obligation légale.</p> 

        <h3>Vos droits</h3> 
        <p>Vous avez le droit de consulter, corriger, mettre à jour ou supprimer les données personnelles que vous avez partagées. Vous pouvez exercer ces droits en me contactant à l'adresse fournie dans la section "Contact" ci-dessous.</p> 

        <h3>Modifications de cette politique</h3> 
        <p>Toute modification sera publiée sur cette page avec la date de la dernière mise à jour.</p> 

        <h3>Contact</h3> 
        <p>Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez exercer vos droits en matière de données personnelles, vous pouvez me contacter à brancourt.julien@hotmail.fr ou via le formulaire de contact sur ce site.</p>
              
        <div class="container-close" onClick={onClose}>  
            <div class="circle">
                <div class="line first"></div>
                <div class="line second"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;