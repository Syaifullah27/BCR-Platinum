import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const Animation = () => {

    // eslint-disable-next-line no-unused-vars
    const [scrollY, setScrollY] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 300) { // Adjust this value based on when you want the animation to trigger
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
        <div>
            <h1>ANIMATION</h1>
            {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            >
            <h1>Fade In Animation</h1>
            </motion.div> */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ height: '100vh', backgroundColor: 'lightblue' }}
            >
                <h1>Scroll Up to See Me!</h1>
            </motion.div>
        </div>
    )
}

export default Animation