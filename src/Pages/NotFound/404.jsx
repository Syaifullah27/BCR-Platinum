import { Link } from "react-router-dom"
import "./404.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const NotFound = () => {
    return (
        <div className="not-found-wrapper">
            <div className="not-found-container">
                <div className="not-found">
                    <h1 className="text-shadow">404</h1>
                    <h2 className="text-shadow2">Page Not Found</h2>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <button className="text-slate-900 bg-white p-4 rounded-xl px-4 text-center font-semibold tracking-widest flex gap-4 justify-center items-center btn-not-found ease-in-out duration-500"><FontAwesomeIcon icon={faArrowLeft} />Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound