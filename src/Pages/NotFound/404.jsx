import { Link } from "react-router-dom"
import "./404.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const NotFound = () => {
    return (
        <div className="not-found-wrapper">
            <div className="not-found-container">
                <div className="not-found">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <button className="btn-not-found"><FontAwesomeIcon icon={faArrowLeft} />Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound