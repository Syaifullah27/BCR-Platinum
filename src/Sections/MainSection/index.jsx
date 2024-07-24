import { useState } from "react";
import Button from "../../Components/Button/Button"
import "./mainSection.css"
import { motion } from 'framer-motion';
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const MainSection = ({ isOpen, btn, isFocused, ptMainSection }) => {

    // eslint-disable-next-line no-unused-vars
    const [show, setShow] = useState(true); // Awalnya true untuk animasi saat render

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(false);
            } else {
                setShow(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {
                ptMainSection === true ? <div
                    className={`main-section-wrapper ${isOpen ? 'blur' : ''} ${isFocused ? 'focused' : ''}`} id="home">
                    <div className="main-section-container">
                        <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
                        transition={{ duration: 0.5 }}>
                            <div className="left-main-section">
                                <h1 className="title">Sewa & Rental Mobil Terbaik Di Kawasan (Lokasimu)</h1>
                                <p className="desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                {btn === true ? <Button /> : null}
                            </div>
                        </motion.div>
                        <div className="right-main-section w-full">
                            <div className=" bg-[#0D28A6] rounded-tl-[50px] h-[300px] max-sm:h-[120px]">
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: show ? 0 : 100, opacity: show ? 1 : 0 }}
                                    transition={{ duration: 1 }}>
                                    <img src="./images/MercedesCar.png" alt="" className="relative bottom-[150px] max-sm:bottom-[120px]" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div> : <div style={{ paddingTop: '90px' }}
                    className={`main-section-wrapper ${isOpen ? 'blur' : ''} ${isFocused ? 'focused' : ''}`} id="home">
                        <div className="main-section-container">
                            <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
                            transition={{ duration: 0.5 }}>
                                <div className="left-main-section">
                                    <h1 className="title">Sewa & Rental Mobil Terbaik Di Kawasan (Lokasimu)</h1>
                                    <p className="desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                    {btn === true ? <Button /> : null}
                                </div>
                            </motion.div>
                            <div className="right-main-section">
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: show ? 0 : 100, opacity: show ? 1 : 0 }}
                                    transition={{ duration: 1 }}>
                                    <img src="./images/img_car.png" alt="main-img" />
                                </motion.div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MainSection



// eslint-disable-next-line react/prop-types
export const MainSection2 = ({ isOpen, btn, isFocused }) => {
    return (
        <div
            className={`main-section-wrapper ${isOpen ? 'blur' : ''} ${isFocused ? '' : ''}`} id="home">
            <div className="main-section-container2">
                <div className="left-main-section">
                    <h1 className="title">Sewa & Rental Mobil Terbaik Di Kawasan (Lokasimu)</h1>
                    <p className="desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    {btn === true ? <Button /> : null}
                </div>
                <div className="right-main-section w-full">
                    <div className="right-main-section">
                        <img src="./images/img_car.png" alt="main-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}