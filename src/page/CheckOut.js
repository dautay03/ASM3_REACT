import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Checkout() {
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    const data = useSelector((state) => state.userData)
    const [userdata] = useState(data)
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    function handleChangeInput(e) {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        setState({ ...state, [name]: value })

    }
    const handleSubmit = (e) => {
        pageNavigate('')
        alert('Hoàn tất đơn hàng')
        e.preventDefault()

    }

    const numberhandle = (num) => {
        let str = num.toString()
        let result = str.split('');
        result.reverse()
        if (str.length > 4) {
            result.splice(3, 0, '.');
        }
        if (str.length > 6) {
            result.splice(7, 0, '.')
        }
        result.reverse()
        return result.join('')
    }
    return (
        <div className="container">
            <div style={{ backgroundColor: '#EEEEEE', height: '15rem', marginBottom: '30px', display: 'flex', flexDirection: 'row', padding: '2rem' }}>
                <div style={{ width: '50%', fontSize: '3rem', margin: 'auto 0px', fontStyle: 'italic' }}>
                    <h2>CART</h2>
                </div>
                <div style={{ width: '50%', textAlign: 'right', color: '#555555', margin: 'auto 0px', fontStyle: 'italic' }}>
                    <span onClick={() => pageNavigate('home')}>HOME /</span><span onClick={() => pageNavigate('cart')}> CART / </span><span style={{ color: 'GrayText' }}>CHECKOUT</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '60%', paddingRight: '50px' }}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <h2 style={{
                            fontStyle: 'italic',
                            marginTop: '20px',
                            fontSize: '2.5rem',
                            fontWeight: '450',
                        }}>BILLING DEITAILS</h2>
                        <label style={{ fontWeight: '300', margin: '20px 0px 10px 0px', fontSize: '1.5rem', }}>FULL NAME:</label>
                        <FormControl
                            style={{ fontSize: '1.5rem', color: 'GrayText' }}
                            className={`formcontrol`}
                            name="name"
                            type="text"
                            onChange={(e) => handleChangeInput(e)}
                            placeholder='Enter Your Full Name Here!'
                        />
                        <label style={{ fontWeight: '300', margin: '20px 0px 10px 0px', fontSize: '1.5rem', }}>EMAIL:</label>
                        <FormControl
                            style={{ fontSize: '1.5rem', color: 'GrayText' }}
                            className={`formcontrol `}
                            name='email'
                            type="text"
                            onChange={(e) => handleChangeInput(e)}
                            placeholder='Enter Your Email Here!'
                        />
                        <label style={{ fontWeight: '300', margin: '20px 0px 10px 0px', fontSize: '1.5rem' }}>PHONE NUMBER:</label>
                        <FormControl
                            style={{ fontSize: '1.5rem', color: 'GrayText' }}

                            className={`formcontrol `}
                            name='phone'
                            type="number"
                            onChange={(e) => handleChangeInput(e)}
                            placeholder='Enter Your Phone Number Here!' />
                        <label style={{ fontWeight: '300', margin: '20px 0px 10px 0px', fontSize: '1.5rem' }}>ADDRESS:</label>
                        <FormControl
                            style={{ fontSize: '1.5rem', color: 'GrayText' }}
                            className={`formcontrol `}
                            name='address' type="text"
                            onChange={(e) => handleChangeInput(e)}
                            placeholder='Enter Your Address Here!' />

                        <FormControl
                            type="submit"
                            value="Place oder"
                            style={{
                                color: 'white',
                                marginTop: '40px',
                                height: '40px',
                                width: '15rem',
                                backgroundColor: 'GrayText',
                                fontSize: '2rem'
                            }} />

                    </Form>
                </div>
                <div style={{ width: '40%', padding: '3.5rem', backgroundColor: '#f6f9f6' }}>
                    <h5 style={{ fontSize: '2rem', marginBottom: '10px', fontStyle: 'italic' }}>YOUR ORDER</h5>
                    {userdata.map((item) => {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '2px solid black' }}>
                                <div style={{ width: '50%', fontSize: '1.5rem', margin: '5px 0px', fontStyle: 'italic' }}>{item.item.name}</div>
                                <div style={{ width: '50%', textAlign: 'right', fontSize: '1.5rem', margin: '5px 0px', fontStyle: 'italic' }}>{numberhandle(item.item.price) + 'VND x ' + item.quantity}</div>
                            </div>
                        )
                    })}


                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
                        <div style={{ width: '50%', fontSize: '1.5rem', margin: '5px 0px', fontStyle: 'italic' }}>TOTAL</div>
                        <div style={{ width: '50%', textAlign: 'right', fontSize: '1.7rem', margin: '5px 0px', fontStyle: 'italic' }}>{numberhandle(userdata.reduce((total, item) => { return total + (item.item.price * item.quantity) }, 0))}{' VND'}</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Checkout;