import React from 'react'
import Img1 from "../../../../image/1.jpg"
import "./homeLeft.css"
const Cart = ({ data }) => {
    const e = data
    const clud = [
        {
            id: 10,
            name: "Properties",
            price: 14,
            img: Img1
        }]
    const newData = clud.concat(e)
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
