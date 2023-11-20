"use client"
import React from 'react';
import './Card.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Card = ({ id, name, projetPic, tech, description, modalPic, lien }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => { setShowModal(false) }
    
  return (
    <>  
      <div className="card">
        <div className='imgwrap'>
          <img
            className="clipped-img"
            src={projetPic}
            alt="image du projet"
            />
        </div>

        <div className="content">
          <p className="name">{name}</p>
          <button className="learn-more" onClick={() => setShowModal(true)}>Voir plus</button>
        </div>
      </div>

      {showModal &&
        <Modal
          name={name}
          description={description}
          tech={tech}
          projetPic={projetPic}
          modalPic={modalPic}
          lien={lien}
          handleClose={handleClose} />}
    </>
  );
}

export default Card