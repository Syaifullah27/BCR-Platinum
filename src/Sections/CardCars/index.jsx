import { useState } from "react";
import axios from "axios";
import "./cardcars.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../Utils/FormatDatas";
import { noImg } from "../../Utils/DumyData";

// eslint-disable-next-line react/prop-types
const CardCars = ({ isOpen, nameCar, capacityCar, priceCar, statusCar, isFocused }) => {

    const [dataCars, setDataCars] = useState([]);
    const [page, setPage] = useState(1)

    const getDataCars = () => {
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${nameCar}&category=${capacityCar}&isRented=${statusCar}&minPrice=${priceCar}&page=${page}&pageSize=9`)
            .then((res) => {
                // console.log(res.data);
                // console.log(capacityCar);
                // console.log(page);
                setDataCars(res.data.cars);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getDataCars();
    }, [])

    useEffect(() => {
        getDataCars();
    }, [page, nameCar, capacityCar,priceCar, statusCar])

    
    const scroolToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleNextPage = () => {
        setPage(page + 1);
        scroolToTop();
    }
    const handlePrevPage = () => {
        setPage(page - 1);
        scroolToTop();
    }




    return (
        <div className={`card-cars-wrapper ${isOpen ? " blur" : ""} ${isFocused ? "" : ""} `}>
            {
                dataCars.length === 0 && (
                    <h1 
                    className="text-3xl font-bold"
                    style={{ textAlign: "center", marginTop: "20px"}}>Mobil Belum Tersedia</h1>
                )
            }
            <div className="card-cars-container">
                {
                    dataCars.map((data) => {
                        return (
                            <div className="card-cars" key={data.id}>
                                <img src={data.image ? data.image : noImg} alt="cars" />
                                <p className="text-lg font-semibold">{data.name ? data.name : "Mobil"}</p>
                                <h4 className="text-md font-semibold">{formatRupiah(data.price)} / hari</h4>
                                <p className="desc-cars text-md font-medium">{data.desc ? data.desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam et perspiciatis eveniet!"}</p>
                                <Link to={`/detail-car/${data.id}`}>
                                    <button onClick={() => scroolToTop()} className="card-cars-btn">Pilih Mobil</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
                <div className="pagination" >
                    <button className="pagination-btn" hidden={page === 1} onClick={handlePrevPage}>Prev</button>
                    <p hidden={dataCars.length < 9}>{page}</p>
                    <button hidden={dataCars.length < 9} className="pagination-btn" onClick={handleNextPage}>Next</button>
                </div>
        </div>
    )
}

export default CardCars