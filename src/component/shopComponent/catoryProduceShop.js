import React from "react";
import { CardImg } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function CategoryProductShop() {
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    const data = useSelector((state) => state.categoryProduce)
    const style = { width: '33.33%', padding: '5px', display: 'inline-block' }
    const filtercategory = useSelector((state) => state.categoryFilter.filterCategory)
    const filterSearch = useSelector((state) => state.categoryFilter.filterSearch)
    const numberhandle = (num) => {
        let str = num.toString()
        let result = str.split('');
        result.reverse()
        result.splice(3, 0, '.');
        if (str.length > 6) {
            result.splice(7, 0, '.')
        }
        result.reverse()
        return result.join('')
    }

    return (
        <div className="container" style={{ padding: '0px' }}>
            {
                data
                    .filter((e) => filtercategory === 'all' ? e : e.category === filtercategory)
                    .filter((e) => {
                        return filterSearch ? e.name.indexOf(filterSearch.toLowerCase()) !== -1 || e.name.indexOf(filterSearch.toUpperCase()) !== -1 ? true : false : true
                    })
                    .map((item) => {
                        return (
                            <>{item ?
                                <div
                                    key={item._id.$oid}
                                    style={style}
                                    onClick={() => pageNavigate(`detail/${item._id.$oid}`)}
                                >
                                    <CardImg src={`${item.img1}`} alt={`${item.name}`} />
                                    <div style={{
                                        width: '86%',
                                        margin: 'auto',
                                        height: '45px',
                                        textAlign: 'center',
                                        display: 'block'
                                    }}><span style={{ wordWrap: 'break-word', fontSize: '1.5rem' }}>{item.name}</span></div>
                                    <div style={{ textAlign: 'center', fontSize: '1rem' }}><span>{numberhandle(item.price)}</span></div>
                                </div> : ''

                            }</>
                        )
                    })
            }
        </div >
    )
}
export default CategoryProductShop;