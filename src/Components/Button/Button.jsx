import { Link } from "react-router-dom"
import "./button.css"
const Button = () => {

    const scroolToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <Link to={"/search-cars"} style={{ textDecoration: "none" }}>
            <button onClick={() => scroolToTop()} className="btn">Mulai Sewa Mobil</button>
        </Link>
    )
}

export default Button