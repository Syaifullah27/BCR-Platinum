import { createBrowserRouter } from "react-router-dom";
import DetailCars from "../Pages/DetailCarsPage/DetailCars";
import HomePage from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/404";
import ResultCars from "../Pages/ResultCarsPage/ResultCars";
import RentalsPage from "../Pages/RentalCarsPage/rentalsCars";
import LoginPage from "../Auth/Login";
import RegisterPage from "../Auth/Register";

export const RouteList = createBrowserRouter( [
    {
        path: "/",
        element : <HomePage inMenu={true}/>
    },
    {
        path: "/search-cars",
        element : <RentalsPage inMenu={true}/>
    },
    {
        path: "/result-cars",
        element : <ResultCars/>
    },
    {
        path: "/detail-car/:id",
        element : <DetailCars/>
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "*",
        element : <NotFound/>
    }
] )