import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Layout from './Admin/Layout/Layout'
import Dashboard from './Admin/pages/Dashboard'
import AddUser from './Admin/pages/user/AddUser'
import ManageUser from './Admin/pages/user/ManageUser'
import AddRoom from './Admin/pages/Room/AddRoom'
import ManageRoom from './Admin/pages/Room/ManageRoom'
import CreateBooking from './Admin/pages/Booking/CreateBooking'
import ManageBookings from './Admin/pages/Booking/ManageBookings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/admin' element={<Layout> <Dashboard /> </Layout>} />
        <Route path='/admin/add-user' element={<Layout> <AddUser /> </Layout>} />
        <Route path='/admin/manage-user' element={<Layout> <ManageUser /> </Layout>} />
        <Route path='/admin/add-room' element={<Layout> <AddRoom /> </Layout>} />
        <Route path='/admin/manage-room' element={<Layout> <ManageRoom /> </Layout>} />
        <Route path='/admin/create-booking' element={<Layout> <CreateBooking /> </Layout>} />
        <Route path='/admin/manage-bookings' element={<Layout> <ManageBookings /> </Layout>} />
      </Routes>
    </>
  )
}

export default App
