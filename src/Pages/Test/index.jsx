// import 'rsuite/dist/rsuite-no-reset.min.css';
import './test.css'
// import { Calendar } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import InputDateRange from './dateRange';
// import HitungMundur from './hitungMundur';
// import InputCopyValue from './inputCopyValue';
// import HitungMundur10mnt from './HitungMundur10mnt';
import PDFfile from './reactPDF';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Skeleton from '../../Components/skeleton';
// import { useEffect } from 'react';
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
    // const slip = localStorage.getItem('slip')

    return (

        <div className="flex w-full justify-center items-center h-screen bg-slate-800">
            <Skeleton />
    
        </div>
    )
}

export default TestPage





export const MyPDF = () => {


    return (
        <div className='p-5 flex flex-col justify-center items-center mb-6'>
            <div className='shadow-xl rounded-lg border p-10 flex flex-col gap-5 max-sm:px-5'>
                <div className='flex justify-between '>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-medium'>Invoice</h1>
                        {/* <p className='text-[#8A8A8A] italic text-sm'>*no invoice</p> */}
                    </div>
                    <PDFDownloadLink
                        fileName='invoice.pdf'
                        document={<PDFfile />}><button 
                        className='border-2 border-blue-800 flex justify-center items-center gap-2 text-blue-800 font-medium px-4 py-2 max-sm:px-2'><img src="../../images/download.png" alt="donwload" />Unduh </button>
                    </PDFDownloadLink>
                </div>

                <PDFViewer width={557} height={162} showToolbar={false}  className='max-sm:w-[300px]'>
                    <PDFfile />
                </PDFViewer>
            </div>
        </div>
    )
}