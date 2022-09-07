import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent(props) {
    const { item } = props
    console.log(props.show)
    //   < Modal show = { props.show } onHide = { props.onHide } size = "lg"
    { /*     <div style={{ display: 'flex', flexDirection: 'row', }}>
    <div style={{ width: '50%' }}><Image src={item.img1} /></div>
    <div style={{ width: '50%' }}>
        <h4>{item.name}</h4>

        <Button variant="primary" onClick={props.onHide}>
            Save Changes
        </Button>
    </div>

</div>     */ }
    return (
        <div></div>
    );
}

export default ModalComponent;