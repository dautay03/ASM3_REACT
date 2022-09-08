import React from "react";
import { CardImg, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../../reducer/reducer";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

function CategoryProduct() {
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    const dispart = useDispatch()
    const data = useSelector((state) => state.categoryProduce)
    const modalState = useSelector((state) => state.modal)
    console.log(modalState)
    const style = { width: '25%', padding: '5px', display: 'inline-block' }
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
    console.log(data)
    return (
        <div className="container" style={{ padding: '0px' }}>
            {
                data ? data.map((item) => {

                    return (
                        <div
                            key={item._id.$oid}
                            style={style}
                            onClick={() => dispart(counterSlice.actions.showModal({
                                item: item,
                                modal: true
                            }))}
                        >
                            <CardImg src={`${item.img1}`} alt={`${item.name}`} />
                            <div style={{ width: '86%', margin: 'auto', height: '45px', textAlign: 'center', display: 'block' }}><span style={{ wordWrap: 'break-word', fontSize: '1.5rem' }}>{item.name}</span></div>
                            <div style={{ textAlign: 'center', fontSize: '1rem' }}><span>{numberhandle(item.price)}</span></div>
                        </div>

                    )
                }) : ''
            }

            <Modal
                show={modalState.modal} onHide={() =>
                    dispart(counterSlice.actions.onhideModal(
                        {
                            item: '',
                            modal: false
                        }
                    ))}
                size="lg"
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                animation={false}
                centered
                style={{ animation: 'scaleUp 0.5s' }}
            >
                <Modal.Header style={{ borderBottom: '0px' }} closeButton>

                </Modal.Header>
                <Modal.Body >
                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                        <div style={{ width: '50%' }}><Image src={modalState.item.img1} width='100%' /></div>
                        <div style={{ width: '50%', padding: '4rem', fontStyle: 'italic', }}>
                            <h4 style={{ display: 'block', margin: '10px 0px', fontSize: '2.3rem', marginBottom: '10px' }}> {modalState.item.name}</h4>
                            <span style={{ fontSize: '1.5rem' }}>{modalState.item.price && numberhandle(modalState.item.price) + ' VND'}</span>
                            <span style={{ display: 'block', margin: '10px 0px', color: 'GrayText', }}>{modalState.item.short_desc}</span>
                            <Button variant="primary" onClick={() => {
                                pageNavigate(`detail/${modalState.item._id.$oid}`);
                                dispart(counterSlice.actions.onhideModal(
                                    {
                                        item: '',
                                        modal: false
                                    }
                                ))
                            }}>
                                <i className="fa fa-shopping-cart"></i> VIEW DETAILS
                            </Button>
                        </div>

                    </div>
                </Modal.Body>

            </Modal>
        </div >
    )
}
export default CategoryProduct;