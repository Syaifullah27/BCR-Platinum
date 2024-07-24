/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import "./testimoni.css"
import { dataTestimoni } from "../../Utils/DumyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




// eslint-disable-next-line react/prop-types
const TestimoniSection = ({ isOpen }) => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 600,
        arrow: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // biar bisa animasi muncul dan menghilang
        threshold: 0.9 // proporsi tampilan gambar di viewport untuk memicu animasi
    })

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);





    return (
        <div
            ref={ref}
            className={`${isOpen ? 'blur' : ''}`} id="testimony">
            <div className="testimoni-container">
                <h1 className="text-3xl font-semibold">Testimonial</h1>
                <p>Berbagai review positif dari para pelanggan kami</p>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    <div
                        className="testimoni-card-container">
                        <Slider ref={slider => {
                            sliderRef = slider;
                        }}
                            {...settings}>
                            {
                                dataTestimoni.map((data) => {
                                    return (
                                        <div style={{ width: 650 }}
                                            key={data.id}>
                                            <div className="testimoni-card">
                                                <img src={data.img} alt="testimoni-img" />
                                                <div className="card-list">
                                                    <div className="flex  max-sm: justify-center max-sm:items-center  w-full max-sm:pb-2">
                                                        <img src={data.rate} alt="" />
                                                    </div>
                                                    <p className="text-sm">"{data.desc}"</p>
                                                    <h4 className="font-semibold">{data.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </motion.div>
                <div className="arrow-btn">
                    <button className="btn-prev" onClick={previous}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button className="btn-next" onClick={next}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TestimoniSection