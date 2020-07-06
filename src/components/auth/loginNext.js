import React, { Component } from 'react';
import GoBtn from '../common/goBtn';
import './loginNext.css';


class LoginNext extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    clickBoard = () => {
        this.props.openModal('boardName');
    };

    clickContinue = () => {
        this.props.history.push('/explore');
    };

    clickAnsQues = () => {
        this.props.openModal('onboardQ1');
    };


    render() {
        const { closeModal } = this.props;

        return (
            <div className='container'>
                <div className='login-next'>
                    <div className='cross-icon' onClick={closeModal}>
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

                                <GoBtn onClick={this.clickAnsQues} />
                            </div>
                        </div>
                        <div className='col-sm-5'>
                            <div className='mf-right'>
                                <div className='skip'>
                                    <h6>
                                        You can also skip the questions and just get started.
                                    </h6>
                                    <GoBtn onClick={this.clickBoard} />
                                </div>
                                <div className='continue'>
                                    <h6>Click here to continue browsing.</h6>
                                    <GoBtn onClick={this.clickContinue} />
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