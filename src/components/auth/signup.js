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
                    <div className='row desc'>
                        <div className='col-lg-6 signup-left'>
                            <h2>Create a free account.</h2>
                            <h5>Why sign up?</h5>
                            <ul className=' '>
                                <li className='signup-item'>Create your own moodboards</li>
                                <li className='signup-item'>Receive personalized Recommendations</li>
                                <li className='signup-item'>Organize your inspiration and shopping list in to spot</li>
                            </ul>
                            <div className='have-account'>
                                <h6>Already have an account</h6>
                                <h3><Link to="#">Login</Link></h3>
                            </div>
                        </div>
                        <div className='col-lg-6 signup-right'>

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
        );
    }
}

export default Signup;