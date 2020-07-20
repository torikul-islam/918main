import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/input';
import { signup } from '../../services/authServices';
import './signup.css';



function Signup(props) {
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(null);

    function handleChange(e) {
        const u = { ...user };
        u[e.target.id] = e.target.value;
        setUser(u);
    }


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await signup(user.username, user.email, user.password);
            localStorage.setItem('token', data.token);
            setSuccess("Registration completed. You're redirecting...");
            setTimeout(() => openModal('loginNext'), 3000)
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrors(ex.response.data);
            }
        }
    }


    const { username, password, email } = user;
    const { closeModal, openModal } = props;

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
                                <h3 onClick={() => openModal('login')}>
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





// class Signup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: null,
//             email: null,
//             password: null,
//             errors: {},
//             success: null
//         }
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         const { username, email, password } = this.state;
//         try {
//             const { data } = await signup(username, email, password);
//             localStorage.setItem('token', data.token);
//             this.setState({ success: "Registration completed. You're redirecting..." });
//             setTimeout(() => {
//                 this.props.openModal('loginNext');
//             }, 3000)
//         } catch (ex) {
//             if (ex.response && ex.response.status === 400) {
//                 this.setState({ errors: ex.response.data })
//             }
//         }
//     };

//     handleChange = (e) => {
//         this.setState({ [e.target.id]: e.target.value });
//     }

//     clickLogin = () => {
//         this.props.openModal('login');
//     }


//     render() {
//         const { username, password, email, errors, success } = this.state;
//         const { closeModal, openModal } = this.props;

//         return (
//             <div className='container'>
//                 <div className='auth-signup'>
//                     <div className='cross-icon' onClick={closeModal}>
//                         <img src={require('../../Asset/Icons/cross.png')} alt="" />
//                     </div>

//                     <div className='row'>
//                         <div className='col-sm-6'>
//                             <div className='signup-left'>
//                                 <h2>Create a free account.</h2>
//                                 <h5>Why sign up?</h5>
//                                 <ul className=' '>
//                                     <li className='signup-item'><img src={require('../../Asset/Icons/checked.png')} alt="checked.png" /><span className="modd_board">Create your own moodboards</span></li>
//                                     <li className='signup-item'><img src={require('../../Asset/Icons/checked.png')} alt="checked.png" /><span className="modd_board">Receive personalized Recommendations</span></li>
//                                     <li className='signup-item'><img src={require('../../Asset/Icons/checked.png')} alt="checked.png" /><span className="modd_board">Organize your inspiration and shopping list in to spot</span></li>
//                                 </ul>
//                                 <div className='have-account'>
//                                     <h6>Already have an account</h6>
//                                     <h3 onClick={this.clickLogin}>
//                                         {/* <h3 onClick={() => openModal('login')}> */}
//                                         <h6>Login</h6>
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-sm-6'>
//                             <div className='signup-right'>
//                                 <div className='signup-form'>
//                                     {<p className='success-mess'>{success}</p>}
//                                     <form onSubmit={this.handleSubmit} >
//                                         <Input
//                                             onChange={this.handleChange}
//                                             value={username || ''}
//                                             name='username'
//                                             id='username'
//                                             type='text'
//                                             placeholder='Name'
//                                             error={errors['username'] && errors['username'][0]}
//                                         />
//                                         <Input
//                                             onChange={this.handleChange}
//                                             value={email || ''}
//                                             name='email'
//                                             id='email'
//                                             type='email'
//                                             placeholder='Email'
//                                             error={errors['email'] && errors['email'][0]}
//                                         />
//                                         <Input
//                                             onChange={this.handleChange}
//                                             value={password || ''}
//                                             name='password'
//                                             id='password'
//                                             type='password'
//                                             placeholder='Password'
//                                             error={errors['password'] && errors['password'][0]}
//                                         />
//                                         <button type="submit" className="btn btn-signup">Sign Up</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default Signup;