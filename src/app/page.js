"use client";
import React, { useState, useEffect } from "react";
import projetsData from "../data/projetsData.json";
import Cookies from "./components/Cookies/Cookies";
import Card from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import Legal from "./components/Legal/Legal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
	faFigma as fabFigma,
	faGithub as fabGithub,
	faLinkedin as fabLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fabFigma, fabGithub, fabLinkedin);

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const [legalVisible, setLegalVisible] = useState(false);

	const openLegal = () => {
		setLegalVisible(true);
	};

	const closeLegal = () => {
		setLegalVisible(false);
	};

	const projets = projetsData;

	useEffect(() => {
		gsap.utils.toArray(".fade").forEach((element) => {
			gsap.from(element, {
				opacity: 0,
				y: 50,
				duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom", 
          toggleActions: "play none none none"
        }
			});
		});
	}, []);

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
					<h2>Développeur Full Stack Java</h2>
					<p className="fade">
						Bienvenue sur mon portfolio ! Je suis passionné de développement web
						et spécialisé dans le front-end. En créant des applications web
						robustes et innovantes, mon objectif est de transformer des concepts
						de design en solutions logicielles exceptionnelles à travers mes
						compétences en Java, React et Next.js.
					</p>
				</div>
			</section>

			<section className="competences">
				<h2>À propos de moi</h2>
				<p className="introComp fade">
					Je crée des sites et applications responsives dont le référencement
					est optimisé. Voici quelques uns de mes outils :
				</p>
				<div className="containercomp">
					<ul className="book">
						<li className="competenceli">React, Next.js</li>
						<li className="competenceli">Angular</li>
						<li className="competenceli">JS, TS</li>
						<li className="competenceli">SCSS, Bootstrap</li>
						<div className="cover">
							<p className="titre">Front-end</p>
						</div>
					</ul>
					<ul className="book">
						<li className="competenceli">Java JEE</li>
						<li className="competenceli">Spring, Spring Boot</li>
						<li className="competenceli">Hibernate</li>
						<li className="competenceli">Node.js, Express</li>
						<li className="competenceli">Mongodb</li>
						<li className="competenceli">SQL</li>
						<div className="cover">
							<p className="titre">Back-end</p>
						</div>
					</ul>
					<ul className="book">
						<li className="competenceli">Figma</li>
						<li className="competenceli">Git</li>
						<li className="competenceli">Docker</li>
						<li className="competenceli">Agile</li>
						<li className="competenceli">TDD</li>
						<li className="competenceli">SEO</li>
						<div className="cover">
							<p className="titre">Mais aussi...</p>
						</div>
					</ul>
				</div>
			</section>

			<section className="projets">
				<h2>Réalisations</h2>
				<p className="introProjets fade">
					Chaque projet reflète ma passion pour le développement, vous trouverez
					ici mes dernières créations.
				</p>
				<ul className="projet-list">
					{projets.map((projet) => (
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
				<h2>Me contacter</h2>
				<p className="introContact fade">
					Vous avez un projet ? N'hésitez pas à me contacter !
				</p>
				<Contact />
			</section>
			<footer>
				<ul className="liste-footer">
					<li className="li-footer">
						<a
							href="https://github.com/JulienBrancourt"
							className="lien-footer"
							target="_blank"
							aria-label="lien vers Github"
						>
							<FontAwesomeIcon className="icon" icon={["fab", "github"]} />
						</a>
					</li>

					<li className="li-footer">
						<a
							href="#"
							className="lien-footer"
							onClick={(e) => {
								e.preventDefault();
								openLegal();
							}}
							aria-label="Mentions légales"
						>
							Mentions légales
						</a>
					</li>

					<li className="li-footer">
						<a
							href="https://www.linkedin.com/in/julien-brancourt/"
							className="lien-footer"
							target="_blank"
							aria-label="lien vers LinkedIn"
						>
							<FontAwesomeIcon className="icon" icon={["fab", "linkedin"]} />
						</a>
					</li>
				</ul>
			</footer>

			{legalVisible && <Legal onClose={closeLegal} />}
		</main>
	);
}
