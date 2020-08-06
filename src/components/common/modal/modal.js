import React from 'react';
import './modal.css';



const Modal = ({ isOpen, childComp }) => {
    return (
        <div className={`modal modalScrool ${isOpen ? 'show' : ''}`}
            style={!isOpen ? { display: "none" } : { display: "block", backgroundColor: "rgba(0, 0, 0, 0.50)" }}
        >
            <div className="modal-dialog-centered" >
                {childComp}
            </div>
        </div>
    );
}

export default Modal;