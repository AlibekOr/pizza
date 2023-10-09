import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Home, ChekoutCart } from "./Page/index"
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<ChekoutCart />} />

        </Routes>
    )
}

export default Router
