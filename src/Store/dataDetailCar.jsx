// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const DetailCar = createContext()

// eslint-disable-next-line react/prop-types
export const DetailCarProvider = ({ children }) => { 
    const [detailCars, setDetailCars ] = useState({})

    return (
        <DetailCar.Provider value={{ detailCars, setDetailCars}}>
            {children}
        </DetailCar.Provider>
    )
}