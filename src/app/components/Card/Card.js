"use client"
import React from 'react';
import Image from "next/image";
import './Card.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Card = ({ id, name, profilePic, skills, role }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => { setShowModal(false) }
    
  return (
    <>  
        <div className="card">
            {/* <div className="number">{id}</div>  */}
            <img
              className="clipped-img"
              // width={500}
              // height={500}
              src={profilePic}
              alt="profile picture"
            />
            <div className="content">
                <p className="name">{name}</p>
                <button className="learn-more" onClick={() => setShowModal(true)}>Voir plus</button>
            </div>
        </div>

         {showModal && <Modal name={name} role={role} skills={skills} profilePic={profilePic} handleClose={handleClose}/>}
    </>
  );
}

export default Card