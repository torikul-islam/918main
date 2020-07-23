import React, { Component } from 'react';
import NavbarB from '../nav/navbarB';
import '../contactUs/ContactUs.css';
import LearnButton from '../common/learnButton';
import HeaderInspired from "../../components/inspired/headerInspired";
import Contactheader from "./contactheader";
import SendButton from '../common/sendButton';
// class ContactUs extends Component {
    const ContactUs = ({openModal, data, openMenu, handleOpenMenu  }) => {
    
        return (
            <div>
                {/* <NavbarB openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal}/> */}
                <Contactheader openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal}/>
                <div className="container contact-form">
                    <form>
                        <h3 className="text-center">We’d love to hear from you!</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtName" className="form-control" placeholder="Name" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmail" className="form-control" placeholder="Email" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" className="form-control" placeholder="Subject*" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea id="textareaMessage" name="txtMsg" className="form-control" placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className=" btnCenter">
                                    <div className="form-group">
                                        <SendButton/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container-inputflides">
                    <div className="container">
                        <div className="contacti-input">
                            <h3 className="text-center">Get on the list!</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="txtname" className="form-control" placeholder="Name" value="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="txtemail" className="form-control" placeholder="Email" value="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default ContactUs;