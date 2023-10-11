import React from 'react'
import { CartProuduct } from "../data"
import "./homeLeft.css"
const Cart = () => {
    const newData = CartProuduct()
    return (
        <div className='homeLeft'>
            {newData.map((items) => (
                <div className='innerHomeLeft' key={items.id}>
                    <div> {items.name} </div>
                    <div> ${items.price} </div>
                    <img className='imges' src={items.img} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Cart
