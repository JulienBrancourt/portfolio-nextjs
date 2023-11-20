"use client"
import React, { useState } from "react";
import projetsData from "../data/projetsData.json"
import Card from './components/Card/Card'
import Contact from "./components/Contact/Contact";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFigma as fabFigma } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoffee, faAddressCard, fabFigma);

export default function Home() {

  const projets = projetsData
    
  
  return (
    <main>
      <section className="presentation">
        <div className="logo">
          <div className="global">
            <div className="detail">
              <span className="txt">JB</span>
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
          <p>Bienvenue sur mon portfolio ! Je suis passionné de développement web et spécialisé dans le front-end. En créant des interfaces interactives et intuitives, je m'efforce de donner vie à des designs exceptionnels à travers mes compétences en React et Next.js. Mon approche se caractérise par la combinaison de la créativité artistique et de la rigueur technique, assurant ainsi des expériences utilisateur fluides et agréables.</p>
        </div>
      </section>

      <section className="competences">
        <h2>Mes compétences</h2>
        <p className="introComp">Je créé des sites et applications responsives dont le référencement est optimisé. Voici quelques uns de mes outils :</p>
        {/* <div className="icone">
          <FontAwesomeIcon icon="coffee" />
          <FontAwesomeIcon icon={['fab', 'figma']} />
        </div> */}
        <div className="containercomp">
          <ul class="book">
            <li className="competenceli">Next.js</li>
            <li className="competenceli">React</li>
            <li className="competenceli">JavaScript</li>
            <li className="competenceli">HTML</li>
            <li className="competenceli">CSS</li>
            <li className="competenceli">SCSS</li>
            <div class="cover">
                <p className="titre">Front-end</p>
            </div>
          </ul>
          <ul class="book">
            <li className="competenceli">Node.js</li>
            <li className="competenceli">Express</li>
            <li className="competenceli">Mongodb</li>
            <li className="competenceli">T-SQL</li>
            <div class="cover">
                <p className="titre">Back-end</p>
            </div>
          </ul>
          <ul class="book">
            <li className="competenceli">Figma</li>         
            <li className="competenceli">Github</li>
                    
            <li className="competenceli">SEO</li>
            <div class="cover">
                <p className="titre">Mais aussi...</p>
            </div>
          </ul>
        </div>
      </section>

      <section className="projets">
        <h2>Mes réalisations</h2>
        <p className="introProjets">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe possimus voluptatem blanditiis eum ad!</p>
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
       
    </main>
  );
}
