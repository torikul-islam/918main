import React, { useState } from 'react';
import GoBtn from '../common/goBtn';
import Input from '../common/input';
import { login, signup } from '../../services/authServices';
import './createBoard.css';


function CreateBoard(props) {
    const { openModal } = props;
    const [loginBoard, setLoginBoard] = useState(false);
    const [user, setUser] = useState({ username: '', password: '', email: '' });
    const [errors, setErrors] = useState({});


    async function submitLogin(e) {
        e.preventDefault();
        console.log(user.username, user.password);
        try {
            const { data } = await login(user.username, user.password);
            localStorage.setItem('token', data.token);
            window.location = '/workspace';
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrors(ex.response.data);
            }
        }
    };


    async function submitSignup(e) {
        e.preventDefault();
        try {
            const { data } = await signup(user.username, user.email, user.password);
            localStorage.setItem('token', data.token);
            window.location = '/workspace';
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrors(ex.response.data);
            }
        }
    }

    function onChange(e) {
        const u = { ...user };
        const er = { ...errors };
        u[e.target.id] = e.target.value;
        er[e.target.id] = null
        setUser(u);
        setErrors(er);
    }
    function clickLoginBoard() {
        setLoginBoard(true);
    }

    function clickSignup() {
        setLoginBoard(false);
    }

    const { username, password, email } = user;

    return (
        <div className='container'>
            <div className='create-board'>
                <div className='boardPadding'>
                    <div className="imageLeft" onClick={() => openModal('boardName')}>
                        <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                    </div>
                    <div className="dotList mt-0 mb-4">
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                    </div>
                </div>
                <div className='form-cb-board'>
                    <h3>Sign up so we can save your boards!</h3>
                    {!loginBoard && <div className='cb-input-area'>
                        <form onSubmit={submitSignup}>
                            <div className='cb-input'>
                                <Input name='username'
                                    onChange={onChange}
                                    value={username || ''}
                                    id='username'
                                    placeholder='User Name'
                                    error={errors['username'] && errors['username'][0]}
                                />
                                <Input
                                    onChange={onChange}
                                    value={email || ''}
                                    name='email'
                                    id='email'
                                    placeholder='Email'
                                    error={errors['email'] && errors['email'][0]}
                                />
                                <Input
                                    onChange={onChange}
                                    value={password || ''}
                                    name='password'
                                    id='password'
                                    placeholder='Password'
                                    type='password'
                                    error={errors['password'] && errors['password'][0]}
                                />
                            </div>
                            <div className='cb-btn'>
                                <GoBtn text='Create Board' type='submit' />
                            </div>

                            <div className='have-account'>
                                <h4>Already have an account?</h4>
                                <h3 onClick={clickLoginBoard}>Login</h3>
                            </div>
                        </form>
                    </div>}
                    {loginBoard && <div className='cb-input-area'>
                        <form onSubmit={submitLogin}>
                            <div className='cb-input'>
                                <Input name='username'
                                    onChange={onChange}
                                    value={email || ''}
                                    id='username'
                                    placeholder='User name'
                                    error={errors['username'] && errors['username'][0]}
                                />
                                <Input
                                    onChange={onChange}
                                    value={password || ''}
                                    name='password' id='password'
                                    error={errors['password'] && errors['password'][0]}
                                    placeholder='Password' type='password' />
                            </div>
                            <div className='cb-btn'>
                                <GoBtn text='Create Board' type='submit' />
                            </div>

                            <div className='have-account'>
                                <h4>Don't have an account? </h4>
                                <h3 onClick={clickSignup}>Signup</h3>
                            </div>
                        </form>
                    </div>}
                </div>

            </div>
        </div>
    );
}

export default CreateBoard;
