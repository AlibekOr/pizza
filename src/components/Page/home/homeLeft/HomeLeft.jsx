import React, { useContext } from 'react'
import { ShopCantext } from '../../../../context/ShopCantext'
import { PRODUCTION } from '../data'
import Cart from './Cart'

const HomeLeft = () => {
    const { cartItems } = useContext(ShopCantext)
    const result = PRODUCTION.filter((product) => cartItems[product.id] !== 0)
    return (
        <div>
            <Cart data={result} />
        </div>
    )
}

export default HomeLeft
