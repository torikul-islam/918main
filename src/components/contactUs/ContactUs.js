import React, { useEffect } from 'react';
import Contactheader from "./contactheader";
import SendButton from '../common/sendButton';
import '../contactUs/ContactUs.css';





const ContactUs = (props) => {

    useEffect(() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }), []);

    function onChangeSearch(e) {

    }
    return (
        <div>
            <Contactheader {...props} onChangeSearch={onChangeSearch}
                searchData={[]} />
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
                                    <SendButton />
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