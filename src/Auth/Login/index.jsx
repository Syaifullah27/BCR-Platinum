
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const [errorLogin, setErrorLogin] = useState(null)

    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const payload = {
            email: email,
            password: password
        }
        try {
            const res = await axios.post('https://api-car-rental.binaracademy.org/customer/auth/login', payload)
            // console.log(res.data);
            setToken(res.data.access_token)
            // console.log(token);
            localStorage.setItem('token_binar', token)
            setErrorLogin(null)
            setTimeout(() => {
                navigate("/")
            }, 500)
        } catch (error) {
            setErrorLogin(error?.response?.data?.message)
            setToken(null)
            console.log(error?.response.data.message);
        }
    }


    const handleMessege = () => {
        if(errorLogin) {
            return <p className="text-red-500">{errorLogin}</p>
        }
        else if(token) {
            return <p className="text-green-500">Login Success</p>
        }
        return null
    }

    const handleValidateInput = () => {
        if (!email.length || !password.length) {
            return true
        } else {
            return false
        }         
    }




    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const showPassword = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    return (
        <div className='flex h-screen bg-[#F5F5F5]'>
            <div className='flex w-7/12 justify-center items-center max-sm:w-full'>
                <div className='w-7/12 flex flex-col gap-3'>
                    <div className="mb-10">
                        <h1 className='font-bold text-3xl'>Welcome Back!</h1>
                    </div>
                    
            {
                handleMessege()
            }


                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                placeholder='Enter your email'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-1 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className="flex justify-between items-center">
                                <label className='font-semibold'>Password</label>
                                <a href="" className="text-blue-800 text-[13px] font-medium">forgot password</a>
                            </div>
                            <input
                                type={type}
                                name="password"
                                value={password}
                                onChange={handlePassword}
                                placeholder='Enter your password'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-2 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300'
                                autoComplete="current-password" />
                            <span className=" flex justify-end items-center" onClick={showPassword}>
                                <Icon className="absolute mr-10 mb-11 text-gray-500" icon={icon} size={20} />
                            </span>
                        </div>
                    </div>
                    <button
                        disabled={handleValidateInput()}
                        onClick={handleLogin}
                        className='mt-4 px-2 py-[5px] rounded-md bg-[#0D28A6] text-white font-semibold text-base tracking-wide hover:bg-[#1e307e]'>Sign In</button>

                    <div className="mt-4 flex gap-2 justify-center items-center">
                        <span className="w-full bg-gray-200 h-[1px]"></span>
                        <p className='text-center text-sm'>or</p>
                        <span className="w-full bg-gray-200 h-[1px]"></span>
                    </div>

                    

                    <p className='mt-4 text-center font-medium'>Don&#39;t have an account? <Link to="/register" className='text-blue-700 underline'>Sign Up</Link></p>


                </div>
            </div>
            <div className='w-5/12 max-sm:hidden'>
                <img src="./images/bannerLogin.png" alt="gambar"
                    className='h-full w-full' />
            </div>
        </div>
    )
}

export default LoginPage