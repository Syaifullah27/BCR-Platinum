import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function NavbarDetail({ isOpen, toggleMenu, }) {

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
        <div className="navbar-wrapper">
            <nav className="navbar">
                <div className={`logo ${isOpen ? 'blur' : ''}`}>
                    {/* <img src="./../images/EsyehaCarRentals.png" width={"210"}/> */}
                    <h1 className='text-3xl font-semibold bg-[#0D28A6] text-[#f5f5f5] py-2 px-5'>Logo</h1>
                </div>
                <div className="menu-toggle">
                    <input type="checkbox" onClick={toggleMenu}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu-list ${isOpen ? 'active' : ''}`}>
                    <Link to="/"><li>Our Services</li></Link>
                    <Link to="/"><li>Why Us</li></Link>
                    <Link to="/"><li>Testimony</li></Link>
                    <Link to="/"><li>FAQ</li></Link>
                    <button 
                                onClick={handleLogout}
                                className='bg-[#5CB85F] text-[#fff] px-4 py-[5px] rounded-lg hover:bg-[#2E8B57]'>
                                    {token ? "Logout" : "Login"}
                                    </button>
                </ul>

            </nav>
        </div>
    )
}

