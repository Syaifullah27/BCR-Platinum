import { useState } from "react"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import { useContext } from "react"
import { DetailCar } from "../../Store/dataDetailCar"
// import { TglSewa } from "../../Store/tanggalSewa"
import { useNavigate } from "react-router-dom"
import "./payment.css"
import Faq from "react-faq-component";
import { formatRupiah } from "../../Utils/FormatDatas"
import axios from "axios"
import { useParams } from "react-router-dom"
// import { unstable_HistoryRouter } from "react-router-dom"
// import { Link } from "react-router-dom"


const PaymentPage = () => {
    const navigate = useNavigate()
    const idCar = useParams()
    console.log(idCar.id)

    const carId = localStorage.getItem('idCar')

    const handleBack = () => {
        navigate(-1)
    }

    // eslint-disable-next-line no-unused-vars
    const { detailCars, setDetailCars } = useContext(DetailCar)
    // const { tglSewa, setTglSewa } = useContext(TglSewa)

    const nameCar = localStorage.getItem('nameCar')
    const categoryCar = localStorage.getItem('categoryCar')
    const priceCar = localStorage.getItem('priceCar')
    // console.log(nameCar, categoryCar, priceCar);

    // console.log(tglSewa.date[0]);

    // const tglAwal = tglSewa.date[0]
    // const tglAkhir = tglSewa.date[1]


    const handleCategory = () => {
        if (categoryCar === "small") {
            return '2 - 4 orang'
        } else if (categoryCar === "medium") {
            return '4 - 6 orang'
        } else if (categoryCar === "large") {
            return '6 - 8 orang'
        } else if (categoryCar === "Besar") {
            return '6 - 8 orang'
        } else {
            return '-'
        }
    }

    const [selectedBank, setSelectedBank] = useState('');
    localStorage.setItem('namaBank', selectedBank)

    const handleBankChange = (event) => {
        setSelectedBank(event.target.value);
    };


    const data = {
        rows: [
            {
                title: <p className="font-semibold">Total</p>,
                content: <div hidden={selectedBank === ""}>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold">Harga</h1>
                        <ul className="flex justify-between items-center">
                            <li className="text-[13px] ml-1">{`Sewa Mobil ${formatRupiah(priceCar)} x 7 hari`}</li>
                            <li className="font-semibold text-sm">{formatRupiah(priceCar)}</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                        <h1 className="font-semibold">Biaya Lainnya</h1>
                        <ul className="flex justify-between items-center">
                            <li className="text-[13px] ml-1">Pajak</li>
                            <li className=" text-[#25ac25] text-sm">Termasuk</li>
                        </ul>
                        <ul className="flex justify-between items-center">
                            <li className="text-[13px] ml-1">Biaya makan supir</li>
                            <li className=" text-[#25ac25] text-sm">Termasuk</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                        <h1 className="font-semibold">Belum Termasuk</h1>
                        <ul className="flex justify-between items-center">
                            <li className="text-[13px] ml-1">Bensin</li>
                        </ul>
                        <ul className="flex justify-between items-center">
                            <li className="text-[13px] ml-1">Tol dan parkir</li>
                        </ul>
                    </div>
                </div>
            }
        ]
    }

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
        arrowIcon: <img src="../../public/images/down.png" alt="bawah" hidden={selectedBank === ""} />,
        tabFocus: true
    };




    const tglAwal = localStorage.getItem('startDate')
    const tglAkhir = localStorage.getItem('endDate')



    const [randomNumber, setRandomNumber] = useState('86754231');

    const generateRandomNumber = () => {
        const number = Math.floor(10000000 + Math.random() * 90000000).toString();
        setRandomNumber(number);
    }
    localStorage.setItem('orderId', randomNumber)

    const handleNavigate = () => {
        handleCreateNewOrder()
        navigate('/bayar')
        handleToTop()
    }


