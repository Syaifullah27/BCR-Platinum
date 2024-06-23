import { useState } from "react"
import { useParams } from "react-router-dom"

import './detailcars.css'
import { FooterDetail } from "./components/FooterDetail"
import { NavbarDetail } from "./components/NavbarDetail"
import DetailCard from "./components/DetailCard"


const DetailCars = () => {
    const params = useParams()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div>
            <NavbarDetail isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen}/>
            <DetailCard isOpen={isMenuOpen} id={params.id}/>
            <FooterDetail isOpen={isMenuOpen}/>
        </div>
    )
}

export default DetailCars



