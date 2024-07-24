import "./whyUs.css"
import React from 'react';
import { dataWhyUs } from "../../Utils/DumyData"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
// eslint-disable-next-line react/prop-types
const WhyUsSection = ({ isOpen }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // biar bisa animasi muncul dan menghilang
        threshold: 0.4 // proporsi tampilan gambar di viewport untuk memicu animasi
    });

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
                delay: i * 0.3,
                duration: 0.5,
            },
        }),
    };

    
    return (
        <div className={`${isOpen ? 'blur' : ''}`} id="whyUs">
            <div className="why-us-wrapper">
                <div
                    ref={ref}
                    className="why-us-container">
                    <h1 className="text-3xl font-semibold">Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                        <div className="whyUs-card-wrapper">
                        {
                        dataWhyUs.map((data,index) => {
                            return (
                                <motion.div
                                    key={data.id}
                                    custom={index}
                                    initial="hidden"
                                    animate={controls}
                                    variants={slideInRight}>
                                    <div className="whyUs-card" >
                                        <img src={data.img} alt=""  />
                                        <h3 className="font-semibold">{data.title}</h3>
                                        <p className="font-medium">{data.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                        </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUsSection