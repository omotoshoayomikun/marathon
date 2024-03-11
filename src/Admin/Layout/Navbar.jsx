import React from 'react'
import styles from '../../styles/Admin/Layout/Navbar.module.css'
import { IoChevronDown, IoLogOut } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className={styles.sidebar_container}>
                <div className='flex-1'>
                    <img src="/images/M_LOGO_WHITE.fw.png" width='70px' height='70px' alt="" />
                </div>
                <ul className={styles.ordered_content}>
                    <li className={styles.list_content}>
                        <NavLink to='/admin/'>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className={styles.list_content}>
                        <div className='flex items-center gap-3'>
                            User  <IoChevronDown size={20} />
                        </div>
                        <ul className={styles.nav_dropdown}>
                            <li>
                                <NavLink
                                    to='/admin/add-user'
                                >
                                    Add User
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/admin/manage-user'
                                >
                                    <li>Manage User</li>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className={styles.list_content}>
                        <div className='flex items-center gap-3'>
                            Booking <IoChevronDown size={20} />
                        </div>
                        <ul className={styles.nav_dropdown}>
                            <li>
                                <NavLink to='/admin/create-booking'>
                                    Create Booking
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/admin/manage-bookings'>
                                    Manage Booking
                                </NavLink>

                            </li>
                        </ul>
                    </li>
                    <li className={styles.list_content}>
                        <div className='flex items-center gap-3'>
                            Room <IoChevronDown size={20} />
                        </div>
                        <ul className={styles.nav_dropdown}>
                            <li>
                                <NavLink to='/admin/add-room'>
                                    Create Room
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to='/admin/manage-room'>
                                    Manage Room
                                </NavLink>

                            </li>
                        </ul>
                    </li>
                </ul>
                <div className='flex-1 flex items-end flex-col'>
                    <button>
                        <IoLogOut size={35} />
                        <div className='text-[11px] mt-[-7px]'>Logout</div>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
