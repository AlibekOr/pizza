import React, { useContext } from 'react'
import { PRODUCTION } from "./data"
import HomeLeft from './homeLeft/HomeLeft'
import Product from './Product'
import { ShopCantext } from '../../../context/ShopCantext'
import "./home.css"
const Home = () => {
    const { getTotalCartAmount } = useContext(ShopCantext)
    const totalAmount = getTotalCartAmount()
    return (
        <div className='home'>
            <HomeLeft />
            <div className='right'>
                <div className='checkout'>
                    <p>Subtotal:${totalAmount} </p>
                </div>
                <div>
                    {PRODUCTION.map((item) => (
                        <Product data={item} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Home
