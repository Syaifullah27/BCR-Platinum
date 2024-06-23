import "./secondSection.css"
import { dataServices } from "../../Utils/DumyData";
// eslint-disable-next-line react/prop-types
const SecondSection = ({ isOpen }) => {
    

    return (
        <div className={`second-section-wrapper ${isOpen ? 'blur' : ''}`} id="services">
            <div className="second-section-container">
                <div className="left-second-section w-full flex flex-col items-center">
                    <img src="./images/img_service.png" alt="" />
                </div>
                <div className="right-second-section">
                    <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    {
                        dataServices.map((item) => {
                            return (
                                <div className="right-second-section-item" key={item.id}>
                                    <img src="./images/checked.png" alt="" />
                                    <p>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SecondSection