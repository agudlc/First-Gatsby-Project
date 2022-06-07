import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { useState } from "react"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}
      <Footer />
    </main>
  )
}

export default Layout