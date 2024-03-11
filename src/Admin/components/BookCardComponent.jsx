import React from 'react'
import { FaTv, FaWifi } from 'react-icons/fa6'
import { IoBed } from 'react-icons/io5'
import { TbAirConditioning } from 'react-icons/tb'
import { Button } from '../../components/form/Buttons'

function BookCardComponent() {
    return (
        <div className="bookcard-container" style={{}}>
            <img src="/images/bedroom1.jpg" alt="" className='' />
            <div className='p-2'>
                <div className='flex justify-between items-end mb-2'>
                    <span className='text-[20px] font-bold'>Room Title</span>
                    <span className='font-bold'>#200,000</span>

                </div>
                <div className="text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod, aliquam itaque quasi voluptatem magni....
                </div>
                <div className='grid grid-cols-5 mt-3 gap-y-1'>
                    <div className=' justify-self-center'>
                        <FaTv size={25} />
                    </div>
                    <div className='flex items-center gap-[5px] justify-self-center'>
                        <IoBed size={25} />
                        <span className='text-[15px] font-medium'>3</span>
                    </div>
                    <div className=' justify-self-center'>
                        <FaWifi size={25} />
                    </div>
                    <div className=' justify-self-center'>
                        <TbAirConditioning size={25} />
                    </div>
                    <div className=' justify-self-center'>
                        <TbAirConditioning size={25} />
                    </div>
                </div>
            </div>
            {/* <div className='mt-3'>
                <Button
                    text='SELECT'
                    styles={{ width: '100%', margin: '0px',backgroundColor: '#d81b60' }}
                />
            </div> */}
        </div>
    )
}

export default BookCardComponent
