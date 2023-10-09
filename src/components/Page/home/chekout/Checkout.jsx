import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import { CartProuduct } from '../data';
import { ShopCantext } from "../../../../context/ShopCantext"
import { useNavigate } from "react-router-dom"
const Chekout = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopCantext)
    const newData = CartProuduct()
    const totalAmount = getTotalCartAmount()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        navigate('/cart')
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Chekout
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div> Your Order </div>
                {newData.map((item) => (
                    <ol key={item.id}>
                        <li> {item.name}:{cartItems[item.id]} </li>
                    </ol>
                ))}
                <h2>Total price:{totalAmount} </h2>
            </Modal>
        </>
    );
};
export default Chekout;