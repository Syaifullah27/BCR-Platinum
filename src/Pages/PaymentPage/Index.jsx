import { useState } from "react"
import Navbar from "../../Components/Navbar"


const PaymentPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div>
            <Navbar  isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen}/>
            <h1>Transaksi Page</h1>
        </div>
    )
}

export default PaymentPage