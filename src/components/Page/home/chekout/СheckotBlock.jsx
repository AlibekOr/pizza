import React, { useContext } from 'react';
import { Button, Form, Input, InputNumber, Checkbox } from 'antd';
import { ShopCantext } from '../../../../context/ShopCantext';
import { CartProuduct } from '../data';
import "./checkot.css"
import { useNavigate } from 'react-router-dom';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */
const onFinish = (values) => {
    console.log(values);
};

const СheckotBlock = () => {
    const newData = CartProuduct()
    const navigate = useNavigate()
    const { resetCart, cartItems } = useContext(ShopCantext)
    const [componentDisabled, setComponentDisabled] = React.useState(false);
    const handelClick = () => {
        alert("Sumbits clicked")
        resetCart()
        navigate('/')
    }
    console.log(componentDisabled);
    return (
        <div>
            <div className='chekotInner' > {newData.map((item) => (
                <div className='chekotItem' key={item.id}>
                    <div>{item.name} </div>
                    <img className='imgsChekot' src={item.img} alt="" />
                    <div>{cartItems[item.id]} </div>
                </div>
            ))}
            </div>
            <Form className='CheckFor'

                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item className='chekotInnfo'>
                    <h2 >Chekot info</h2>
                </Form.Item>

                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name="disabled" label="copon">
                    <Checkbox
                        checked={componentDisabled}
                        onChange={(e) => setComponentDisabled(e.target.checked)}
                    >
                    </Checkbox>
                </Form.Item>
                <Form.Item label="copon code"
                >
                    <Input disabled={componentDisabled === false ? true : false} />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button onClick={handelClick} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
};
export default СheckotBlock;