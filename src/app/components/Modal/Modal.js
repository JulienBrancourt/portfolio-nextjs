import React from 'react'
import './Modal.css'

const Modal = ({name, projetPic, handleClose, tech, description}) => {
  return (
    <div className="modal-backdrop">

      <div className="modal">
        <div class="container-close" onClick={() => handleClose()}>  
          <div class="circle">
          <div class="line first"></div>
          <div class="line second"></div>
          </div>                
        </div>
        <img className="modal-img" src={projetPic} alt="projet pic" />
        <div className="modal-body">
            <div className='modal-name'>{name}</div>
            <div className='modal-description'>{description}</div>
            <div className="skills">
            <ul>
                {tech.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
            </div>
        </div>
          {/* <button className="close-btn" onClick={()=> handleClose()}>x</button> */}
          
        </div>

    </div>
  )
}

export default Modal