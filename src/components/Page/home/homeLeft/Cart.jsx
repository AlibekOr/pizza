import React, { useContext } from 'react'
import { ShopCantext } from '../../../../context/ShopCantext';
import "./homeLeft.css"
const Cart = ({ data }) => {
    const { cartItems } = useContext(ShopCantext)
    return (
        <div className='homeLeft'>
            {data.length > 0 ? data.map((items) => (
                <div className='innerHomeLeft' key={items.id}>
                    <div> {items.name} </div>
                    <div> ${items.price} </div>
                    <img className='imges' src={items.img} alt="" />
                    <div> coutn {cartItems[items.id]} </div>
                </div>
            )) : " essat joq"}
        </div>
    )
}

export default Cart
