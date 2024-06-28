
import { useState, useEffect } from 'react';

const HitungMundur = () => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        const savedEndTime = localStorage.getItem('endTime');
        if (savedEndTime) {
            const end = new Date(savedEndTime);
            const currentTime = new Date();
            const diff = Math.floor((end - currentTime) / 1000);
            if (diff > 0) {
                setTimeLeft(diff);
                setEndTime(end);
            } else {
                localStorage.removeItem('endTime');
            }
        } else {
            const newEndTime = new Date(Date.now() + 86400 * 1000);
            localStorage.setItem('endTime', newEndTime);
            setEndTime(newEndTime);
            setTimeLeft(86400);
        }
    }, []);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            // Clear the timeout if the component is unmounted or timeLeft changes
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const formatEndTimeWIB = (date) => {
        const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const monthsOfYear = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const wibDate = new Date(date.getTime() + 7 * 60 * 60 * 1000); // Convert to WIB
        const dayName = daysOfWeek[wibDate.getDay()];
        const day = String(wibDate.getDate()).padStart(2, '0');
        const monthName = monthsOfYear[wibDate.getMonth()];
        const year = wibDate.getFullYear();
        const hours = String(wibDate.getHours()).padStart(2, '0');
        const minutes = String(wibDate.getMinutes()).padStart(2, '0');

        return `${dayName}, ${day} ${monthName} ${year} ${hours}:${minutes} WIB`;
    };

    const resetTimer = () => {
        const newEndTime = new Date(Date.now() + 86400 * 1000);
        localStorage.setItem('endTime', newEndTime);
        setEndTime(newEndTime);
        setTimeLeft(86400);
    };

    return (
        <div className="flex flex-col gap-4 p-6">
            <div className='flex justify-between items-center gap-10'>
                <h1 className='text-xl font-semibold'>Selesaikan Pembayaran Sebelum</h1>
                <p className='countdown'>{formatTime(timeLeft)}</p>
            </div>
            {endTime && <p className='text-sm text-gray-600 font-medium'>{formatEndTimeWIB(endTime)}</p>}
            {/* <button className='reset-time' onClick={resetTimer}>Reset Timer</button> */}
        </div>
    );
}

export default HitungMundur;