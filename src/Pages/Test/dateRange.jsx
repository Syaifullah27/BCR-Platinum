import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const InputDateRange = () => {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    console.log(formatDate(range[0].startDate, 'MM/dd/yyyy'), formatDate(range[0].endDate, 'MM/dd/yyyy'));
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    localStorage.setItem('startDate', (formatDate(range[0].startDate, 'MM/dd/yyyy')))
    localStorage.setItem('endDate', (formatDate(range[0].endDate, 'MM/dd/yyyy')))




    useEffect(() => {
        // setTangal(formatDate(new Date(), 'MM/dd/yyyy'))
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, [])


    // hide dropdown on ESC key press
    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false);
        }
    };

    // hide dropdown on outside click
    const hideOnClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
        
    };





    return (
        <div className=' flex flex-col justify-center items-center w-full'>
                
                <span className="relative w-full">
                    <input
                            placeholder='Select date'
                            type="text"
                            readOnly
                            defaultValue={"Select date"}
                            value={`${formatDate(range[0].startDate, 'MM/dd/yyyy')}  -  ${formatDate(range[0].endDate, 'MM/dd/yyyy')}`}
                            className='border-2 font-medium rounded-lg border-gray-300 w-full p-2 outline-none focus:border-blue-500'
                            onClick={() => setOpen(open => !open)} />
                            <FontAwesomeIcon icon={faCalendar} className="absolute top-3 right-3 text-gray-500"/>
                </span>
                {open &&
                    <div ref={ref}>
                        <DateRange
                            onChange={item => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={1}
                            direction='horizontal'
                            showMonthArrows={false}
                            showMonthAndYearPickers={false}
                            
                            className='calendarElement'
                        />
                    </div>
                }
            </div>
    )
}

export default InputDateRange