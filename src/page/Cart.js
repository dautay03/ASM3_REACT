import React, { useState } from "react";
import { Button, FormControl, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import counterSlice from "../reducer/reducer";

function Cart() {
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    const dispart = useDispatch()
    const data = useSelector((state) => state.userData)
    const [state, setState] = useState(data)
    if (JSON.stringify(data) !== JSON.stringify(state)) { setState(data) }
    const quantity = (index, left) => {
        if (left === 'left') {
            state[index].quantity > 0 && dispart(counterSlice.actions.updatecart({ index: index, quantity: -1 }))

        } else {
            dispart(counterSlice.actions.updatecart({ index: index, quantity: 1 }))

        }
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
    //colSpan={2},#555555
    return (
        <div className="container" >
            <div style={{ backgroundColor: '#EEEEEE', height: '15rem', marginBottom: '30px', display: 'flex', flexDirection: 'row', padding: '2rem' }}>
                <div style={{ width: '50%', fontSize: '3rem', margin: 'auto 0px', fontStyle: 'italic' }}>
                    <h2>CART</h2>
                </div>
                <div style={{ width: '50%', textAlign: 'right', color: '#555555', margin: 'auto 0px', fontStyle: 'italic' }}>
                    <span>CART</span>
                </div>
            </div>
            <h4 style={{ margin: '2rem 0px' }}>SHOPPING CART:</h4>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '69%', marginRight: '1%' }}>
                    <div >
                        <Table hover >
                            <thead style={{ backgroundColor: '#f6f9f6', textAlign: 'center' }}>
                                <tr>
                                    <th><h5>IMAGE</h5></th>
                                    <th><h5>PRODUCT</h5></th>
                                    <th><h5>PRICE</h5></th>
                                    <th><h5>QUANTITY</h5></th>
                                    <th><h5>TOTAL</h5></th>
                                    <th><h5>REMOVE</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                {state ? state.map((e, index) => {
                                    return (
                                        <tr key={index} style={{ textAlign: 'center' }}>
                                            <td><Image src={e.item.img1} style={{ objectFit: 'contain', objectPosition: 'center', width: '100%', height: '5rem' }} /></td>
                                            <td><h4 style={{ width: '15rem', margin: '0px auto' }}>{e.item.name}</h4></td>
                                            <td>{numberhandle(e.item.price)}{' VND'}</td>
                                            <td>
                                                <button style={{ border: 'none', background: 'none' }}
                                                    onClick={() => quantity(index, 'left')}
                                                >
                                                    <span class="glyphicon glyphicon-triangle-left"></span>
                                                </button>
                                                {e.quantity}
                                                <button style={{ border: 'none', background: 'none' }}
                                                    onClick={() => quantity(index, 'right')}
                                                >
                                                    <span class="glyphicon glyphicon-triangle-right"></span>
                                                </button>
                                            </td>
                                            <td> {numberhandle(e.item.price * e.quantity) + ' VND'}</td>
                                            <td onClick={() => dispart(counterSlice.actions.deletecart(index))}><i class="fa fa-trash" ></i></td>
                                        </tr>
                                    )
                                }) : null}
                            </tbody>
                        </Table>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '50%' }}>
                            <Button style={{ fontSize: '12px', color: 'black', backgroundColor: 'white', border: '0px' }} onClick={() => pageNavigate('shop')}><i class="fa fa-mail-reply"></i> Continue Shopping</Button>

                        </div>
                        <div style={{ textAlign: 'right', width: '50%' }}>
                            <Button style={{ fontSize: '12px', color: 'black', backgroundColor: 'white', borderColor: 'black' }} onClick={() => pageNavigate('checkout')}>Proceed to CheckOut <i class="fa fa-mail-forward"></i></Button>
                        </div>
                    </div>
                </div>
                <div style={{ width: '30%', padding: '3.5rem', backgroundColor: '#f6f9f6' }}>
                    <h5 style={{ fontSize: '2rem', marginBottom: '10px', fontStyle: 'italic' }}>CART TOTAL</h5>
                    <div style={{ display: 'flex', flexDirection: 'row', borderBottom: '2px solid black' }}>
                        <div style={{ width: '50%', fontSize: '1.5rem', margin: '5px 0px', fontStyle: 'italic' }}>SUBTOTAL</div>
                        <div style={{ width: '50%', textAlign: 'right', fontSize: '1.5rem', margin: '5px 0px', fontStyle: 'italic' }}>{numberhandle(state.reduce((total, item) => { return total + (item.item.price * item.quantity) }, 0))}{' VND'}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
                        <div style={{ width: '50%', fontSize: '1.5rem', margin: '5px 0px', fontStyle: 'italic' }}>TOTAL</div>
                        <div style={{ width: '50%', textAlign: 'right', fontSize: '1.7rem', margin: '5px 0px', fontStyle: 'italic' }}>{numberhandle(state.reduce((total, item) => { return total + (item.item.price * item.quantity) }, 0))}{' VND'}</div>
                    </div>
                    <FormControl type="text" placeholder="Enter your coupon" />
                    <Button style={{ color: 'white', backgroundColor: '#444444', width: '100%', height: '3.5rem', borderColor: '#444444' }} type="text"  ><i class="fa fa-shopping-cart"></i> `Apply coupon`</Button>
                </div>
            </div>
        </div >
    )
}
export default Cart;

