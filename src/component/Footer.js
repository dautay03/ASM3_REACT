import React from "react";
import { NavLink } from "react-bootstrap";

function FooterComponent() {
    return (
        <div className="container-fuild" style={{ backgroundColor: 'black', marginTop: '10px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-1" style={{ padding: '10px', color: 'white' }}></div>
                    <div className="col-md-4" style={{ padding: '10px', color: 'white' }}>
                        <h6>CUSTOMER SERVICES</h6>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Help & Contact Us</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Returns & Refunds</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Online Stores</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Terms & Conditions</NavLink>

                    </div>
                    <div className="col-md-4" style={{ padding: '10px', color: 'white' }}>
                        <h6>COMPANY</h6>
                        <NavLink href='#' style={{ fontWeight: '200' }}>What We Do</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Available Services</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Lastest Posts</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>FAQs</NavLink>

                    </div>
                    <div className="col-md-3" style={{ padding: '10px', color: 'white' }}>
                        <h6>SOCIAL MEDIA</h6>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Twiter</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Instagram</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Facebook</NavLink>
                        <NavLink href='#' style={{ fontWeight: '200' }}>Pinterest</NavLink>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterComponent;

