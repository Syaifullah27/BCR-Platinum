import "./banner.css"
import Button from "../../Components/Button/Button"
// eslint-disable-next-line react/prop-types
const Banner = ({ isOpen }) => {
    return (
        <div className={"banner-wrapper" + (isOpen ? " blur" : "")}>
            <div className="banner-container">
                <div className="banner-text">
                    <h1 className="text-3xl font-semibold">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Banner