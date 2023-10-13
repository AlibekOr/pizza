import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { ShopCantext } from '../../../context/ShopCantext';
const Search = () => {
    const { setCartItems } = React.useContext(ShopCantext)
    const [open, setOpen] = useState(false);
    const [number, setNumber] = useState();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);

        let a = localStorage.getItem(number)
        let b = JSON.parse(a)
        setCartItems(b)
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    const handelChange = (e) => {
        const searchVal = e.target.value;
        setNumber(searchVal);

    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Search
            </Button>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}

            >
                <Input onChange={handelChange} />
            </Modal>
        </>
    );
};
export default Search;