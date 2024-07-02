// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const DataFaktur = createContext()

// eslint-disable-next-line react/prop-types
export const DataFakturProvider = ({ children }) => { 

    const [nameCar, setNameCar] = useState("")
    const [priceCar, setPriceCar] = useState("")
    const [tglSewa, setTglSewa] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [namaBank, setNamaBank] = useState("")


    return (
        <DataFaktur.Provider value={{ nameCar, tglSewa, namaBank, priceCar, setTglSewa, setNameCar, setPriceCar, setNamaBank }}>
            {children}
        </DataFaktur.Provider>
    )
}