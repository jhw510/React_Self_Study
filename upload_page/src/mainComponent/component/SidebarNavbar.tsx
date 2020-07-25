import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBInput,MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink,
    MDBDropdown, MDBDropdownToggle, MDBCollapse, MDBIcon,} from "mdbreact";
import Estimate from "../../move/component/Estimate";
import {Route,Link} from 'react-router-dom'
const SidebarNavbar = () => {
    const [toggleStateA,setToggleStateA]=useState(false)
    const mainStyle = {
        paddingTop: "4rem"
    }
    const specialCaseNavbarStyles = {
        WebkitBoxOrient: "horizontal",
        flexDirection: "row"
    };
    const onClickHandleToggle=e=>{
        setToggleStateA(!toggleStateA)
    }
    return (
        <div>
            <Router>
                <div className="grey-skin">

                    <MDBNavbar double expand="md">
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <div
                                    onClick={onClickHandleToggle}
                                    key="sideNavToggleA"
                                    style={{
                                        lineHeight: "32px",
                                        marginRight: "1em",
                                        verticalAlign: "middle"
                                    }}
                                >
                                    <MDBIcon icon="bars" color="white" size="2x" />
                                </div>

                            </MDBNavItem>

                        </MDBNavbarNav>

                        <MDBNavbarNav right style={specialCaseNavbarStyles}>
                            <MDBNavItem active>
                                <MDBNavLink to="#!">
                                    <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Contact</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Support</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <MDBIcon icon="user" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Account</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Dropdown</div>
                                    </MDBDropdownToggle>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBNavbar>
                    <MDBCollapse isOpen={toggleStateA} navbar>
                        <MDBNavbarNav right>
                            <MDBInput
                                type="text"
                                hint="Search"
                                style={{
                                    color: "#fff",
                                    padding: "0 10px 8px 30px",
                                    boxSizing: "border-box"
                                }}
                            />
                            <MDBNavItem active>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>

                                <Link to={"/estimate"}>이사견적보기</Link>

                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/movingType">이사타입</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Profile</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Profile</MDBNavLink>
                            </MDBNavItem> <MDBNavItem>
                            <MDBNavLink to="#!">Profile</MDBNavLink>
                        </MDBNavItem>
                            
                            
                        </MDBNavbarNav>
                    </MDBCollapse>

                </div>
            </Router>
        </div>
    );
};

export default SidebarNavbar;