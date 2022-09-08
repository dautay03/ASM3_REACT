import React, { useEffect, useState } from "react";
import { CardImg, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { saveToLocalStorage } from "../data/localstorage";
import counterSlice from "../reducer/reducer";

function DetailProduct() {
    const dispart = useDispatch()
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    const usercart = useSelector((State) => State.userData)
    saveToLocalStorage('usedata', usercart)
    console.log('usedata', usercart)
    const style = { width: '25%', padding: '5px', display: 'inline-block', borderRadius: '5px' }
    const img = { width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }
    const para = useParams().ID
    const data = useSelector((state) => state.categoryProduce)
    const [state, setState] = useState('')
    const [quantity, setQuantity] = useState(1)
    const item = data.filter((e) => {
        return e._id.$oid === para
    })

    console.log('state', state)
    useEffect(() => { if (JSON.stringify(item) !== JSON.stringify(state)) { setState(item) } }, [item])

    const numberhandle = (num) => {
        let str = num.toString()
        let result = str.split('');
        result.reverse()
        result.splice(3, 0, '.');
        if (str.length > 7) {
            result.splice(7, 0, '.')
        }
        result.reverse()
        return result.join('')
    }
    const addtoCart = () => {
        const check = usercart.length ? usercart.filter((e, index) => { if (e.item._id.$oid === state[0]._id.$oid) { setQuantity(1); dispart(counterSlice.actions.updatecart({ index: index, quantity: quantity })) }; return e.item._id.$oid === state[0]._id.$oid }) : []
        console.log(check)
        if (!check.length) {
            setQuantity(1)
            dispart(counterSlice.actions.addcart({
                item: state[0],
                quantity: quantity
            }))

        }
    }


    return (<>{state && state.length !== 0 ?
        <div className="container">
            <div style={{ height: '32rem', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '12%', paddingLeft: '1rem', }}>
                    <div style={{ padding: '0.2rem', height: '8rem', width: '100%' }}><Image className="imageRigth" src={state[0].img1} style={img} /></div>
                    <div style={{ padding: '0.2rem', height: '8rem', width: '100%' }}><Image className="imageRigth" src={state[0].img2} style={img} /></div>
                    <div style={{ padding: '0.2rem', height: '8rem', width: '100%' }}><Image className="imageRigth" src={state[0].img3} style={img} /></div>
                    < div style={{ padding: '0.2rem', height: '8rem', width: '100%' }}><Image className="imageRigth" src={state[0].img4} style={img} /></div>
                </div >
                <div style={{ height: '32rem', width: '28%' }}><Image src={state[0].img1} style={img} /></div>
                < div style={{ height: '32rem', width: '40%', padding: '15px' }}>
                    <h2 h2 style={{ fontWeigth: '500', fontStyle: 'italic', fontSize: '2.5rem' }
                    }> {state[0].name}</h2>
                    <h6 style={{ fontSize: '12px', fontStyle: 'italic', fontWeight: '200', margin: '20px 0px' }}>{numberhandle(state[0].price) + ' VND'}</h6>
                    <p style={{ whiteSpace: 'pre-line', fontStyle: 'italic', fontWeight: '200', display: 'block' }}>{state[0].short_desc}</p>
                    <h6 style={{ fontStyle: 'italic', fontWeight: '700', margin: '16px 0px', display: 'inline-block' }}>CATEGORY:</h6><span style={{ fontStyle: 'italic' }}>{' watchs'}</span>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ border: '1px solid gray', width: '11rem', padding: '2px' }}>
                            <span style={{ color: 'gray', }}>QUANTITY</span>
                            <button style={{ border: 'none', background: 'none' }} onClick={() => { if (quantity > 1) { setQuantity(quantity - 1) } }}><span class="glyphicon glyphicon-triangle-left"></span></button>
                            <span >{quantity}</span>
                            <button style={{ border: 'none', background: 'none' }} onClick={() => { setQuantity(quantity + 1) }}><span class="glyphicon glyphicon-triangle-right"></span></button>
                        </div>
                        <button style={{ backgroundColor: '#222222', color: 'white' }} onClick={() => addtoCart()}>Add to cart</button>
                    </div>
                </div >
            </div >
            <div style={{ width: '50%', margin: '20px 0px', }} >
                <button style={{ backgroundColor: '#222222', color: 'white', fontStyle: 'italic', display: 'block', margin: '20px 0px', padding: '5px' }} onClick={() => { }}>DESCRIPTION</button>
                <h5 style={{ fontStyle: 'italic' }}>PRODUCT DESCRIPTION</h5>
                <div style={{ fontStyle: 'italic', fontWeight: '200', }}>{`${state[0].long_desc}`}</div>
            </div>
            <div >
                <h5 style={{ fontStyle: 'italic', margin: '20px 0px' }}>RELATED PRODUCT</h5>
                {data.filter((e) => {
                    return e.category == state[0].category && e.name !== state[0].name
                }).map((item) => {
                    return (
                        <div
                            key={item._id.$oid}
                            style={style}
                            onClick={() => pageNavigate(`detail/${item._id.$oid}`)}
                        >
                            <CardImg src={`${item.img1}`} alt={`${item.name}`} />
                            <div style={{ width: '86%', margin: 'auto', height: '45px', textAlign: 'center', display: 'block' }}><span style={{ wordWrap: 'break-word', fontSize: '1.5rem' }}>{item.name}</span></div>
                            <div style={{ textAlign: 'center', fontSize: '1rem' }}><span>{numberhandle(item.price)}</span></div>
                        </div>
                    )
                })}
            </div>

        </div > : null
    }
    </>
    )
}
export default DetailProduct;