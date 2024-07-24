import { useState } from 'react'
import "../../../src/App.css"
import MainSection from '../../Sections/MainSection'
import Navbar from '../../Components/Navbar'
import SecondSection from '../../Sections/SecondSection'
import WhyUsSection from '../../Sections/whyUsSection'
import TestimoniSection from '../../Sections/testimoniSection'
import Banner from '../../Sections/Banner'
import FaqSections from '../../Sections/Faq'
import Footer from '../../Components/Footer'

// eslint-disable-next-line react/prop-types
const HomePage = ({ inMenu }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <div className='w-full z-50 overflow-x-hidden'>
            <Navbar boxShadow={true}
            isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} inMenu={inMenu} logoBtn={true}/>
            <MainSection isOpen={isMenuOpen} btn={true} ptMainSection={true}/>
            <SecondSection isOpen={isMenuOpen} />
            <WhyUsSection isOpen={isMenuOpen} />
            <TestimoniSection isOpen={isMenuOpen} />
            <Banner isOpen={isMenuOpen} />
            <FaqSections isOpen={isMenuOpen} />
            <Footer isOpen={isMenuOpen} />
        </div>
    )
}

export default HomePage