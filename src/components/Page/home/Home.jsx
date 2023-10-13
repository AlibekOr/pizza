import React, { useContext } from 'react'
import { PRODUCTION } from "./data"
import HomeLeft from './homeLeft/HomeLeft'
import Product from './Product'
import Chekout from './chekout/Checkout'
import { ShopCantext } from '../../../context/ShopCantext'
import LocolStorages from './LocolStorages'
import "./home.css"
const Home = () => {
    const { getTotalCartAmount, resetCart } = useContext(ShopCantext)
    const totalAmount = getTotalCartAmount()

    return (
        <div className='home'>
            <HomeLeft />
            <div className='right'>
                <div className='checkout'>
                    <p>Subtotal:${totalAmount} </p>
                    <button onClick={resetCart}>reset</button>
                </div>
                <div>
                    {PRODUCTION.map((item, key) => (
                        <div key={key}><Product data={item} /></div>
                    ))}
                </div>
                <div>
                    <Chekout />
                    <LocolStorages />
                </div>
            </div>
        </div >
    )
}

export default Home
