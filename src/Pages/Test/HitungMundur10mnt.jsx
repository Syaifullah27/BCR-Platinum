import { useEffect } from "react";
import { useState } from "react";


const HitungMundur10mnt = () => {

    const [time, setTime] = useState(600); // 10 minutes in seconds

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [time]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    return (

        <p className="countdown max-w-fit">
            {formatTime(time)}
        </p>
    )
}

export default HitungMundur10mnt