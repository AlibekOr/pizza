import React from 'react'
import Router from './components/Router'
import { Header } from "./components/Page/index"
import { ShopCantextProvider } from './context/ShopCantext'
import "./index.css"
const App = () => {
    return (
        <ShopCantextProvider>
            <div className='containers'>
                <Header />
                <Router />
            </div>
        </ShopCantextProvider>

    )
}

export default App
