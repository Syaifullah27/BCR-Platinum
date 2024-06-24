import { useState } from 'react';
import { Button, DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import './test.css'
// import { addDays } from 'rsuite/esm/internals/utils/date';

const TestPage = () => {

    // const predefinedRanges = [
    //     {
    //         label: 'Today',
    //         value: [new Date(), new Date()],
    //         placement: 'left'
    //     },
    //     {
    //         label: 'Yesterday',
    //         value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    //         placement: 'left'
    //     },
    //     {
    //         label: 'Last 7 Days',
    //         value: [addDays(new Date(), -7), new Date()],
    //         placement: 'left'
    //     },
    //     {
    //         label: 'Last 30 Days',
    //         value: [addDays(new Date(), -30), new Date()],
    //         placement: 'left'
    //     }
    // ];

    const [tanggal, setTangal] = useState([])

    const handleChange = (value) => {
        setTangal(value)
    }

    console.log(tanggal);

    return (

        <div className="border-2 border-red-600 p-10 flex gap-10">
            <Button>Hello World</Button>
            <div className='w-[400px]'>
                <DateRangePicker
                    className='w-full'
                    placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
                    showOneCalendar ranges={[]} onChange={handleChange} />
            </div>
            {/* <DateRangePicker showOneCalendar ranges={[]} format="MM/dd/yyyy HH:mm" /> */}
        </div>
    )
}

export default TestPage


