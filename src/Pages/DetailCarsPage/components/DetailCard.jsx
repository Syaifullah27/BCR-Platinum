import axios from "axios"
import ResultCarsTable from "../../../Sections/ResultCarsTable"
// import { useState } from "react"
import { useEffect } from "react"
import { exclude, garansi, include, } from "../../../Utils/DumyData"
import "./detailCard.css"
import { formatKategoryCars, formatRupiah } from "../../../Utils/FormatDatas"
// import { DateRangePicker } from "rsuite"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DetailCar } from "../../../Store/dataDetailCar"
// import { DataFaktur } from "../../../Store/Faktur"
// import { TglSewa } from "../../../Store/tanggalSewa"
import InputDateRange from "../../Test/dateRange"
// import { useState } from "react"
// eslint-disable-next-line react/prop-types
const DetailCard = ({isOpen, id}) => {
    const navigate = useNavigate()
    // const [detailCars, setDetailCars] = useState({})
    const { detailCars, setDetailCars } = useContext(DetailCar)
    // const { nameCar ,setNameCar} = useContext(DataFaktur)
    // const { tglSewa, setTglSewa } = useContext(TglSewa)

    const getDetailCars = () => {
        axios.get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
        .then((res) => {
            setDetailCars(res.data)
            localStorage.setItem('nameCar', (res.data.name))
            localStorage.setItem('categoryCar', (res.data.category))
            localStorage.setItem('priceCar', (res.data.price))
            localStorage.setItem('idCar', (res.data.id))
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        getDetailCars()
    }, [])


    const tglAwal = localStorage.getItem('startDate')
    const tglAkhir = localStorage.getItem('endDate')
    console.log(tglAwal, tglAkhir);


    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const handleSubmit = () => {
        if(detailCars.status === true){
            return alert("Mobil Tidak Tersedia")
        } else {
            navigate(`/pilih-metode/:${detailCars.id}`)
            handleToTop()
        }
    }

const handleBack = () => {
    navigate(-1)
}

    return (
        <div className={`${isOpen ? 'blur' : ''}`}>
            <div className="detail-card-wrapper">
                <div className="detail-card-container">
                <img className="font-semibold absolute z-50 top-28 left-40 cursor-pointer" src="../../images/panahKiri.png" 
            onClick={handleBack}/>
                    <ResultCarsTable isOpen={isOpen} btn={false} canModify={false} detailName={detailCars.name} detailCapacity={detailCars.category} detailPrice={formatRupiah(detailCars.price)} detailStatus={detailCars.status}/>
                    <div className="detail-card">
                        <div className="left-detail">
                            <h2 className="font-semibold">Tentang Paket</h2>
                            <div className="include-text">
                            <h3 className="font-semibold">Include</h3>
                                {include.map((data) => {
                                    return (
                                        <ul key={data}>
                                            <li>{data}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className="exclude-text">
                            <h3 className="font-semibold">Exclude</h3>
                                {exclude.map((data) => {
                                    return (
                                        <ul key={data}>
                                            <li>{data}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className="garansi-text">
                                <h3 className="font-semibold">Refund, Reschedule, Overtime</h3>
                                {garansi.map((data) => {
                                    return (
                                        <ul key={data}>
                                            <li>{data}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="right-detail">
                            <div className="right-detail-card">
                                <img src={detailCars.image ? detailCars.image : "./../images/noImage.jpg"} />
                                <h3 className="font-semibold text-lg">{detailCars.name ? detailCars.name : "Mobil"}</h3>
                                <div className="kategory">
                                    <img src="./../images/jmlOrg.png" alt="" />
                                    <p>{formatKategoryCars(detailCars.category) ? formatKategoryCars(detailCars.category) : "-"}</p>
                                </div>
                                <div className="flex flex-col gap-2 pt-4 ">
                                    <label className="text-sm  text-[#8A8A8A]">Tentukan lama sewa mobil (max 7 hari)</label>
                                    <InputDateRange />
                                </div>
                                <div className="total">
                                    <p className="font-semibold text-xl">Total</p>
                                    <h3 className="font-semibold text-lg"> {formatRupiah(detailCars.price)}</h3>
                                </div>
                                <div className="flex  w-full  pt-2">
                                    <button 
                                    onClick={handleSubmit}
                                    className={`w-full font-semibold  bg-[#5CB85F] text-white p-2 rounded-md `}>lanjutkan Pembayaran</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default DetailCard