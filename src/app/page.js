"use client"
import React, { useState } from "react";
import Card from './components/Card/Card'
import Contact from "./components/Contact/Contact";

export default function Home() {
  const [profiles, updateProfiles] = useState([
            { id: 1, name: "Sophia Anderson", role: "Frontend Engineer", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"], profilePic: "./assets/bali.jpg" },
            { id: 2, name: "Isabella Sullivan", role: "Senior Java Developer", skills: ["Java", "Spring Boot", "Spring Framework", "Maven"], profilePic: "./assets/kyoto.jpg" },
            { id: 3, name: "Ava Reynolds", role: "Backend Developer", skills: ["Node.js", "Express", "MongoDB", "Nest.js"], profilePic: "./assets/lisbon.jpg" },
            { id: 4, name: "Olivia Thompson", role: "Blockchain Developer", skills: ["Web3", "JavaScript", "Solidity", "Rust", "Smart contracts"], profilePic: "./assets/rome.jpg"},    
  ])
    
  
  return (
    <main>
      {/* <Link href="/">Home</Link>
      <Link href="/cv">CV</Link>
      <Link href="/contact">Contact</Link> */}
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
          <h1>Julien</h1>
          <h2>Développeur web</h2>
        </div>
      </section>

      <section className="competences">

      </section>

      <section className="projets">
        <ul className="profile-list">
          {profiles.map(profile => (
            <li key={profile.id}>
              <Card
                id={profile.id}
                name={profile.name}
                skills={profile.skills}
                role={profile.role}
                profilePic={profile.profilePic}
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
