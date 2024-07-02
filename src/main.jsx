import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { InputProvider } from './Store/inputContext.jsx'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DetailCarProvider } from './Store/dataDetailCar.jsx'
import { TglSewaProvider } from './Store/tanggalSewa.jsx'
import { DataFakturProvider } from './Store/Faktur.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputProvider>
      <DataFakturProvider>
        <TglSewaProvider>
          <DetailCarProvider>
              <App />
          </DetailCarProvider>
        </TglSewaProvider>
      </DataFakturProvider>
      </InputProvider>
    </LocalizationProvider>
  </React.StrictMode>,
)
