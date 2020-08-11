import React, { useState } from 'react';
import Input from '../common/input';
import { signup } from '../../services/authServices';
import './signup.css';



function Signup(props) {
    const { closeModal, openModal, isMoodBoard } = props;

    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(null);

    function handleChange(e) {
        const u = { ...user, errors };
        u[e.target.id] = e.target.value;
        errors[e.target.id] = null;
        setUser(u);
    }


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await signup(user.username, user.email, user.password);
            localStorage.setItem('token', data.token);
            setSuccess("Registration completed. You're redirecting...");
            if (isMoodBoard) {
                window.location = '/workspace';
            } else {
                setTimeout(() => openModal('loginNext'), 3000);
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrors(ex.response.data);
            }
        }
    }


    const { username, password, email } = user;

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
                                <h3 onClick={() => openModal('login', isMoodBoard)}>
                                    <p>Login</p>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='signup-right'>
                            <div className='signup-form'>
                                {<p className='success-mess'>{success}</p>}
                                <form onSubmit={handleSubmit} >
                                    <Input
                                        onChange={handleChange}
                                        value={username || ''}
                                        name='username'
                                        id='username'
                                        type='text'
                                        placeholder='Name'
                                        autoComplete='off'
                                        error={errors['username'] && errors['username'][0]}
                                    />
                                    <Input
                                        onChange={handleChange}
                                        value={email || ''}
                                        name='email'
                                        id='email'
                                        type='email'
                                        placeholder='Email'
                                        autoComplete='off'
                                        error={errors['email'] && errors['email'][0]}
                                    />
                                    <Input
                                        onChange={handleChange}
                                        value={password || ''}
                                        name='password'
                                        id='password'
                                        type='password'
                                        placeholder='Password'
                                        autoComplete='off'
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
    )


}

export default Signup;