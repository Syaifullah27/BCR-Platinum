// import { useState } from "react";
// import axios from "axios";
import "./cardcars.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../Utils/FormatDatas";
import { noImg } from "../../Utils/DumyData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData, setPage } from "../../redux/productSlice";
import Skeleton from "../../Components/skeleton";

// eslint-disable-next-line react/prop-types
const CardCars = ({ isOpen, statusCar, isFocused }) => {
    const dispatch = useDispatch();
    const { data, name, price, category, currentPage, totalPages, status } = useSelector((state) => state.product);
    console.log(data);
    
    useEffect(() => {
        dispatch(fetchData({ page: currentPage, category, price, statusCar, name }));
    }, [dispatch, currentPage, category, price, statusCar , name]);

    console.log(name);

    
    
    const scroolToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    const handlePageChange = (page) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        dispatch(setPage(page));
    };



    return (
        <div className={`card-cars-wrapper ${isOpen ? " blur" : ""} ${isFocused ? "" : ""} `}>
            {status === 'loading' && <div className="flex flex-wrap gap-8 max-[1050px] justify-center">
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </div>}
            {status === 'failed' && <p>Eror fetching data</p>}
            {status === 'succeeded' && <div className="card-cars-container">
                {data?.cars?.length === 0 && <p>No data</p>}
                {
                    data?.cars?.map((data) => {
                        return (
                            <div className="card-cars" key={data.id}>
                                <img src={data.image ? data.image : noImg} alt="cars" />
                                <p className="text-lg font-semibold">{data.name ? data.name : "Mobil"}</p>
                                <h4 className="text-md font-semibold">{formatRupiah(data.price)} / hari</h4>
                                <p className="desc-cars text-md font-medium">{data.desc ? data.desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam et perspiciatis eveniet!"}</p>
                                <Link to={`/detail-car/${data.id}`} className="w-full">
                                    <button onClick={() => scroolToTop()} className="card-cars-btn w-full">Pilih Mobil</button>
                                </Link>
                            </div>
                        )
                    })
                }  
            </div>}
            
            
                {/* <div className="pagination" >
                <button className="pagination-btn" hidden={page === 1}
                    onClick={handlePrevPage}
                >Prev</button>
                    <p hidden={dataCars.length < 9}>{page}</p>
                <button
                    hidden={dataCars.length < 9}
                    className="pagination-btn"
                    onClick={handleNextPage}
                >Next</button>
                </div> */}
            <div className={`flex justify-center gap-5 py-10 mt-10`}>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    className={`bg-[#ffffff] border p-2 px-5 rounded-sm font-medium text-sm ${currentPage === index + 1 ? 'bg-[#CFD4ED] border-[1px] border-blue-900' : 'opacity-40'}`}
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    disabled={currentPage === index + 1}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
        </div>
    )
}

export default CardCars