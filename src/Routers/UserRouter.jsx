import React from 'react'
import { Route, Routes } from 'react-router-dom'

// imported Pages
import Home from '../Pages/Home'
import Header from '../Components/Header/Header'

function UserRouter() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-stand" element={<Home />} />

      </Routes>
    </>
  )
}

export default UserRouter