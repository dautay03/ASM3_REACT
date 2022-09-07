import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router";

function Category() {
    const style1 = { padding: '5px', width: '50%' }
    const style2 = { padding: '5px', width: '33.33%' }
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    return (
        <div className="container" style={{
            padding: '0px',
            display: 'block',
            // backgroundColor: '#f5f5f7'
        }}>
            <div >
                <span style={{ textAlign: 'center', color: '#CCCCCC', display: 'block', fontSize: '2rem' }}>CAREFULLLY CREATED COLLECTIONS</span>
                <h3 style={{ textAlign: 'center', fontSize: '3.2rem', fontWeight: '500' }}>BROWSE OUR CATEGORIES</h3>
            </div>
            <div >
                <Image className="hover" src="image/product_1.png" style={style1} onClick={() => pageNavigate('shop')} />
                <Image className="hover" src="image/product_2.png" style={style1} onClick={() => pageNavigate('shop')} />
            </div>
            <div>
                <Image className="hover" src="image/product_3.png" style={style2} onClick={() => pageNavigate('shop')} />
                <Image className="hover" src="image/product_4.png" style={style2} onClick={() => pageNavigate('shop')} />
                <Image className="hover" src="image/product_5.png" style={style2} onClick={() => pageNavigate('shop')} />
            </div>
        </div >
    )
}
export default Category;