import "./footer.css"
import { socialMediaImg } from "../../Utils/DumyData"
import { Link } from "react-router-dom"
// eslint-disable-next-line react/prop-types
const Footer = ({ isOpen, isFocused, inMenu }) => {



    return (
        <div className={"footer-wrapper" + (isOpen ? " blur" : "") + (isFocused ? "" : "")}>
            <div className="footer-container">
                <div className="footer-contact">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="footer-menu">
                    <ul>
                        {
                            inMenu === true ? 
                            <div className="link">
                                <Link to="/" 
                                style={{ textDecoration: "none",fontSize: "16px", fontWeight: "500", color: "black", textShadow: "0px 0px 1px rgb(19, 16, 16)", transition: ".2s all ease" }}><li>Home</li></Link>
                                <Link style={{ textDecoration: "none",fontSize: "16px", fontWeight: "500", color: "black", textShadow: "0px 0px 1px rgb(19, 16, 16)", transition: ".2s all ease" }}
                                to="/"><li>Our Servis</li></Link>
                                <Link style={{ textDecoration: "none",fontSize: "16px", fontWeight: "500", color: "black", textShadow: "0px 0px 1px rgb(19, 16, 16)", transition: ".2s all ease" }}
                                to="/"><li>Why Us</li></Link>
                                <Link style={{ textDecoration: "none",fontSize: "16px", fontWeight: "500", color: "black", textShadow: "0px 0px 1px rgb(19, 16, 16)", transition: ".2s all ease" }}
                                to="/"><li>Testimonial</li></Link>
                                <Link style={{ textDecoration: "none",fontSize: "16px", fontWeight: "500", color: "black", textShadow: "0px 0px 1px rgb(19, 16, 16)", transition: ".2s all ease" }}
                                to="/"><li>FAQ</li></Link>
                            </div> : 
                            <>
                                <li><a href="#services">Our Servis</a></li>
                                <li><a href="#whyUs">Why Us</a></li>
                                <li><a href="#testimony">Testimonial</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="footer-socialMedia">
                    <p>Contect With Us</p>
                    <div className="img">
                    {
                        socialMediaImg.map((img) => {
                            return (
                                <img src={img} alt="" key={img}/>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright Binar 2024</p>
                    <h1 className='text-3xl font-semibold bg-[#0D28A6] text-[#f5f5f5] py-2 px-5'>Logo</h1>
                    {/* <img src="./images/EsyehaCarRentals.png" alt=""/> */}
                </div>
            </div>
        </div>
    )
}

export default Footer