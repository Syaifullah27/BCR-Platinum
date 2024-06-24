import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { InputProvider } from './Store/inputContext.jsx'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputProvider>
          <App />
      </InputProvider>
    </LocalizationProvider>
  </React.StrictMode>,
)
