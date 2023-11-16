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
  // const [projets, updateprojets] = useState([
  //   {
  //     id: 1,
  //     name: "Sophia Anderson",
  //     description: "Frontend Engineer",
  //     skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  //     projetPic: "./assets/bali.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Isabella Sullivan",
  //     description: "Senior Java Developer",
  //     skills: ["Java", "Spring Boot", "Spring Framework", "Maven"],
  //     projetPic: "./assets/kyoto.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "Ava Reynolds",
  //     description: "Backend Developer",
  //     skills: ["Node.js", "Express", "MongoDB", "Nest.js"],
  //     projetPic: "./assets/lisbon.jpg"
  //   },
  //   {
  //     id: 4,
  //     name: "Olivia Thompson",
  //     description: "Blockchain Developer",
  //     skills: ["Web3", "JavaScript", "Solidity", "Rust", "Smart contracts"],
  //     projetPic: "./assets/rome.jpg"
  //   },    
  // ])

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur excepturi quidem. Fuga doloremque expedita facilis possimus earum eos qui quasi ad, autem, aspernatur dicta dolores odit nemo nostrum officiis eaque ipsam. Quia molestiae voluptatibus doloribus id eveniet itaque labore unde enim, ipsa dolorum earum nemo repellendus necessitatibus consequuntur doloremque!</p>
        </div>
      </section>

      <section className="competences">
        <h2>Mes compétences</h2>
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
        <ul className="projet-list">
          {projets.map(projet => (
            <li key={projet.id}>
              <Card
                id={projet.id}
                name={projet.name}
                tech={projet.tech}
                description={projet.description}
                projetPic={projet.projetPic}
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
