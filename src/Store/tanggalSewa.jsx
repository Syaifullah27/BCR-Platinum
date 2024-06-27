// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const TglSewa = createContext()

// eslint-disable-next-line react/prop-types
export const TglSewaProvider = ({ children }) => { 
    const [tglSewa, setTglSewa] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    return (
        <TglSewa.Provider value={{ tglSewa, setTglSewa}}>
            {children}
        </TglSewa.Provider>
    )
}