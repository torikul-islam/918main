import React, { Component } from 'react';
import './modal.css';



const Modal = ({ isOpen, childComp }) => {
    return (
        <div className={`modal ${isOpen ? 'show' : ''}`}
            style={!isOpen ? { display: "none" } : { display: "block", backgroundColor: "rgba(0, 0, 0, 0.50)" }}
        >
            <div className="modal-dialog-centered" >
                {childComp}
            </div>
        </div>
    );
}

export default Modal;



// class Modal extends Component {
//     // static create(props = {}) {
//     //     const containerElement = document.createElement('div');
//     //     document.body.appendChild(containerElement);
//     //     return render(<ModalContainer createConfirmProps={props} />, containerElement)
//     // }
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false,
//             showConfirmProps: {},
//         }
//     }

//     render() {
//         const { isOpen, childComp } = this.props;
//         return (
//             // <div className='container'>
//             // <div className='modal-cont'>
//             <div className={`modal ${isOpen ? 'show' : ''}`}
//                 style={!isOpen ? { display: "none" } : { display: "block", backgroundColor: "rgba(0, 0, 0, 0.50)" }}
//             >
//                 <div className="modal-dialog-centered" >
//                     {childComp}
//                 </div>
//             </div>
//             // </div>
//         );
//     }
// }

// export default Modal;