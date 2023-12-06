import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {
    const { GoogleSignIn, EmailSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);

    const handleSocialSignIn = () => {
        GoogleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success('SignIn successful')
                {
                    location?.state ? location.state : navigate('/')
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)

        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        if (password.length < 6) {
            return toast.error('The password is less than 6 characters')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error("don't have a capital letter")
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]+/.test(password)) {
            return toast.error("don't have a special character")
        }
        EmailSignIn(email, password)
            .then(result => {
                console.log(result.user);
                {
                    location?.state ? location.state : navigate('/')
                }
                toast.success('SignIn successful')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
                
        })
    }
 
    return (
        <div>
            <Helmet>
                <title>Shine Events | Register</title>
            </Helmet>

            <div className="min-h-screen bg-blue-700 flex justify-center items-center">
                <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
                </div>
                <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
                </div>
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
                            account to enjoy all the services</p>
                    </div>

                    <form onSubmit={handleRegister}>
                        <div className="form-control space-y-4">
                            <input type="email" name='email' placeholder="Email Address" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                            <div className='relative'>
                                <input type={isShow ? "text" : "password"} name='password' placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                                {
                                    isShow ?
                                        <span onClick={() => setIsShow(!isShow)}>
                                            <FaEyeSlash className='absolute top-4 right-2'></FaEyeSlash>
                                        </span>

                                        :
                                        <span onClick={() => setIsShow(!isShow)} >
                                            <FaEye className='absolute top-4 right-2'></FaEye>
                                        </span>

                                }
                            </div>
                            
                        </div>
                        <div className="form-control items-center text-center mt-6">
                            <button className="py-3 w-64 text-xl text-white bg-blue-500 rounded-2xl">Create Account</button>
                            <p className="mt-4 text-sm">Already Have An Account? <span className="underline cursor-pointer text-blue-700"><NavLink to="/login" >Log In</NavLink></span>
                            </p>
                        </div>
                    </form>
                    

                    
                    <div className="divider my-9">OR</div>

                    <p className="mt-4 text-center text-sm">Continue with
                    </p>

                    <div onClick={handleSocialSignIn} className=''>
                        <button  className=" btn btn-outline mt-4 w-full rounded-full"> <FcGoogle className='text-3xl'></FcGoogle> Continue with Google</button>
                    </div>
                </div>
                <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div
                    className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
                </div>
            </div>
        </div>
    );
};

export default Register;