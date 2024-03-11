import React, { useState } from 'react'
import Card from '../../../components/form/Card'
import BookCardComponent from '../../components/BookCardComponent'
import { HiPlus, HiMinus } from "react-icons/hi2";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range';
import { Button } from '../../../components/form/Buttons';
import { Input } from '../../../components/form/Input';
import BookingSummary from '../../components/BookingSummary';

function CreateBooking() {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ])

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'firstName',
      type: 'text',
      label: 'First Name',
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
    },
    {
      id: 3,
      name: 'phone',
      type: 'tel',
      label: 'Phone Number',
    },
    {
      id: 4,
      name: 'email',
      type: 'email',
      label: 'Email',
    },
  ]


  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="w-full overflow-x-hidden pt-10 relative">
        <div className="flex gap-5">
          <Card headTitle='Create Booking' styles={{ width: '65%' }}>
            <div className='pl-9 pb-12 xxx'>
              <div className='booking-step__number'>
                <span>1</span>
              </div>
              <div className=' mt-9 mb-9'>
                <div className='text-[18px] font-bold'>Select Room type</div>
                <span className='block '>Select the type of room you want to book for customers</span>
              </div>
              <div className="book-card-com-container">
                <div className="w-[320px]">
                  <BookCardComponent />
                </div>
                <div className="w-[320px]">
                  <BookCardComponent />
                </div>
                <div className="w-[320px]">
                  <BookCardComponent />
                </div>
                <div className="w-[320px]">
                  <BookCardComponent />
                </div>
              </div>

            </div>

            <div className=' pl-9  pb-12 xxx'>
              <div className='booking-step__number'>
                <span>2</span>
              </div>
              <div className='mb-9'>
                <div className='text-[18px] font-bold'>Select check in and check out date</div>
                <span className='block '>choose when you want the customer to checkin and checkout</span>
              </div>
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={date}
                onChange={(item) => setDate([item.selection])}
                className="date-range"
              />
            </div>
            <div className=' pl-9  pb-12 xxx'>
              <div className='booking-step__number'>
                <span>3</span>
              </div>
              <div className='mb-9'>
                <div className='text-[18px] font-bold'>Select Guest</div>
                <span className='block '>Select the number of guest</span>
              </div>
              <div>
                <div className='flex gap-9 items-center mb-5'>
                  <span className='text-[17px] w-[100px] font-medium'>Adults</span>
                  <div className='flex'>
                    <button className="guest-oprator">
                      <HiMinus />
                    </button>
                    <div>
                      <input type="text" className="guest-op-input text-center text-[17px]" value='1' />
                    </div>
                    <button className="guest-oprator">
                      <HiPlus />
                    </button>
                  </div>
                </div>
                <div className='flex gap-9 items-center'>
                  <span className='text-[17px] w-[100px] font-medium'>Childrens</span>
                  <div className='flex'>
                    <button className="guest-oprator">
                      <HiMinus />
                    </button>
                    <div>
                      <input type="text" className="guest-op-input text-center text-[17px]" value='0' />
                    </div>
                    <button className="guest-oprator">
                      <HiPlus />
                    </button>
                  </div>
                </div>

                <div className='mt-5 flex justify-end w-[305px]'>
                  <Button text="Cancel" styles={{ backgroundColor: 'transparent', color: '#000', paddingTop: '15px', paddingBottom: '15px' }} />
                  <Button text="Apply" styles={{ backgroundColor: '#d81b60', paddingTop: '15px', paddingBottom: '15px', color: '#fff' }} />
                </div>
              </div>
            </div>


            <div className=' pl-9 xxx'>
              <div className='booking-step__number'>
                <span>4</span>
              </div>
              <div className='mb-9'>
                <div className='text-[18px] font-bold'>Contact Info</div>
                <span className='block '>Input your information to reach you to</span>
              </div>
              <div className='grid grid-cols-2 gap-x-8'>
                {
                  inputs.map((input) => (
                    <Input key={input.id} {...input} value={values[input.name]} onChange={handleInput} />
                  ))
                }
              </div>
              <div className="mt-6 w-full">
              <Button text='Submit' styles={{ width: '300px', fontSize: '20px', borderRadius: 5, marginRight: 'auto', marginLeft: 'auto' }} />

              </div>
            </div>
          </Card>
          {/* fixed right-8 w-[31.5%] */}
          <div className="flex-1 ">
            <BookingSummary />
          </div>
        </div>

      </div>
    </>
  )
}

export default CreateBooking
