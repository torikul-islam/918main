import React, { useState, useEffect } from 'react';
import Navbar from '../navbar2';
import AccountArticles from './accoutArticles';
import AccountLooks from './accoutLooks';
import AccountProduct from './accoutProduct';
import AccountInspiration from './accountInspiration';
import getUser from '../../services/userService';
import './account.css';




function Account() {
    const [user, setUser] = useState(false)

    useEffect(() => {
        (async function () {
            const { data } = await getUser();
            setUser(data);
        })()
    }, []);



    return (
        <>
            <Navbar />
            {user ? <div className='account-sidebar'>
                <div className='container'>
                    <h4>My Likes</h4>
                    <div className='row'>
                        <div className='col-sm-9'>
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
                <div className="container">
                    <h3>Please! login to continue.</h3>
                </div>
            }
        </>
    );
}

export default Account;

