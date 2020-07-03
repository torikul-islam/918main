import React, { Component } from 'react';
import GoBtn from '../common/goBtn';
import './loginNext.css';


class LoginNext extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container'>
                <div className='login-next'>
                    <div className='cross-icon'>
                        <img src={require('../../Asset/Icons/cross.png')} alt="" />
                    </div>


                    <div className='row'>
                        <div className='col-sm-7'>
                            <div className='mf-left'>
                                <h2>Now comes the fun! </h2>
                                <p>
                                    We recommended starting by
                                    answering a few questions,
                                    which will allow use to
                                    set up your workspace
                                    with personalize
                                    recommendations!
                                </p>

                                <GoBtn />
                            </div>
                        </div>
                        <div className='col-sm-5'>
                            <div className='mf-right'>
                                <div className='skip'>
                                    <h6>
                                        You can also skip the questions and just get started.
                                    </h6>
                                    <GoBtn />
                                </div>
                                <div className='continue'>
                                    <h6>Click here to continue browsing.</h6>
                                    <GoBtn />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default LoginNext;