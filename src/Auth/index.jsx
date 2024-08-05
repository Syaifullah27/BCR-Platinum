import { useState } from 'react';
import LoginPage from './Login';
import RegisterPage from './Register';


const AuthPage = () => {
    const [isLoginpage, setIsLoginpage] = useState(true)




    return (
        <div>
            {
                isLoginpage ? <LoginPage  setIsLoginpage={setIsLoginpage} /> :
                    <RegisterPage  setIsLoginpage={setIsLoginpage} />
            }
        </div>
    )
    
}

export default AuthPage