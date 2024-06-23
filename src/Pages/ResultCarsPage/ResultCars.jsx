import { useState } from "react"
import Navbar from "../../Components/Navbar"
import ResultCarsTable from "../../Sections/ResultCarsTable"
import Footer from "../../Components/Footer"
import CardCars from "../../Sections/CardCars"
import { InputContext } from "../../Store/inputContext"
import { useContext } from "react"

const ResultCars = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };


    const { nameCar, capacityCar, priceCar, statusCar, setNameCar, setCapacityCar, setPriceCar, setStatusCar } = useContext(InputContext);



    return (
        <div>
            <Navbar isFocused={isFocused}
            isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} logoBtn={false}/>

            <ResultCarsTable 
            handleInputBlur={handleInputBlur}
            handleInputFocus={handleInputFocus}
            isOpen={isMenuOpen} 
            btn={true} 
            canModify={true} 
            nameCar={nameCar} capacityCar={capacityCar} priceCar={priceCar} statusCar={statusCar}
            setNameCar={setNameCar} setCapacityCar={setCapacityCar} setPriceCar={setPriceCar} setStatusCar={setStatusCar}/>

            <CardCars isFocused={isFocused}
            nameCar={nameCar} capacityCar={capacityCar} priceCar={priceCar} statusCar={statusCar}
            isOpen={isMenuOpen}/>
            <div style={{marginTop: "120px"}}>
            <Footer isOpen={isMenuOpen} isFocused={isFocused}/>
            </div>
        </div>
    )
}

export default ResultCars