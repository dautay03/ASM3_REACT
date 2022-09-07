'use strict'
import React from "react";
import { Container, Navbar, } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getTolocalStorage, removeTolocalStorage } from "../data/localstorage";
function NavbarComponent() {
    const userCurrent = getTolocalStorage('userCurrent')
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    const logout = () => {
        pageNavigate('login')
        removeTolocalStorage('userCurrent')
    }
    return (
        <div className="navbar">
            <Container>
                <div className="col-md-4">
                    <Navbar className="me-auto">
                        <span onClick={() => pageNavigate('')} style={{ fontStyle: 'italic', color: '#FF9933', fontSize: '2rem' }}>Home</span>
                        <span onClick={() => pageNavigate('shop')} style={{ marginLeft: '8px', fontStyle: 'italic', fontSize: '2rem' }}>Shop</span>
                    </Navbar>
                </div>
                <div className="col-md-4">
                    <h4 style={{ textAlign: 'center', fontStyle: 'italic', fontWeight: '350', fontSize: '3rem' }}>BOUTIQUE</h4>
                </div>
                <div className="col-md-4 ">
                    <Navbar className="justify-content-end" >
                        <span onClick={() => pageNavigate('cart')} style={{ fontStyle: 'italic', fontSize: '2rem' }}><i className="fa fa-shopping-cart"></i>{' Cart'}</span>
                        {userCurrent ?
                            <>
                                <span style={{ marginLeft: '8px', fontStyle: 'italic', fontSize: '2rem' }}><i className="fa fa-user"></i>{' '}{userCurrent.name}</span>
                                <span style={{ marginLeft: '8px', fontStyle: 'italic', fontSize: '2rem' }} onClick={() => logout()}>(logout)</span>
                            </>
                            :
                            <span onClick={() => pageNavigate('login')} style={{ marginLeft: '8px', fontStyle: 'italic',fontSize: '2rem' }}><i className="fa fa-user-plus"></i>{' '}Login</span>

                        }
                    </Navbar>
                </div>
            </Container >
        </div >
    )
}
export default NavbarComponent;




