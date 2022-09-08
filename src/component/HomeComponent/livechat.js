import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function LiveChat() {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show)
    return (
        <>
            <div style={{
                width: '40rem',
                height: '40rem',
                border: '1px solid black',
                position: 'fixed',
                borderRadius: '7px',
                right: '120px',
                bottom: '100px',
                boxShadow: ' 10px #888888',
                display: show ? 'block' : 'none',
                backgroundColor: 'white',
                animation: 'scaleUp 0.5s'
            }}>
                <div style={{ borderBottom: '1px solid black', padding: '10px', height: '12%' }}>
                    <h5 style={{ display: 'inline-block', fontSize: '1.8rem' }}>Customer Support</h5>
                    <div style={{ backgroundColor: '#DDDDDD', float: 'right', padding: '5px' }}>let's Chat App</div>
                </div>
                <div style={{ height: '76%', borderBottom: '1px solid black' }}>
                    <div style={{ float: 'right', backgroundColor: '#3399FF', margin: '5px 80px 5px 40px', padding: '5px', color: 'white', display: 'block', fontSize: '1.5rem' }}>xin chào </div>
                    <div style={{ float: 'right', backgroundColor: '#3399FF', margin: '5px 80px 5px 80px', padding: '5px', color: 'white', display: 'block', fontSize: '1.5rem' }}>làm thế nào để xem các sản phẩm</div>
                    <div>
                        <i class="fa fa-user" style={{ border: '1px solid ', float: 'left', padding: '5px', fontSize: '20px', margin: '5px', backgroundColor: '#EEEEEE', borderRadius: '5px' }}></i><div style={{ float: 'left', backgroundColor: '#EEEEEE', margin: '5px 190px 5px 10px', padding: '5px', color: 'black', display: 'inline-block', fontSize: '1.5rem' }}>ADMIN: chào bạn</div>
                    </div>
                    <div>
                        <i class="fa fa-user" style={{ border: '1px solid ', float: 'left', padding: '5px', fontSize: '20px', margin: '5px', backgroundColor: '#EEEEEE', borderRadius: '5px' }}></i><div style={{ float: 'left', backgroundColor: '#EEEEEE', margin: '5px 20px 5px 10px', padding: '5px', color: 'black', display: 'inline-block', fontSize: '1.5rem', width: '80%' }}>ADMIN: bạn có thể vào mục Shop để xem các sản phẩm</div>
                    </div>

                </div>
                <div>
                    <i class="fa fa-user" style={{ border: '1px solid ', padding: '5px', fontSize: '20px', margin: '5px', backgroundColor: '#EEEEEE', borderRadius: '5px' }}></i>
                    <input style={{ margin: '5px', width: '220px', fontSize: '1.5rem', border: 'none', }} placeholder='Enter Message!' />
                    <i class="fa fa-paperclip"></i>
                    <i class="fa fa-meh-o" style={{ margin: '0px 5px' }}></i>

                    <i class="fa fa-send" style={{ color: 'blue' }}></i>

                </div>

            </div>

            <Button class='chat'
                style={{
                    border: '1px solid black',
                    borderRadius: '20px',
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    boxShadow: '5px 5px 18px #888888',
                    backgroundColor: 'white'
                }}
                onClick={toggle}
            ><i class="fa fa-whatsapp" style={{ fontSize: '30px', color: 'black', }}></i>
            </Button>
        </>
    );
}

export default LiveChat;