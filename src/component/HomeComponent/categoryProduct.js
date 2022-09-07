import React from "react";
import { CardImg } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../../reducer/reducer";
import ModalComponent from "./modal";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CategoryProduct() {
    const dispart = useDispatch()
    const data = useSelector((state) => state.categoryProduce)
    const modalState = useSelector((state) => state.modal)
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

            {/* <ModalComponent
                show={modalState.modal}
                onHide={() =>
                    dispart(counterSlice.actions.onhideModal(
                        {
                            item: '',
                            modal: false
                        }
                    ))}
                item={modalState.item} /> */}
            <Modal
                show={modalState.modal} onHide={() =>
                    dispart(counterSlice.actions.onhideModal(
                        {
                            item: '',
                            modal: false
                        }
                    ))}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() =>
                        dispart(counterSlice.actions.onhideModal(
                            {
                                item: '',
                                modal: false
                            }
                        ))}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}
export default CategoryProduct;