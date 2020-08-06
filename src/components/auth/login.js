import React, { useState } from 'react';
import Input from '../common/input';
import { login } from '../../services/authServices';



function Login({ openModal, closeModal, isMoodBoard }) {
    const [user, setUser] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);


    function handleChange(e) {
        const u = { ...user };
        u[e.target.id] = e.target.value;
        setUser(u);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setErrors(null);
            const { data } = await login(user.username, user.password);
            setSuccess("Logged you in, please wait...");
            localStorage.setItem('token', data.token);
            if (isMoodBoard) {
                window.location = '/workspace';
            } else {
                setTimeout(() => openModal('loginNext'), 3000);
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrors("Invalid username or password!");
            }
        }
    }


    const { username, password } = user;
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
                                <h3 onClick={() => openModal('signup', isMoodBoard)}>
                                    <p>Signup</p>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='signup-right'>
                            <div className='signup-form'>
                                {<p className='success-mess'>{success}</p>}
                                {<p className='success-error'>{errors}</p>}
                                <form onSubmit={handleSubmit} >

                                    <Input
                                        onChange={handleChange}
                                        value={username || ''}
                                        name='username'
                                        id='username'
                                        type='text'
                                        autoComplete='off'
                                        placeholder='User name'
                                    />
                                    <Input
                                        onChange={handleChange}
                                        value={password || ''}
                                        name='password'
                                        id='password'
                                        type='password'
                                        autoComplete='off'
                                        placeholder='Password'
                                    />
                                    <button type="submit" className="btn btn-signup">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;