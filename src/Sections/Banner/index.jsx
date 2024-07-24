import "./banner.css"
import Button from "../../Components/Button/Button"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line react/prop-types
const Banner = ({ isOpen }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false, // Biar bisa animasi muncul dan menghilang
      threshold: 0.9 // Proporsi tampilan gambar di viewport untuk memicu animasi
    });
  
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
            className={"banner-wrapper" + (isOpen ? " blur" : "")}>
            <div className="banner-container">
                <div className="banner-text">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <h1 className="text-3xl font-semibold">Sewa Mobil di (Lokasimu) Sekarang</h1>
                        <div className="mt-3 w-full flex justify-center" >
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <Button/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner