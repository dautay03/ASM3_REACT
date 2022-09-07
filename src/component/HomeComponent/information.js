import React from "react";
import { Button } from "react-bootstrap";
function Information() {
    const styleDivContent = {
        width: '33.33%', verticalAlign: 'middle',
        display: 'inline-block',
        textAlign: 'center',
        height: '130px',
        padding: '50px',

    }
    // '#f8f9fa'
    return (
        <div className="container" >
            <div style={{ backgroundColor: '#EEEEEE', display: 'block' }}>
                <div style={styleDivContent}>
                    <h4 className="italic">FREE SHIPPING</h4>
                    <span className="italic">Free shipping worlwine</span>
                </div>
                <div style={styleDivContent}>
                    <h4 className="italic">24 X 7 SERVICE</h4>
                    <span className="italic">Free shipping worlwine</span>
                </div>
                <div style={styleDivContent}>
                    <h4 className="italic">FESTIVAL OFFER</h4>
                    <span className="italic">Free shipping worlwine</span>
                </div>
            </div >
            <div style={{ marginBottom: '30px' }}>
                <div style={{ width: '50%', height: '100px', display: 'inline-block', paddingTop: '50px' }}>
                    <h4 className="italic">LET'S BE FRIENDS!</h4>
                    <span className="italic">Nisi nisi tempor consequat laboris nisi.</span>
                </div>
                <div style={{ width: '50%', height: '100px', display: 'inline-block', paddingTop: '50px' }}>
                    <input style={{ height: '100%', border: '1px solid black', width: '80%', paddingLeft: '20px' }} placeholder="Enter your email address" />
                    <Button style={{ backgroundColor: 'black', color: 'white', height: '100%', width: '20%', borderColor: 'black' }}>Subscribe</Button>
                </div>
            </div>
        </div >
    )
}
export default Information;