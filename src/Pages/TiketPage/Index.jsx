import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer"
import { useNavigate } from "react-router-dom";
import { MyPDF } from "../Test";

const TiketPage = () => {
    const navigate = useNavigate()

    // eslint-disable-next-line no-unused-vars
    const [isFocused, setIsFocused] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleBack = () => {
        navigate(-1)

        // localStorage.removeItem('endTime')
    }
    const orderId = localStorage.getItem('orderId')


    return (
        <div>
            <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} />
            <div className="bg-[#F1F3FF] h-56 max-sm:h-64">
                <div className={`pt-32 flex justify-between  max-w-[970px] m-auto max-sm:flex-col max-sm:gap-5 max-sm:pb-3 max-sm:px-4 ${isMenuOpen ? 'blur' : ''}`}>
                    <div className="flex gap-5 max-sm:gap-3">
                        <img src="../../images/panahKiri.png" alt="arrow"
                            onClick={handleBack} className="cursor-pointer w-8 h-8" />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-xl">Tiket</h1>
                            <p className="font-medium text-sm">Order ID : {orderId}</p>
                        </div>

                    </div>
                    <div className="flex gap-5 justify-center items-center max-sm:gap-3">
                        <div className="flex gap-2">
                            <p className="bg-[#0D28A6] text-center flex justify-center items-center text-[#f5f5f5] p-2 w-6 h-6 rounded-full  max-sm:w-5 max-sm:h-5 max-sm:text-xs">1</p>
                            <p className="font-medium max-sm:text-xs mt-[2px]">Pilih Metode</p>
                        </div>
                        <span className="h-[2px] w-12 bg-[#0D28A6] max-sm:h-[1px] max-sm:w-9 max-sm:mt-[2px]"></span>
                        <div className="flex gap-2">
                            <p className="bg-[#0D28A6] text-center flex justify-center items-center text-[#f5f5f5] p-2 w-6 h-6 rounded-full  max-sm:w-5 max-sm:h-5 max-sm:text-xs">2</p>
                            <p className="font-medium max-sm:text-xs mt-[2px]">Bayar</p>
                        </div>
                        <span className="h-[2px] w-12 bg-[#0D28A6] max-sm:h-[1px] max-sm:w-9 max-sm:mt-[2px]"></span>
                        <div className="flex gap-2">
                            <p className="bg-[#0D28A6] text-center flex justify-center items-center text-[#f5f5f5] p-2 w-6 h-6 rounded-full  max-sm:w-5 max-sm:h-5 max-sm:text-xs">3</p>
                            <p className="font-medium max-sm:text-xs mt-[2px]">Tiket</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`max-w-[970px] m-auto mt-10 flex flex-col justify-center items-center gap-4 ${isMenuOpen ? 'blur' : ''}`}>
                <img src="../../images/success.png" alt="" width={60} className="max-sm:w-12" />
                <h1 className="text-2xl font-semibold max-sm:text-xl">Pembayaran Berhasil</h1>
                <p className=" text-[#8A8A8A] max-sm:text-sm">Tunjukan invoice ini ke petugas BCR dititk temu.</p>
                <MyPDF />
            </div>

            <Footer isOpen={isMenuOpen} isFocused={isFocused} />


        </div>
    )
}

export default TiketPage