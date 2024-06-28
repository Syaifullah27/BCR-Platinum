import 'rsuite/dist/rsuite-no-reset.min.css';
import './test.css'
// import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import InputDateRange from './dateRange';
import HitungMundur from './hitungMundur';
import InputCopyValue from './inputCopyValue';
import HitungMundur10mnt from './HitungMundur10mnt';
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

    

    // const selectionRange = {
    //     startDate: new Date(),
    //     endDate: new Date(),
    //     key: 'selection',
    // }

    // console.log(tanggal);

    return (

        <div className="border-2 border-red-600 p-10 flex flex-col gap-10">

<InputDateRange />

<HitungMundur />

<InputCopyValue />

<HitungMundur10mnt />
        </div>
    )
}

export default TestPage


