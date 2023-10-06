import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Home } from "./Page/index"
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

        </Routes>
    )
}

export default Router
