// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const InputContext = createContext()

// eslint-disable-next-line react/prop-types
export const InputProvider = ({ children }) => { 

    const [nameCar, setNameCar] = useState("")
    const [capacityCar, setCapacityCar] = useState("")
    const [priceCar, setPriceCar] = useState("")
    const [statusCar, setStatusCar] = useState("")


    return (
        <InputContext.Provider value={{ nameCar, capacityCar, priceCar, statusCar, setNameCar, setCapacityCar, setPriceCar, setStatusCar }}>
            {children}
        </InputContext.Provider>
    )
}