// create car order
    const handleCreateNewOrder = async () => {
        const config = {
            headers : {
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
            }
        }
        const payload = {
            start_rent_at: tglAwal,
            finish_rent_at: tglAkhir,
            car_id: parseInt(carId)
        }
        try {
            const response = await axios.post('https://api-car-rental.binaracademy.org/customer/order', payload, config)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    // console.log(randomNumber);


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // eslint-disable-next-line no-unused-vars
    const [isFocused, setIsFocused] = useState(false);


    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} />
            <div className="bg-[#F1F3FF] h-60 max-sm:h-72">
                <div className={`pt-32 flex justify-between  max-w-[970px] m-auto max-sm:flex-col max-sm:gap-5 max-sm:pb-3 max-sm:px-4 ${isMenuOpen ? 'blur' : ''}`}>
                    <div className="flex gap-5 max-sm:gap-3">
                        <img src="../../images/panahKiri.png" alt="arrow"
                            onClick={handleBack} className="cursor-pointer w-8 h-8" />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-xl">Pembayaran</h1>
                            {/* <p className="font-medium text-sm">Order ID : {orderId}</p> */}
                        </div>

                    </div>
                    <div className="flex gap-5 justify-center items-center max-sm:gap-3">
                        <div className="flex gap-2">
                            <p className="bg-[#0D28A6] text-center flex justify-center items-center text-[#f5f5f5] p-2 w-6 h-6 rounded-full  max-sm:w-5 max-sm:h-5 max-sm:text-xs">1</p>
                            <p className="font-medium max-sm:text-xs mt-[2px]">Pilih Metode</p>
                        </div>
                        <span className="h-[2px] w-12 bg-[#0D28A6] max-sm:h-[1px] max-sm:w-9 max-sm:mt-[2px]"></span>
                        <div className="flex gap-2">
                            <p className="border-[1px] border-[#0D28A6] text-center flex justify-center items-center p-2 w-6 h-6 rounded-full  max-sm:w-5 max-sm:h-5 max-sm:text-xs">2</p>
                            <p className="font-medium max-sm:text-xs mt-[2px]">Bayar</p>
                        </div>
                        <span className="h-[2px] w-12 bg-[#0D28A6] max-sm:h-[1px] max-sm:w-9 max-sm:mt-[2px]"></span>
                        <div className="flex gap-2">
                            <p className="border-[1px] border-[#0D28A6] text-center flex justify-center items-center  p-2 w-6 h-6 rounded-full  max-sm:w-5 max-sm:h-5 max-sm:text-xs">3</p>
                            <p className="font-medium max-sm:text-xs mt-[2px]">Tiket</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`max-sm:px-4 ${isMenuOpen ? 'blur' : ''}`}>
                <div className="max-w-[1000px] m-auto  p-10 relative bg-[#FFFFFF] shadow-md rounded-xl -top-16 max-sm:max-w-max">
                    <h1 className="text-xl font-semibold max-sm:text-center">Detail Pesananmu</h1>
                    <div className="flex justify-between pt-4 max-sm:flex-col max-sm:gap-3 max-sm:max-w-max">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-medium">Nama/Tipe Mobil</h2>
                            <p className="text-[#8A8A8A] text-sm">{nameCar}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-medium">kategori</h2>
                            <p className="text-[#8A8A8A] text-sm">{handleCategory()}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-medium">Tanggal mulai sewa</h2>
                            <p className="text-[#8A8A8A] text-sm"> {tglAwal}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-medium">Tanggal akhir sewa</h2>
                            <p className="text-[#8A8A8A] text-sm">{tglAkhir}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`max-w-[1000px] flex m-auto gap-7 pb-10 max-sm:flex-col max-sm:px-4 ${isMenuOpen ? 'blur' : ''}`}>
                <div className=" flex flex-col flex-2 gap-5 h-96 bg-[#FFFFFF] p-10  shadow-xl rounded-xl border max-sm:pb-96">
                    <div>
                        <h1 className="text-xl font-semibold">Plih Bank Transfer</h1>
                        <p className="text-[#333333] text-sm">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                    </div>
                    <form className="flex gap-3 flex-col ">
                        <label className="cursor-pointer relative bank-option flex gap-3 p-2 border-b-2 border-[#EEEEEE] w-full text-md font-medium">
                            <div>
                                <img src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png" alt="" width={80} height={80} />
                                <input
                                    type="radio"
                                    name="bank"
                                    value="BCA"
                                    onClick={generateRandomNumber}
                                    checked={selectedBank === 'BCA'}
                                    onChange={handleBankChange} />
                            </div>
                            {selectedBank === 'BCA' && (
                                <img src="../../images/checked (3).png" alt="" className="absolute right-5" />
                            )}
                            BCA Transfer
                        </label>
                        <label className="cursor-pointer relative bank-option flex gap-3 p-2 border-b-2 border-[#EEEEEE] w-full text-md font-medium">
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/120px-BNI_logo.svg.png?20240305030303" alt="" width={70} height={70} className="ml-2" />
                                <input
                                    type="radio"
                                    name="bank"
                                    value="BNI"
                                    onClick={generateRandomNumber}
                                    checked={selectedBank === 'BNI'}
                                    onChange={handleBankChange} />
                                {selectedBank === 'BNI' && (
                                    <img src="../../images/checked (3).png" alt="" className="absolute right-5 bottom-4" />
                                )}
                            </div>
                            BNI Transfer
                        </label>
                        <label className="cursor-pointer relative bank-option flex gap-3 p-2  border-b-2 border-[#EEEEEE] w-full text-md font-medium">
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/120px-Bank_Mandiri_logo_2016.svg.png" alt="" width={80} height={80} className="ml-[9px]" />
                                <input
                                    type="radio"
                                    name="bank"
                                    value="Mandiri"
                                    onClick={generateRandomNumber}
                                    checked={selectedBank === 'Mandiri'}
                                    onChange={handleBankChange} />
                                {selectedBank === 'Mandiri' && (
                                    <img src="../../images/checked (3).png" alt="" className="absolute right-5 bottom-4" />
                                )}
                            </div>
                            Mandiri Transfer
                        </label>
                    </form>
                </div>
                <div className="flex flex-col flex-1 gap-5 bg-[#FFFFFF] p-6  shadow-xl rounded-xl border">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold">{nameCar}</h1>
                        <div className="flex gap-2">
                            <img src="./../images/jmlOrg.png" alt="" width={20} height={10} />
                            <p className="text-[#8A8A8A] text-sm font-medium">{handleCategory()}</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-5">
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                        <div className="flex flex-col gap-3 mt-10">
                            <div className="flex justify-between text-lg font-semibold">
                                <h1>Total </h1>
                                <p>{formatRupiah(priceCar)}</p>
                            </div>
                            <div className="w-full">
                                <button
                                    onClick={handleNavigate}
                                    disabled={selectedBank === ''}
                                    className={`relative max-sm:right-4 w-full font-semibold   text-white p-2 rounded-md bg-[#5CB85F] ${selectedBank === '' ? 'bg-[#5cb85f4d]' : 'bg-[#5CB85F]'}`}>Bayar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer isOpen={isMenuOpen} isFocused={isFocused} />
        </div>
    )
}

export default PaymentPage