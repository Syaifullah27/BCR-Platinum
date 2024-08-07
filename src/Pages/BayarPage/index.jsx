import { useState } from "react"
import Navbar from "../../Components/Navbar"
import { useNavigate } from "react-router-dom"
import HitungMundur from "../Test/hitungMundur"
import InputCopyValue from "../Test/inputCopyValue"
import { formatRupiah } from "../../Utils/FormatDatas"
import { useRef } from "react"
import Footer from "../../Components/Footer"
import HitungMundur10mnt from "../Test/HitungMundur10mnt"
import axios from "axios"

const BayarPage = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
        localStorage.removeItem('endTime')
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const [metodeBank, setMetodeBank] = useState('ATM')

    const handleMetodeBank = (event) => {
        setMetodeBank(event.target.value)
    }


    const inputRef = useRef(null)
    const [image, setImage] = useState("")
    const [img, setImg] = useState(null)
    // console.log(image);
    // const [nameImg, setNameImg] = useState("")

    const handleImgClik = () => {
        inputRef.current.click()
    }

    const handleImgChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        setImg(e.target.files[0])
        setImage(URL.createObjectURL(file))
        // setNameImg(e.target.files[0].name)
        // console.log(e.target.files[0].name);
    }

    // const handleCancelImg = () => {
    //     setImage("")
    //     // setNameImg("")
    // }





    const InstruksiPembayaran = () => {
        if (metodeBank === 'ATM') {
            return <div>
                <ul className="text-base font-medium flex  flex-col gap-2 text-[#8A8A8A]">
                    <li>1. Masukan kartu ATM ,lalu PIN</li>
                    <li>2. Pilih menu &#34; Transaksi Lainnya&#34;  - &#34;Transfer&#34; - &#34; Ke rek {namaBank} Virtual Account&#34;</li>
                    <li>3. Masukan nomor {namaBank} Virtual Account 70020 + OrderID <br /> Contoh : <br /> No. Peserta: 12345678, maka ditulis 7002012345678</li>
                    <li>4. Layar ATM akan menmpilkan konfirmasi, ikuti instruksi untuk meyelesaikan transaksi</li>
                    <li>5. Ambil dan simpanlah bukti transaksi tersebut   </li>
                </ul>
            </div>
        } else if (metodeBank === 'M') {
            return <div>
                <ul className="text-base font-medium flex  flex-col gap-2 text-[#8A8A8A]">
                    <li>1. Masukan kartu ATM ,lalu PIN</li>
                    <li>2. Pilih menu &#34; Transaksi Lainnya&#34;  - &#34;Transfer&#34; - &#34; Ke rek {namaBank} Virtual Account&#34;</li>
                    <li>3. Masukan nomor {namaBank} Virtual Account 70020 + OrderID <br /> Contoh : <br /> No. Peserta: 12345678, maka ditulis 7002012345678</li>
                    <li>4. Layar ATM akan menmpilkan konfirmasi, ikuti instruksi untuk meyelesaikan transaksi</li>
                    <li>5. Ambil dan simpanlah bukti transaksi tersebut   </li>
                </ul>
            </div>
        } else if (metodeBank === 'Klik') {
            return <div>
                <ul className="text-base font-medium flex  flex-col gap-2 text-[#8A8A8A]">
                    <li>1. Masukan kartu ATM ,lalu PIN</li>
                    <li>2. Pilih menu &#34; Transaksi Lainnya&#34;  - &#34;Transfer&#34; - &#34; Ke rek {namaBank} Virtual Account&#34;</li>
                    <li>3. Masukan nomor {namaBank} Virtual Account 70020 + OrderID <br /> Contoh : <br /> No. Peserta: 12345678, maka ditulis 7002012345678</li>
                    <li>4. Layar ATM akan menmpilkan konfirmasi, ikuti instruksi untuk meyelesaikan transaksi</li>
                    <li>5. Ambil dan simpanlah bukti transaksi tersebut   </li>
                </ul>
            </div>
        } else if (metodeBank === 'Internet') {
            return <div>
                <ul className="text-base font-medium flex  flex-col gap-2 text-[#8A8A8A]">
                    <li>1. Masukan kartu ATM ,lalu PIN</li>
                    <li>2. Pilih menu &#34; Transaksi Lainnya&#34;  - &#34;Transfer&#34; - &#34; Ke rek {namaBank} Virtual Account&#34;</li>
                    <li>3. Masukan nomor {namaBank} Virtual Account 70020 + OrderID <br /> Contoh : <br /> No. Peserta: 12345678, maka ditulis 7002012345678</li>
                    <li>4. Layar ATM akan menmpilkan konfirmasi, ikuti instruksi untuk meyelesaikan transaksi</li>
                    <li>5. Ambil dan simpanlah bukti transaksi tersebut   </li>
                </ul>
            </div>
        }
    }

    // eslint-disable-next-line no-unused-vars
    const [isFocused, setIsFocused] = useState(false);

    const namaBank = localStorage.getItem('namaBank')
    const hargaMobil = localStorage.getItem('priceCar')
    const orderId = localStorage.getItem('orderId')


    const handleImgBank = () => {
        if (namaBank === 'BCA') {
            return <img src="https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png" alt="" width={80} height={80} />
        } else if (namaBank === 'BNI') {
            return <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/120px-BNI_logo.svg.png?20240305030303" alt="" width={70} height={70} className="ml-2" />
        } else if (namaBank === 'Mandiri') {
            return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/120px-Bank_Mandiri_logo_2016.svg.png" alt="" width={80} height={80} className="ml-[9px]" />
        }
    }

    const [konfirmasi, setKonfirmasi] = useState(false)

    const handleKonfirmasi = () => {
        const yakinNich = confirm('Apakah anda yakin ingin melanjutkan transaksi ?')
        if (yakinNich) {
            setKonfirmasi(true)
        }
    }



    const handleRefresh = () => {
        navigate('/tiket');
        window.location.reload();
    };


    // const idCar = localStorage.getItem('idCar')
    const idOrderCar = localStorage.getItem('orderId')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("slip", img)
    
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
            }
        }
    
    if(img === null) {
        alert("Upload bukti transaksi terlebih dahulu")
    } else {
        try {
            const res = await axios.put(`https://api-car-rental.binaracademy.org/customer/order/${idOrderCar}/slip`, 
                formData, 
                config
            )
            console.log(res);
            localStorage.setItem('slip', res.data.slip)
            handleRefresh()
            handleToTop()
        } catch (error) {
            console.log(error.response.data.message);
            setMessage(error?.response?.data?.message)
        }
    }

    }



    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div>
            <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} />
            <div className="bg-[#F1F3FF] h-56 max-sm:h-64">
                <div className={`pt-32 flex justify-between  max-w-[970px] m-auto max-sm:flex-col max-sm:gap-5 max-sm:pb-3 max-sm:px-4 ${isMenuOpen ? 'blur' : ''}`}>
                    <div className="flex gap-5 max-sm:gap-3">
                        <img src="../../images/panahKiri.png" alt="arrow"
                            onClick={handleBack} className="cursor-pointer w-8 h-8" />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-xl">Pembayaran</h1>
                            <p className="font-medium text-sm">Order ID : {orderId}</p>
                        </div>

                        {message ? <div className="relative flex justify-center items-center">
                                <h1 className=" fixed top-1/4 left-1/2 translate-x-[-50%]  border-2 border-[#f5f5f5] px-4 py-2 rounded-md bg-red-500 text-[#f5f5f5] z-50 font-medium">{message}</h1>
                            </div> : ""}

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
                            <p className="border-[1px] border-[#0D28A6] text-center flex justify-center items-center  p-2 w-6 h-6 rounded-full  max-sm:w-5 max-sm:h-5 max-sm:text-xs">3</p>
                            <p className="font-medium max-sm:text-xs mt-[2px]">Tiket</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`max-w-[1000px] flex gap-7 m-auto pt-10 max-sm:flex-col max-sm:px-4 ${isMenuOpen ? 'blur' : ''}`}>
                <div className="w-[55%] flex flex-col gap-7 max-sm:w-full">
                    <div className="border rounded-xl shadow-lg">
                        <HitungMundur />
                    </div>
                    <div className="border flex flex-col rounded-xl gap-2 shadow-xl p-5">
                        <h1 className="font-medium text-lg">Lakukan Transfer Ke</h1>
                        <div className="flex items-center gap-5">
                            {handleImgBank()}
                            <div className="flex flex-col justify-center pt-3">
                                <p className="font-medium">{namaBank} Transfer</p>
                                <p className="text-sm">a.n Binar Car Rental</p>
                            </div>
                        </div>
                        <div className="flex flex-col pt-2 pb-2">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <lable className=" text-[#3C3C3C]">Nomor Rekening</lable>
                                    <InputCopyValue valueNya={"54104257877"} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className=" text-[#3C3C3C]">Total Bayar</label>
                                    <InputCopyValue valueNya={formatRupiah(hargaMobil)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border flex flex-col rounded-xl gap-2 shadow-xl p-5 pb-10">
                        <h1 className="font-medium text-lg">Instruksi pembayaran</h1>
                        <div className="flex justify-between pt-2 max-sm:gap-3 max-sm:justify-center max-sm:items-center">
                            <div className="relative flex flex-col">
                                <label className={`bank-option cursor-pointer ${metodeBank === "ATM" ? "font-semibold text-lg" : "font-semibold"}max-sm:text-sm max-sm:text-center`}>
                                    <input
                                        type="radio"
                                        name="metode"
                                        value={"ATM"}
                                        onChange={handleMetodeBank}
                                        checked={metodeBank === "ATM"} />
                                    ATM {namaBank}
                                </label>
                                <span className={`absolute bottom-0 h-[1px] w-full ${metodeBank === "ATM" ? "bg-[#5CB85F]" : " bg-gray-300"}`}></span>
                            </div>
                            <div className="relative flex flex-col">
                                <label className={`bank-option cursor-pointer ${metodeBank === "M" ? "font-semibold text-lg" : "font-semibold"}max-sm:text-sm max-sm:text-center`}>
                                    <input
                                        type="radio"
                                        name="metode"
                                        value={"M"}
                                        onChange={handleMetodeBank}
                                        checked={metodeBank === "M"} />
                                    M-{namaBank}
                                </label>
                                <span className={`absolute bottom-0 h-[1px] w-full ${metodeBank === "M" ? "bg-[#5CB85F]" : " bg-gray-300"} `}></span>
                            </div>
                            <div className="relative flex flex-col">
                                <label className={`bank-option  cursor-pointer ${metodeBank === "Klik" ? "font-semibold text-lg" : "font-semibold"}max-sm:text-sm max-sm:text-center`}>
                                    <input
                                        type="radio"
                                        name="metode"
                                        value={"Klik"}
                                        onChange={handleMetodeBank}
                                        checked={metodeBank === "Klik"} />
                                    {namaBank} Klik
                                </label>
                                <span className={`absolute bottom-0 h-[1px] w-full ${metodeBank === "Klik" ? "bg-[#5CB85F]" : " bg-gray-300"}`}></span>
                            </div>
                            <div className="relative flex flex-col">
                                <label className={`bank-option cursor-pointer ${metodeBank === "Internet" ? "font-semibold text-lg" : "font-semibold"}max-sm:text-sm max-sm:text-center`}>
                                    <input
                                        type="radio"
                                        name="metode"
                                        value={"Internet"}
                                        onChange={handleMetodeBank}
                                        checked={metodeBank === "Internet"}
                                    />
                                    Internet Banking
                                </label>
                                <span className={`absolute bottom-0 h-[1px] w-full ${metodeBank === "Internet" ? "bg-[#5CB85F]" : " bg-gray-300"}`}></span>
                            </div>
                        </div>
                        <div>
                            {InstruksiPembayaran()}
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col border flex-1 rounded-xl shadow-xl p-7">
                    {
                        konfirmasi ? <div className="flex justify-between">
                            <h1 className="text-lg font-medium">Konfirmasi pembayaran</h1>
                            <HitungMundur10mnt />
                        </div>
                            : <div>
                                <h1 className="text-sm font-medium">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</h1>
                            </div>
                    }
                    {
                        konfirmasi ? <div>
                            <p className="text-sm pt-2">Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                            <h2 className="pt-5 font-medium">Upload bukti pembayaran</h2>
                            <p className="text-sm pt-2">Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                                <div
                                    onClick={handleImgClik}
                                    className="w-full h-[200px] bg-[#f5f5f5] flex justify-center items-center cursor-pointer">
                                    {image ? <img src={image} alt="" style={{ height: '200px' }} /> : <img src="../../images/fi_image.png" alt="" />}
                                    <input
                                        type="file"
                                        // name='gambar'
                                        // value='gambar'
                                        ref={inputRef} onChange={handleImgChange} style={{ display: 'none' }} />
                                </div>
                            </div>
                        </div> : null
                    }
                    {
                        konfirmasi ? <div
                            onClick={handleSubmit}
                            className="cursor-pointer text-center w-full mt-10 bg-[#5CB85F] text-[#f5f5f5] p-3 rounded-xl hover:bg-[#4d9b4f]">
                            Upload
                        </div>
                            :
                            <div
                                onClick={handleKonfirmasi}
                                className="cursor-pointer text-center w-full mt-10 bg-[#5CB85F] text-[#f5f5f5] p-3 rounded-xl hover:bg-[#4d9b4f]">Konfirmasi Pembayaran</div>
                    }
                </div>
            </div>
            <Footer isOpen={isMenuOpen} isFocused={isFocused} />
        </div>
    )
}

export default BayarPage