import React from 'react'
import Card from '../../components/form/Card'

import { MdModeEditOutline, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

function BookingSummary() {
    return (
        <>
            <Card
                cardStyle={{}}
            >
                <div className=" pb-4 mb-6 border-b-2 border-[#d81b60] border-dotted">
                    <div className="text-[25px] font-bold">Booking Summary</div>
                    <div className="flex gap-8">
                        <div>
                            <div className=' font-bold'>Check-in</div>
                            <div className='mt-2 text-slate-600'>After 2:00 PM</div>
                        </div>
                        <div>
                            <div className=' font-bold'>Check-out</div>
                            <div className='mt-2 text-slate-600'>Before 12:00 PM</div>
                        </div>
                    </div>
                </div>
                <div className="summary-contsiner mb-5  border-b-2 border-[#d81b60] pb-6  border-dotted">
                    <div className="text-[16px] mb-3 uppercase font-semibold">Room 1</div>
                    <div className='text-[16px]'>Thu, Mar 21, 2024 - Fri, Mar 22, 2024</div>
                    <div  className='text-[16px] mb-3 flex gap-2'>
                        <div> Adult 1</div>
                        <div> Children 1</div>
                       
                        </div>
                    <div className="flex justify-between text-[18px]">
                        <div className="text-[17px]">Room Title</div>
                        <div className="font-bold">NGN 3000000</div>
                    </div>
                    <div className="text-[14px] text-slate-600 mb-5">
                        Best Available Rates Bed and Breakfast
                    </div>
                    <div className="flex gap-5">
                        <div className="flex items-center">
                            <MdOutlineEdit size={23} color='green' />
                            <div className="text-[18px] text-green-600">Edit</div>
                        </div>
                        <div className="flex items-center">
                            <MdOutlineDelete size={23} color='red' />
                            <div className="text-[18px] text-red-600">Remove</div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <div className='font-bold text-[20px]'>Total:</div>
                        <div className='font-bold text-[20px]'>NGN 1,070,000.00</div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default BookingSummary
