"use client"
import React, { useState } from "react";
import projetsData from "../data/projetsData.json"
import Cookies from "./components/Cookies/Cookies";
import Card from './components/Card/Card'
import Contact from "./components/Contact/Contact";
import Legal from "./components/Legal/Legal";

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFigma as fabFigma, faGithub as fabGithub, faLinkedin as fabLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assurez-vous d'initialiser la bibliothèque FontAwesome
// config.autoAddCss = false; 
library.add(faCoffee, faAddressCard, fabFigma, fabGithub, fabLinkedin);

export default function Home() {

  const [legalVisible, setLegalVisible] = useState(false);

  const openLegal = () => {
    setLegalVisible(true);
  };

  const closeLegal = () => {
    setLegalVisible(false);
  };

  const projets = projetsData  
  
  return (
    <main>
      <Cookies />
      <section className="presentation">
        <div className="logo">
          <div className="global">
            <div className="detail">
              <span className="txt-logo">JB</span>
              <span className="one h6"></span>
              <span className="two h3"></span>
            </div>
          </div>
    
          <div className="global pivot1">
            <div className="detail">
              <span className="one h1"></span>
              <span className="two h4"></span>
            </div>
          </div>
        
          <div className="global pivot2">
            <div className="detail">
              <span className="one h5"></span>
              <span className="two h2"></span>
            </div>
          </div>
        </div>

        <div className="perso">
          <h1>Julien Brancourt</h1>
          <h2>Développeur web / front-end</h2>
          <p>Bienvenue sur mon portfolio ! Je suis passionné de développement web et spécialisé dans le front-end. En créant des interfaces interactives et intuitives, je m'efforce de donner vie à des designs exceptionnels à travers mes compétences en React et Next.js.</p>
        </div>
      </section>

      <section className="competences">
        <h2>À propos de moi</h2>
        <p className="introComp">Je créé des sites et applications responsives dont le référencement est optimisé. Voici quelques uns de mes outils :</p>
        <div className="containercomp">
          <ul className="book">
            <li className="competenceli">Next.js</li>
            <li className="competenceli">React</li>
            <li className="competenceli">JavaScript</li>
            <li className="competenceli">HTML</li>
            <li className="competenceli">CSS</li>
            <li className="competenceli">SCSS</li>
            <div className="cover">
                <p className="titre">Front-end</p>
            </div>
          </ul>
          <ul className="book">
            <li className="competenceli">Node.js</li>
            <li className="competenceli">Express</li>
            <li className="competenceli">Mongodb</li>
            <li className="competenceli">T-SQL</li>
            <div className="cover">
                <p className="titre">Back-end</p>
            </div>
          </ul>
          <ul className="book">
            <li className="competenceli">Figma</li>         
            <li className="competenceli">Github</li>
                    
            <li className="competenceli">SEO</li>
            <div className="cover">
                <p className="titre">Mais aussi...</p>
            </div>
          </ul>
        </div>
      </section>

      <section className="projets">
        <h2>Réalisations</h2>
        <p className="introProjets">Chaque projet reflète ma passion pour le développement, vous trouverez ici mes dernières créations.</p>
        <ul className="projet-list">
          {projets.map(projet => (
            <li key={projet.id}>
              <Card
                id={projet.id}
                name={projet.name}
                tech={projet.tech}
                description={projet.description}
                projetPic={projet.projetPic}
                modalPic={projet.modalPic}
                lien={projet.lien}
              />
            </li>
          ))}
        </ul>
        
      </section>

      <section className="contact">
            <Contact/>
      </section>
      <footer>
        <ul className="liste-footer">
          <li className="li-footer">
            <a href="https://github.com/JulienBrancourt" className="lien-footer" target="_blank">
              <FontAwesomeIcon  className="icon" icon={['fab', 'github']} />
            </a>
          </li>  
            
          <li className="li-footer">
            <a href="#" className="lien-footer" onClick={(e) => { e.preventDefault(); openLegal(); }}>
              Mentions légales
            </a>
          </li>
          
          <li className="li-footer">
            <a href="https://www.linkedin.com/in/julien-brancourt/" className="lien-footer" target="_blank">
              <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
            </a>
          </li>
        </ul>
      </footer>

      
      
      {legalVisible && <Legal onClose={closeLegal} />}
    </main>
    
  );
}
