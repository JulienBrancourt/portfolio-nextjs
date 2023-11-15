"use client"
import React from 'react';
import './Card.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Card = ({ id, name, projetPic, tech, description }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => { setShowModal(false) }
    
  return (
    <>  
        <div className="card">
            <img
              className="clipped-img"
              src={projetPic}
              alt="image du projet"
            />
            <div className="content">
                <p className="name">{name}</p>
                <button className="learn-more" onClick={() => setShowModal(true)}>Voir plus</button>
            </div>
        </div>

         {showModal && <Modal name={name} description={description} tech={tech} projetPic={projetPic} handleClose={handleClose}/>}
    </>
  );
}

export default Card