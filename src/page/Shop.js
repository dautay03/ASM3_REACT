import React, { memo } from "react";
import { useDispatch } from "react-redux";
import counterSlice from "../reducer/reducer";
import CategoryProductShop from '../component/shopComponent/catoryProduceShop'
function Shop() {
    console.log('shop')
    const dispart = useDispatch()
    const h6 = { backgroundColor: '#DDDDDD', height: '30px', padding: '6px 0px 6px 15px', fontSize: '1.5rem', fontWeight: '500' }
    const clickSpan = (e) => {
        document.querySelectorAll('.span').forEach((e) => e.style.color = 'black')
        e.target.style.color = '#FF9900'
        console.log(e.target, e.target.getAttribute('name'))
        dispart(counterSlice.actions.fitercategory(e.target.getAttribute('name')))
    }
    const changeInput = (e) => {
        dispart(counterSlice.actions.filterSearch(e.target.value))
        console.log(e.target.value)
    }
    return (
        <div className="container">
            <div style={{ backgroundColor: '#EEEEEE', height: '15rem', marginBottom: '30px', display: 'flex', flexDirection: 'row', padding: '2rem' }}>
                <div style={{ width: '50%', fontSize: '3rem', margin: 'auto 0px', fontStyle: 'italic' }}>
                    <h2>SHOP</h2>
                </div>
                <div style={{ width: '50%', textAlign: 'right', color: '#555555', margin: 'auto 0px', fontStyle: 'italic' }}>
                    <span>SHOP</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <div style={{ width: '20%' }}>
                    <h4 style={{ fontSize: '2rem', fontWeight: '500' }}>CATEGORIES</h4>
                    <h6 style={{
                        backgroundColor: 'black',
                        color: 'white',
                        height: '30px',
                        padding: '3px 0px 3px 15px',
                        margin: '0px',
                        fontSize: '2rem',
                        fontWeight: '500'
                    }}>APPLE</h6>
                    <span name='all' className="span" onClick={(e) => clickSpan(e)} style={{ color: '#FF9900' }}>ALL</span>
                    <h6 style={h6}>IPHONE & MAC</h6>
                    <span name={'iphone'} className="span" onClick={(e) => clickSpan(e)}>IPhone</span>
                    <span name='ipad' className="span" onClick={(e) => clickSpan(e)}>IPad</span>
                    <span name='macbook' className="span" onClick={(e) => clickSpan(e)}>Macbook</span>
                    <h6 style={h6}>WIRELESS</h6>
                    <span name='airpod' className="span" onClick={(e) => clickSpan(e)}>Airpod</span>
                    <span name='watch' className="span" onClick={(e) => clickSpan(e)}>Watch</span>
                    <h6 style={h6}>OTHER</h6>
                    <span name='mouse' className="span" onClick={(e) => clickSpan(e)}>Mouse</span>
                    <span name='keyboard' className="span" onClick={(e) => clickSpan(e)}>Keyboard</span>
                    <span name='other' className="span" onClick={(e) => clickSpan(e)}>Other</span>
                </div>
                <div style={{ width: '75%', marginLeft: '3%' }}>
                    <input placeholder="Enter Search Here!"
                        style={{
                            height: '35px',
                            width: '200px',
                            display: 'block',
                            marginBottom: '15px'
                        }} onChange={(e) => changeInput(e)} />
                    <CategoryProductShop />
                </div>
            </div>
        </div >
    )
}
export default memo(Shop);