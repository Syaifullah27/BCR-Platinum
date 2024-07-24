import { Link } from 'react-router-dom'
import './navbar.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({isOpen, toggleMenu, inMenu, logoBtn, boxShadow, }) => {   
    
    const token = localStorage.getItem("token_binar")

    const handleLogout = () => {
        if (token) {
            const logout = confirm("Are you sure you want to log out?")
            if (logout) {
                localStorage.removeItem("token_binar")
                window.location.href = "/login"
            }
        } else {
            window.location.href = "/login"
        }
    }

    return (
        <>
        {
            boxShadow === true ? (
            <div style={{
                boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)"}}
                className="navbar-wrapper">
                    <nav className="navbar">
                        <h1 className={`rounded-md text-3xl font-semibold bg-[#0D28A6] text-[#f5f5f5] py-2 px-5 ${isOpen ? 'blur' : ''}`}>Logo</h1>
                        {/* <img src={`./images/EsyehaCarRentals.png` } className={`${isOpen ? 'blur' : ''} logo`}/> */}
                        <div className='backToMenu'>
                            {
                                logoBtn === true ? <a href="#home">back</a> : <Link to="/">back</Link>
                            }
                        </div>
                        <div className="menu-toggle" onClick={toggleMenu}>
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className={`menu-list ${isOpen ? 'active' : ''}`}>
                            {
                                inMenu === true ? <>
                                <li><a href="#services">Our Services</a></li>
                                <li><a href="#whyUs">Why Us</a></li>
                                <li><a href="#testimony">Testimony</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <button 
                                onClick={handleLogout}
                                className='bg-[#5CB85F] text-[#fff] px-4 py-[5px] rounded-lg hover:bg-[#51a154]'>
                                    {token ? "Logout" : "Login"}
                                    </button>
                                </> : 
                                <>
                                    <Link to="/"><li>Our Services</li></Link>
                                    <Link to="/"><li>Why Us</li></Link>
                                    <Link to="/"><li>Testimony</li></Link>
                                    <Link to="/"><li>FAQ</li></Link>
                                    <button 
                                onClick={handleLogout}
                                className='bg-[#5CB85F] text-[#fff] px-4 py-[5px] rounded-lg hover:bg-[#51a154]'>
                                    {token ? "Logout" : "Login"}
                                    </button>
                                </>
                            }
                        </ul>
                    </nav>
                </div> ) :  
                <div
                className="navbar-wrapper">
                    <nav className="navbar">
                        <h1 className={`rounded-md text-3xl font-semibold bg-[#0D28A6] text-[#f5f5f5] py-2 px-5 ${isOpen ? 'blur' : ''}`}>Logo</h1>
                        {/* <img src='./images/EsyehaCarRentals.png' className={`${isOpen ? 'blur' : ''} logo`}/> */}
                        <div className='backToMenu'>
                            {
                                logoBtn === true ? <a href="#home">back</a> : <Link to="/">back</Link>
                            }
                        </div>
                        <div className="menu-toggle" onClick={toggleMenu}>
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className={`menu-list ${isOpen ? 'active' : ''}`}>
                            {
                                inMenu === true ? <>
                                <li><a href="#services">Our Services</a></li>
                                <li><a href="#whyUs">Why Us</a></li>
                                <li><a href="#testimony">Testimony</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <button 
                                onClick={handleLogout}
                                className='bg-[#5CB85F] text-[#fff] px-4 py-[5px] rounded-lg hover:bg-[#51a154]'>
                                    {token ? "Logout" : "Login"}
                                    </button>
                                </> : 
                                <>
                                    <Link to="/"><li>Our Services</li></Link>
                                    <Link to="/"><li>Why Us</li></Link>
                                    <Link to="/"><li>Testimony</li></Link>
                                    <Link to="/"><li>FAQ</li></Link>
                                    <button 
                                onClick={handleLogout}
                                className='bg-[#5CB85F] text-[#fff] px-4 py-[5px] rounded-lg hover:bg-[#51a154]'>
                                    {token ? "Logout" : "Login"}
                                    </button>
                                </>
                            }
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}

export default Navbar