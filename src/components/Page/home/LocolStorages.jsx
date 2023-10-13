import React from 'react'
import Search from './Search'
import { ShopCantext } from '../../../context/ShopCantext'
import "./home.css"

const LocolStorages = () => {
    const { cartItems, resetCart } = React.useContext(ShopCantext)
    const data = ["Wst21451353222", "Wst21451353", "Af9sdk24", "Aqwf1234", "Ssger13453", "Migfrk123", "N3rkfiw2134", "UWfds11432", "Wgfdshu924", "A0t43tff", "Wsdjci3111a"]
    const [active, setActive] = React.useState(false)
    const [ranNo, setRanNo] = React.useState("")
    const random = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item
    }


    const getLocol = () => {
        let string = JSON.stringify(cartItems)
        const r = random(data)
        console.log(r);
        setRanNo(r)
        localStorage.setItem(r, string)
        setActive(true)
        resetCart()
        console.log(cartItems);
    }

    return (
        <>
            <div className='localStogar'>
                <button onClick={getLocol} className='btnLocal'>save</button>
                <Search />

            </div>
            <div className={active === false ? 'remove' : 'active'}>
                <button className='btnCopy' onClick={(() => {
                    navigator.clipboard.writeText(ranNo)
                })}>
                    your pizza search number:{ranNo}
                </button>
            </div>
        </>
    )
}

export default LocolStorages
