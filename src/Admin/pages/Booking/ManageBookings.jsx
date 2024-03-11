import React from 'react'
import { Button } from '../../../components/form/Buttons'
import Card from '../../../components/form/Card'

function ManageBookings() {
  return (
    <div className='relative pt-10'>
      <Card headTitle='Manage Bookings'>
        <div className="table-responsive mt-8">
          <table className="table items-center">
            <thead className='thead-light'>
              <tr>
                <th>S/N</th>
                <th>Booking ID</th>
                {/* <th>Title</th> */}
                <th>Check in date</th>
                <th>Check out date</th>
                <th>Total Price</th>
                <th>Contact Info</th>
                <th>Guest</th>
                <th>Payment Info</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td title='55757jdjdksks'>557543432312357...</td>
                {/* <td>King Size Bed</td> */}
                <td>12-03-2024</td>
                <td>12-03-2024</td>
                <td>#500,000</td>
                <td className=''>
                  <div className='flex gap-3'>
                    <span className='font-semibold text-nowrap'>Full Name : </span>
                    <span> Omotosho Ayomikun</span>
                  </div>
                  <div className='flex gap-3'>
                    <span className='font-semibold text-nowrap'>Phone Number : </span>
                    <span> 09054544641</span>
                  </div>
                  <div className='flex gap-3'>
                    <span className='font-semibold text-nowrap'>Email : </span>
                    <span> omotoshoayomikun@gmail.com</span>
                  </div>
                </td>
                <td>
                  <div className='flex gap-3'>
                    <span className='font-semibold'>Aldut : </span>
                    <span>1</span>
                  </div>
                  <div className='flex'>
                    <span className='font-semibold'>Children : </span>
                    <span>1</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span></span>
                    <span>completed</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span></span>
                    <span>completed</span>
                  </div>
                </td>
                <td>
                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default ManageBookings
