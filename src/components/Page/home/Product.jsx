import React, { useContext } from 'react'
import { ShopCantext } from '../../../context/ShopCantext'
const Product = (props) => {
    const { id, name, price, img } = props.data
    const { addToCart, removeCart, cartItems } = useContext(ShopCantext)
    const cartItemAmount = cartItems[id]
    return (
        <div  >
            <div>{name}</div>
            <div>${price}</div>
            <div className='divBTn' >
                <button className='btnCilick qizil' onClick={() => removeCart(id)} >-</button>
                <div> {cartItemAmount} </div>
                <button className='btnCilick jasil' onClick={() => addToCart(id)}>+</button>
            </div>

        </div>
    )
}

export default Product
