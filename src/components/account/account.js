import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarB from '../nav/navbarB';
import AccountArticles from './accoutArticles';
import AccountLooks from './accoutLooks';
import AccountProduct from './accoutProduct';
import AccountInspiration from './accountInspiration';
import getUser from '../../services/userService';
import Signup from '../auth/signup';
import Login from '../auth/login';
import Modal from '../common/modal/modal';
import './account.css';




const Account = (props) => {
    // const { openModal } = props;
    const [modal, setModal] = useState({ isOpen: false, name: null });
    const token = localStorage.getItem('token');
    const [user, setUser] = useState({})

    useEffect(() => {
        if (!token) {
            openModal('login')
        }

    }, [token])



    function openModal(name) {
        setModal({ isOpen: true, name: name });
    };

    function closeModal() {
        setModal({ isOpen: false, name: null })
    };

    useEffect(() => {
        if (token) {
            (async function () {
                const { data } = await getUser();
                setUser(data);
            })()
        }
    }, [token]);

    function onChangeSearch(e) {

    }

    const { name, isOpen } = modal;
    return (
        <>
            <NavbarB {...props}
                onChangeSearch={onChangeSearch}
                searchData={[]} />
            {token ?
                <div className='account-sidebar'>
                    <div className='container'>
                        <h4>My Likes</h4>
                        <div className='row'>
                            <div className='col-md-9'>
                                <AccountProduct />
                                <AccountInspiration />
                                <AccountArticles />
                                <AccountLooks />
                            </div>

                            <div className="col-md-3 bg-color">
                                <div className="titles-section">
                                    <div className="account-title">
                                        <h4>Account Information</h4>
                                        <h5>Name: <span>{user.username}</span></h5>
                                        <div className="emaillabel">Email: </div>
                                        <div className="email">{user.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="containerLogin">
                    <div className="container" >
                        {!isOpen && <h3>Before continue this page, you must need to login.
                                <Link className='remove-u-line link-color' to='#' onClick={() => openModal('login')} > Login here</Link>
                        </h3>}
                    </div>
                </div>
            }
            {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup openModal={openModal} closeModal={closeModal} />} />}
            {name === 'login' && <Modal isOpen={isOpen} childComp={<Login openModal={openModal} closeModal={closeModal} />} />}
        </>
    );
}

export default Account;

