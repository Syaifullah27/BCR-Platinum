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
import Pagination from "../../Components/Pagination/Pagination";

// eslint-disable-next-line react/prop-types
const CardCars = ({ isOpen, statusCar, isFocused }) => {
    const dispatch = useDispatch();
    const { data, name, price, category, totalPages, currentPage, status } = useSelector((state) => state.product);
    console.log(data);

    useEffect(() => {
        dispatch(fetchData({ page: currentPage, category, price, statusCar, name }));
    }, [dispatch, currentPage, category, price, statusCar, name]);

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
            {status === 'failed' && <p className="text-center font-medium">Eror fetching data</p>}
            {status === 'succeeded' && <div className="card-cars-container">
                {data?.cars?.length === 0 && <p className="text-center font-medium">No data</p>}
                {
                    data?.cars?.map((data) => {
                        return (
                            <div className="card-cars w-[320px]" key={data.id}>
                                <img src={data.image ? data.image : noImg} alt="cars" />
                                <p className="text-lg font-semibold">{data.name ? data.name : "Mobil"}</p>
                                <h4 className="text-md font-semibold">{formatRupiah(data.price)} / hari</h4>
                                <p className="desc-cars text-md font-medium">{data.desc ? data.desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam et perspiciatis eveniet!"}</p>
                                <Link to={`/detail-car/${data.id}`} className="w-full flex justify-center items-center border-2 rounded-lg bg-[#5CB85F] max-sm:pl-5">
                                    <button onClick={() => scroolToTop()} className="card-cars-btn w-full relative  max-sm:text-center max-sm:right-3">Pilih Mobil</button>

                                </Link>
                            </div>
                        )
                    })
                }
            </div>}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

        </div>
    )
}

export default CardCars