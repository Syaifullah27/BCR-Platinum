import "./secondSection.css"
import { dataServices } from "../../Utils/DumyData";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line react/prop-types
const SecondSection = ({ isOpen }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // biar bisa animasi muncul dan menghilang
        threshold: 0.4 // proporsi tampilan gambar di viewport untuk memicu animasi
    })

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);


    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };


    return (
        <div className={`second-section-wrapper ${isOpen ? 'blur' : ''}`} id="services">
            <div className="second-section-container">
                <div className="left-second-section w-full flex flex-col items-center max-sm:mr-10">
                    <motion.img
                        ref={ref}
                        src="./images/img_service.png" // Ganti dengan path gambar yang sesuai
                        alt="Perempuan"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.3 }} />
                </div>
                <div className="right-second-section">
                    <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    {
                        dataServices.map((item, index) => {
                            return (
                                <motion.div
                                    key={item.id}
                                    custom={index}
                                    initial="hidden"
                                    animate={controls}
                                    variants={slideInRight}>
                                    <div className="right-second-section-item" >
                                        <img src="./images/checked.png" alt="" />
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SecondSection