import { Link } from "react-router-dom"
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const RegisterPage = () => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState(null)
    const [isRegister, setIsRegister] = useState(null)


    const handleNameUser = (e) => {
        e.preventDefault()
        setUserName(e.target.value)
    }

    const handleEmailUser = (e) => {
        e.preventDefault()
        setUserEmail(e.target.value)
    }

    const handlePasswordUser = (e) => {
        e.preventDefault()
        setUserPassword(e.target.value)
    }


    const handleRegister = async (e) => {
        e.preventDefault()
        const payload = {
            email: userEmail,
            password: userPassword,
            role: "Customer",
        }
        try {
            const res = await axios.post('https://api-car-rental.binaracademy.org/customer/auth/register', payload)
            console.log(res)
            const regis = res
            setIsRegister(regis)
            setErrorLogin(null)
            setTimeout(() => {
                navigate("/login")
            }, 1000)
        } catch (error) {
            console.log(error?.response.data.errors[0].message);
            setErrorLogin(error?.response.data.errors[0].message)
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

    const handleMessege = () => {
        if(errorLogin) {
            return <p className="text-red-500">{errorLogin}</p>
        }
        else if(isRegister) {
            return <p className="text-green-500">Register Success</p>
        }
        return null
    }

    const handleValidateInput = () => {
        if (!userName.length || !userEmail.length || !userPassword.length) {
            return true
        } else {
            return false
        }         
    }

    return (
        <div className='flex h-screen bg-[#F5F5F5]'>
            <div className='flex w-7/12 justify-center items-center max-sm:w-full'>
                <div className='w-7/12 flex flex-col gap-3'>
                    <h1 className=' font-bold text-3xl mb-8'>Sign Up</h1>
                    <div className="flex flex-col gap-6">

                        {handleMessege()}

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Userame</label>
                            <input
                                type="text"
                                onChange={handleNameUser}
                                placeholder='Your Name'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-2 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Email Address</label>
                            <input
                                type="email"
                                onChange={handleEmailUser}
                                placeholder='Enter your email'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-2 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold'>Password</label>
                            <input
                                type={type}
                                name="password"
                                value={userPassword}
                                onChange={handlePasswordUser}
                                placeholder='Create your password'
                                className='font-medium text-sm bg-[#F5F5F5]
                                border px-2 py-2 outline-none border-gray-300 rounded-lg placeholder:text-sm placeholder:text-gray-300'
                                autoComplete="current-password" />
                            <span className=" flex justify-end items-center" onClick={showPassword}>
                                <Icon className="absolute mr-10 mb-11 text-gray-500" icon={icon} size={20} />
                            </span>
                        </div>

                    </div>
                    <button
                        onClick={handleRegister}
                        disabled={handleValidateInput()}
                        className='mt-4 px-2 py-[6px] rounded-md bg-[#0D28A6] text-white font-semibold text-base tracking-wide hover:bg-[#1e307e]'>SignUp</button>

                    <div className="mt-4 flex gap-2 justify-center items-center">
                        <span className="w-full bg-gray-200 h-[1px]"></span>
                        <p className='text-center text-sm'>or</p>
                        <span className="w-full bg-gray-200 h-[1px]"></span>
                    </div>


                    <p className='mt-4 text-center font-medium'>Have an account? <Link to="/login" className='text-blue-700'>Sign In</Link></p>


                </div>
            </div>
            <div className='w-5/12 max-sm:hidden'>
                <img src="./images/bannerLogin.png" alt="gambar"
                    className='h-full w-full' />
            </div>
        </div>
    )
}

export default RegisterPage