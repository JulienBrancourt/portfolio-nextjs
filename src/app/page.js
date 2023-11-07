"use client"
// import Link from "next/link"
import Image from "next/image";
import ModalButton from "./components/ModalButton"
import { useState } from "react";

export default function Home() {

  return (
    <main>
      {/* <Link href="/">Home</Link>
      <Link href="/cv">CV</Link>
      <Link href="/contact">Contact</Link> */}
      <section className="presentation">
        <div className="logo">
          <div class="global">
            <div class="detail">
              <span class="txt">JB</span>
              <span class="one h6"></span>
              <span class="two h3"></span>
            </div>
          </div>
    
          <div class="global pivot1">
            <div class="detail">
              <span class="one h1"></span>
              <span class="two h4"></span>
            </div>
          </div>
        
          <div class="global pivot2">
            <div class="detail">
              <span class="one h5"></span>
              <span class="two h2"></span>
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
        <ul class="card-list">
          <li class="card">
            <Image
              class="clipped-img"
              src="/assets/bali.jpg"
              width={500}
              height={500}
              alt="image de bali"
            />
            <div class="content">
              <p class="card-location">Bali</p>
              <div class="actions-container">
            
          
                <ModalButton/>
              </div>
            </div>
          </li>
          <li class="card">
            <Image
              class="clipped-img"
              src="/assets/edinburgh.jpg"
              width={500}
              height={500}
              alt="image de bali"
            />
            <div class="content">
              <p class="card-location">edinburgh</p>
              <div class="actions-container">
                <ModalButton/>
              </div>
            </div>
          </li>
          
        </ul>
      </section>
       
    </main>
  );
}
