import React, { createContext } from 'react'
import { PRODUCTION } from '../components/Page/home/data'
export const ShopCantext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTION.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopCantextProvider = (props) => {
    const [cartItems, setCartItems] = React.useState(getDefaultCart())
    const resetCart = () => {
        let resetCart = {}
        for (let i = 0; i < PRODUCTION.length + 1; i++) {
            resetCart[i] = 0
            setCartItems(resetCart)
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 3
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTION.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeCart = (itemId) => {
        return cartItems[itemId] > 0 ? setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })) : "kishi"
    }
    const contextValue = {
        cartItems,
        addToCart,
        removeCart,
        getTotalCartAmount,
        resetCart,
        setCartItems
    }
    return (
        <ShopCantext.Provider value={contextValue}>
            {props.children}
        </ShopCantext.Provider>
    )
}
