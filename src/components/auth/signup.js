import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };


    render() {
        return (
            <div className='container'>
                <div className='auth-signup'>
                    <div className='cross-icon'>
                        <img src={require('../../Asset/Icons/cross.png')} alt="" />
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='signup-left'>
                                <h2>Create a free account.</h2>
                                <h5>Why sign up?</h5>
                                <ul className=' '>
                                    <li className='signup-item'><img src={require('../../Asset/Icons/checked.png')} alt="checked.png" /><span className="modd_board">Create your own moodboards</span></li>
                                    <li className='signup-item'><img src={require('../../Asset/Icons/checked.png')} alt="checked.png" /><span className="modd_board">Receive personalized Recommendations</span></li>
                                    <li className='signup-item'><img src={require('../../Asset/Icons/checked.png')} alt="checked.png" /><span className="modd_board">Organize your inspiration and shopping list in to spot</span></li>
                                </ul>
                                <div className='have-account'>
                                    <h6>Already have an account</h6>
                                    <h3><Link to="#">Login</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='signup-right'>
                                <div className='signup-form'>

                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" placeholder="Email" autoComplete='off' />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="password" placeholder="Password" autoComplete='off' />
                                        </div>
                                        <button type="button" className="btn btn-signup">Sign Up</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;