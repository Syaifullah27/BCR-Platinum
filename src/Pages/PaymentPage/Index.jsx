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


const PaymentPage = () => {
    const navigate = useNavigate()

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
        } else {
            return '-'
        }
    }

    const [selectedBank, setSelectedBank] = useState('');

    const handleBankChange = (event) => {
        setSelectedBank(event.target.value);
    };


    const data = {
        rows: [
            {
                title: <p className="font-semibold">Total</p>,
                content : <div hidden={selectedBank === ""}>
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
        arrowIcon: <img src="../../public/images/down.png" alt="bawah" hidden={selectedBank === ""}/>,
        tabFocus: true
    };




    const tglAwal = localStorage.getItem('startDate')
    const tglAkhir = localStorage.getItem('endDate')






    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // eslint-disable-next-line no-unused-vars
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div>
            <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} />
            <div className="bg-[#F1F3FF] h-72">
                <div className="pt-32 flex justify-between  max-w-[970px] m-auto">
                    <div className="flex gap-5 ">
                        <img src="../../images/panahKiri.png" alt="arrow"
                            onClick={() => navigate(-1)} className="cursor-pointer" />
                        <h1 className="font-semibold text-xl">Pembayaran</h1>
                    </div>
                    <div className="flex gap-5 justify-center items-center">
                        <div className="flex gap-2">
                            <p className="bg-[#0D28A6] text-center flex justify-center items-center text-[#f5f5f5] p-2 w-6 h-6 rounded-full">1</p>
                            <p className="font-medium">Pilih Metode</p>
                        </div>
                        <span className="h-[2px] w-12 bg-[#0D28A6]"></span>
                        <div className="flex gap-2">
                            <p className="border border-[#0D28A6]  text-center flex justify-center items-center  p-2 w-6 h-6 rounded-full">2</p>
                            <p className="font-medium">Bayar</p>
                        </div>
                        <span className="h-[2px] w-12 bg-[#0D28A6]"></span>
                        <div className="flex gap-2">
                            <p className="border border-[#0D28A6]  text-center flex justify-center items-center  p-2 w-6 h-6 rounded-full">3</p>
                            <p className="font-medium">Tiket</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1000px] m-auto  p-10 relative bg-[#FFFFFF] shadow-md rounded-xl -top-16">
                <h1 className="text-xl font-semibold">Detail Pesananmu</h1>
                <div className="flex justify-between pt-4">
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
            <div className="max-w-[1000px] flex m-auto gap-7 pb-10">
                <div className=" flex flex-col flex-2 gap-5 h-96 bg-[#FFFFFF] p-10  shadow-xl rounded-xl">
                    <div>
                        <h1 className="text-xl font-semibold">Plih Bank Transfer</h1>
                        <p className="text-[#333333] text-sm">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                    </div>
                    <form className="flex gap-3 flex-col">
                        <label className="cursor-pointer relative bank-option flex gap-3 p-2 border-b-2 border-[#EEEEEE] w-full text-md font-medium">
                            <div>
                                <img src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png" alt=""  width={80} height={80} />
                                <input
                                    type="radio"
                                    name="bank"
                                    value="BCA"
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
                                    checked={selectedBank === 'BNI'}
                                    onChange={handleBankChange}/>
                                    {selectedBank === 'BNI' && (
                                        <img src="../../images/checked (3).png" alt="" className="absolute right-5 bottom-4" />
                                    )}
                            </div>
                            BNI Transfer
                        </label>
                        <label className="cursor-pointer relative bank-option flex gap-3 p-2  border-b-2 border-[#EEEEEE] w-full text-md font-medium">
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/120px-Bank_Mandiri_logo_2016.svg.png" alt="" width={80} height={80} className="ml-[9px]"/>
                                <input
                                    type="radio"
                                    name="bank"
                                    value="Mandiri"
                                    checked={selectedBank === 'Mandiri'}
                                    onChange={handleBankChange}/>
                                    {selectedBank === 'Mandiri' && (
                                        <img src="../../images/checked (3).png" alt="" className="absolute right-5 bottom-4" />
                                    )}
                            </div>
                            Mandiri Transfer
                        </label>
                    </form>
                </div>
                <div className="flex flex-col flex-1 gap-5 bg-[#FFFFFF] p-6  shadow-xl rounded-xl">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold">{nameCar}</h1>
                        <div className="flex gap-2">
                            <img src="./../images/jmlOrg.png" alt="" width={20} height={10}/>
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
                            <button 
                            disabled={selectedBank === ''}
                            className={`w-full font-semibold   text-white p-2 rounded-md bg-[#5CB85F] ${selectedBank === '' ? 'bg-[#5cb85f4d]' : 'bg-[#5CB85F]'}`}>Bayar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer isOpen={isMenuOpen} isFocused={isFocused} />
        </div>
    )
}

export default PaymentPage