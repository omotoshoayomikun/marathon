import React from 'react'
import styles from '../../styles/Admin/Layout/Layout.module.css'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`${styles.main_container}`}>
        {
          children
        }
      </main>
    </>
  )
}

export default Layout
