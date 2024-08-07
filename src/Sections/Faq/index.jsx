/* eslint-disable react/no-unescaped-entities */
import "./faq.css"
import Faq from "react-faq-component";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import arrowDown from "../../assets/down.png"
// eslint-disable-next-line react/prop-types
const FaqSections = ({ isOpen }) => {

    const data = {
        rows: [
            {
                title: <p style={{fontWeight: "bold"}}>Apa saja syarat yang dibutuhkan?</p>,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                    ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                    In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                    Fusce sed commodo purus.`,
            },
            {
                title: <p style={{fontWeight: "bold"}}>Berapa hari minimal sewa mobil lepas kunci?</p>,
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: <p style={{fontWeight: "bold"}}>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>,
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus. `,
            },
            {
                title: <p style={{fontWeight: "bold"}}>Apakah Ada biaya antar-jemput?</p>,
                content: <p>Tidack, biaya antar jemput semuanya ditanggung oleh penyewa</p>,
            },
            {
                title: <p style={{fontWeight: "bold"}}>Bagaimana jika terjadi kecelakaan</p>,
                content: <p>Kalo gak kerumah sakit paling mati</p>,
            },
        ],
    };

    const styles = {
        bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "black",
        rowTitlePaddingBottom: "20px",
        rowTitleTextSize: "15px",
        rowContentPaddingBottom: '10px',
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        animate: true,
        arrowIcon: <img src={arrowDown} alt="" />,
        tabFocus: true
    };


    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // biar bisa animasi muncul dan menghilang
        threshold: 0.9 // proporsi tampilan gambar di viewport untuk memicu animasi
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
            className={"faq-wrapper" + (isOpen ? " blur" : "")} id="faq">
            <div className="faq-container">
                <div className="faq-title">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </motion.div>
                </div>
                <div className="faq-table">
                <Faq
                data={data}
                styles={styles}
                config={config}
                />
                </div>
            </div>
        </div>
    )
}

export default FaqSections