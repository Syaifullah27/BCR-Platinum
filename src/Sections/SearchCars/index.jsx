import { useContext } from "react";
import "./searchCars.css"
import { InputContext } from "../../Store/inputContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCategory, setName, setPrice } from "../../redux/productSlice";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SearchCars = ({ handleInputFocus, handleInputBlur, isOpen }) => {
    const navigate = useNavigate();

    const { statusCar, setStatusCar } = useContext(InputContext);

    const dispatch = useDispatch();
    const { name, price, category } = useSelector((state) => state.product);


    // opsi sewa mobil
    const handleStatusCar = (event) => {
        setStatusCar(event.target.value);
    };



    const handleButtonClick = (event) => {
        event.preventDefault();
        navigate('/result-cars');
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    return (
        <div className={"search-cars-wrapper" + (isOpen ? " blur" : "") }>
            <div className="search-cars-container">
                <div className="search-cars">

                    <div className="search-input">
                        <label htmlFor="">Nama Mobil</label>
                        <input
                            className={`'text-sm placeholder:text-[#677380] bg-[#ffffff]' ${name ? 'hide-arrow' : ''} `}
                            type="text"
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            placeholder="Masukan Nama Mobil" />
                    </div>
                    <div className="search-input">
                        <label htmlFor="">kategori</label>
                        <select
                            defaultValue={'Masukan Kapasitas Mobil'}
                            value={category}
                            onChange={(e) => dispatch(setCategory(e.target.value))}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            className={`'p-[10px] text-sm placeholder:text-[#677380] bg-[#ffffff]' ${category ? 'hide-arrow' : ''} `} >
                            <option value="" >Masukan Kapasitas Mobil</option>
                            <option value={"small"}>2 - 4 orang</option>
                            <option value={"medium"}>4 - 6 orang</option>
                            <option value={"large"}>6 - 8 orang</option>
                        </select>
                    </div>

                    <div className="search-input">
                        <label htmlFor="">Harga</label>
                        <select
                            defaultValue={'Masukan Harga Sewa per Hari'}
                            value={price}
                            onChange={(e) => dispatch(setPrice(e.target.value))}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            className={`'text-sm placeholder:text-[#677380] bg-[#ffffff]' ${price ? 'hide-arrow' : ''} `}>
                            <option value="" >Masukan Harga Sewa per Hari</option>
                            <option value={400000}>&#60; Rp. 400.000</option>
                            <option value={600000}>Rp. 400.000 - Rp. 600.000</option>
                            <option value={10000000}>&#60; Rp. 400.000</option>
                        </select>
                    </div>

                    <div className="search-input">
                        <label htmlFor="">Status</label>
                        <select
                            defaultValue={'Masukan Kapasitas Mobil'}
                            value={statusCar}
                            onChange={handleStatusCar}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            className={`'text-sm placeholder:text-[#677380] bg-[#ffffff]' ${statusCar ? 'hide-arrow' : ''} `}>
                            <option value="" >Disewa</option>
                            <option value={false}>Tersedia</option>
                            <option value={true}>Tidak Tersedia</option>
                        </select>
                    </div>

                    <button type="submit" className="btn" onClick={handleButtonClick}>Cari Mobil</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCars