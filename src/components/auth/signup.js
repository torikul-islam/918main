import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../common/modal/modal';
import Input from '../common/input';
import GoBtn from '../common/goBtn';
import { signup } from '../../services/authServices';
import './signup.css';

import axios from 'axios';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            errors: {},
            success: null
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        try {
            const { data } = await signup(username, email, password);
            localStorage.setItem('token', data.token);
            this.setState({ success: "Registration completed. You're redirecting..." });
            setTimeout(() => {
                this.props.openModal('loginNext');
            }, 3000)
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                this.setState({ errors: ex.response.data })
            }
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        const { username, password, email, errors, success } = this.state;
        const { closeModal } = this.props;

        return (
            <div className='container'>
                <div className='auth-signup'>
                    <div className='cross-icon' onClick={closeModal}>
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
                                    {<p className='success-mess'>{success}</p>}
                                    <form onSubmit={this.handleSubmit} >
                                        <Input
                                            onChange={this.handleChange}
                                            value={username || ''}
                                            name='username'
                                            id='username'
                                            type='text'
                                            placeholder='Name'
                                            error={errors['username'] && errors['username'][0]}
                                        />
                                        <Input
                                            onChange={this.handleChange}
                                            value={email || ''}
                                            name='email'
                                            id='email'
                                            type='email'
                                            placeholder='Email'
                                            error={errors['email'] && errors['email'][0] || false}
                                        />
                                        <Input
                                            onChange={this.handleChange}
                                            value={password || ''}
                                            name='password'
                                            id='password'
                                            type='password'
                                            placeholder='Password'
                                            error={errors['password'] && errors['password'][0]}
                                        />
                                        <button type="submit" className="btn btn-signup">Sign Up</button>
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