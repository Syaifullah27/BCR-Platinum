import { useContext } from "react";
import "./resultTable.css";
import { InputContext } from "../../Store/inputContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory, setName, setPrice } from "../../redux/productSlice";
// eslint-disable-next-line react/prop-types
const ResultCarsTable = ({isOpen,btn,canModify,
    // eslint-disable-next-line react/prop-types
detailName,detailCapacity,detailPrice,
    // eslint-disable-next-line react/prop-types
    handleInputBlur,handleInputFocus,
}) => {
    const {
        // nameCar,
        // capacityCar,
        // priceCar,
        statusCar,
        // setNameCar,
        // setCapacityCar,
        // setPriceCar,
        setStatusCar,
    } = useContext(InputContext);

    // console.log(statusCar);
    // console.log(detailCapacity);

    // untuk input value
    // const handleInputName = (event) => {
    //     setNameCar(event.target.value);
    //     // console.log(nameCar);
    // };

    // // opsi kapsasitas mobil
    // const handleCapacityCar = (event) => {
    //     setCapacityCar(event.target.value);
    //     // console.log(capacityCar);
    // };

    // // opsi harga sewa mobil
    // const handlePriceCar = (event) => {
    //     setPriceCar(event.target.value);
    // };

    // opsi sewa mobil
    const handleStatusCar = (event) => {
        setStatusCar(event.target.value);
    };

    const handleBtn = () => {
        dispatch(setName(""));
        dispatch(setPrice(""));
        dispatch(setCategory(""));
        setStatusCar("");
    };


    const dispatch = useDispatch();
    const { name, price, category } = useSelector((state) => state.product);
    console.log(name);

    return (
        <>
            {canModify === true ? (
                <div className={"result-cars-table-wrapper" + (isOpen ? " blur" : "")}>
                    <div className="result-cars-table-container">
                        <div className="table-container">
                            <h3 className="font-semibold text-xl">Pencarianmu</h3>
                            <div className="tablee">
                                <div className="table-input">
                                    <label>Nama Mobil</label>
                                    <input
                                        className={`text-sm ${name ? "hide-arrow" : ""}`}
                                        onBlur={handleInputBlur}
                                        onFocus={handleInputFocus}
                                        value={name}
                                        onChange={(e) => dispatch(setName(e.target.value))}
                                        type="text"
                                        placeholder="Masukan Nama Mobil"
                                    />
                                </div>
                                <div className="table-input">
                                    <label>Kategori</label>
                                    <select
                                        className={`text-sm  ${category ? "hide-arrow" : ""}`}
                                        defaultValue={""}
                                        value={category}
                                        onChange={(e) => dispatch(setCategory(e.target.value))}
                                        onBlur={handleInputBlur}
                                        onFocus={handleInputFocus}
                                    >
                                        <option value="" disabled hidden>
                                            Masukan Kapasitas Mobil
                                        </option>
                                        <option value={"small"}>2 - 4 orang</option>
                                        <option value={"medium"}>4 - 6 orang</option>
                                        <option value={"large"}>6 - 8 orang</option>
                                    </select>
                                </div>
                                <div className="table-input">
                                    <label>Harga</label>
                                    <select
                                        className={`text-sm  ${price ? "hide-arrow" : ""}`}
                                        onBlur={handleInputBlur}
                                        onFocus={handleInputFocus}
                                        defaultValue={""}
                                        value={price}
                                        onChange={(e) => dispatch(setPrice(e.target.value))}
                                    >
                                        <option value="" disabled hidden>
                                            Masukan Harga Sewa per Hari
                                        </option>
                                        <option value={400000}>&#60; Rp. 400.000</option>
                                        <option value={600000}>Rp. 400.000 - Rp. 600.000</option>
                                        <option value={10000000}>&#60; Rp. 400.000</option>
                                    </select>
                                </div>
                                <div className="table-input">
                                    <label>Status</label>
                                    <select
                                        className={`text-sm  ${statusCar ? "hide-arrow" : ""}`}
                                        onBlur={handleInputBlur}
                                        onFocus={handleInputFocus}
                                        defaultValue={""}
                                        value={statusCar}
                                        onChange={handleStatusCar}
                                    >
                                        <option value="" disabled hidden>
                                            Disewa
                                        </option>
                                        <option value={false}>Tersedia</option>
                                        <option value={true}>Tidak Tersedia</option>
                                    </select>
                                </div>
                                {btn === true ? (
                                    <button onClick={handleBtn} className="table-btn">
                                        Edit
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={"result-cars-table-wrapper " + (isOpen ? " blur" : "")}>
                    <div className="result-cars-table-container detailCardCar">
                        <div className="table-container">
                            <h3 className="font-semibold text-xl">Pencarianmu</h3>
                            <div className="tablee tableValue">
                                <div className="table-input inputValue">
                                    <label>Nama Mobil</label>
                                    <input
                                        type="text"
                                        placeholder="Masukan Nama Mobil"
                                        value={detailName ? detailName : "Mobil"}
                                        style={{
                                            fontWeight: "lighter",
                                            color: "#686868",
                                            backgroundColor: "#D0D0D0",
                                            border: "none",
                                        }}
                                    />
                                </div>
                                <div className="table-input inputValue">
                                    <label>Kategori</label>
                                    <select
                                        defaultValue={"option1"}
                                        style={{
                                            backgroundColor: "#D0D0D0",
                                            border: "none",
                                            appearance: "none",
                                            outline: "none",
                                        }}
                                    >
                                        <option value="" disabled hidden>
                                            Masukan Kapasitas Mobil
                                        </option>
                                        <option value="option1">
                                            {detailCapacity ? detailCapacity : "-"}
                                        </option>
                                        {/* <option value="option2">4 - 6 orang</option>
                                    <option value="option3">6 - 8 orang</option> */}
                                    </select>
                                </div>
                                <div className="table-input inputValue">
                                    <label>Harga</label>
                                    <select
                                        defaultValue={""}
                                        style={{
                                            backgroundColor: "#D0D0D0",
                                            border: "none",
                                            appearance: "none",
                                            outline: "none",
                                        }}
                                    >
                                        <option value="harga1" disabled hidden>
                                            Masukan Harga Sewa per Hari
                                        </option>
                                        <option value="harga1">{detailPrice}</option>
                                        {/* <option value="harga2">Rp. 400.000 - Rp. 600.000</option>
                                    <option value="harga3">&#60; Rp. 400.000</option> */}
                                    </select>
                                </div>
                                <div className="table-input inputValue">
                                    <label>Status</label>
                                    <select
                                        defaultValue={""}
                                        style={{
                                            backgroundColor: "#D0D0D0",
                                            border: "none",
                                            appearance: "none",
                                            outline: "none",
                                        }}
                                    >
                                        <option value="value1" disabled hidden>
                                            Disewa
                                        </option>
                                        <option value="value1">
                                            {detailCapacity ? "Tersedia" : "Tidak Tersedia"}
                                        </option>
                                        {/* <option value="value2">Disewakan</option> */}
                                    </select>
                                </div>
                                {btn === true ? (
                                    <button className="table-btn">Edit</button>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResultCarsTable;
