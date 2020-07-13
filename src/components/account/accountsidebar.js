import React, { Component } from 'react';
import '../account/accountsidebar.css';
import MainTitleAccount from '../account/mainTitleAccount';
import AccountInspired from '../account/accountInspired';

class AccountSidebar extends Component {
    render() {
        return (
            <div>
                <div className="account-sidebar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <MainTitleAccount />
                                <AccountInspired />
                                <AccountInspired />
                                <AccountInspired />
                                <AccountInspired />
                            </div>
                            <div className="col-md-3 bg-color">
                                <div className="titles-section">
                                    <div className="account-title">
                                        <h4>Account Information</h4>
                                        <h5>Name: <span>Kylee</span></h5>
                                        <div className="emaillabel">Email: </div>
                                        <div className="email">kyleeruth@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AccountSidebar;