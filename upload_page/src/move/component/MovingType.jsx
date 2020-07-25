import React, { useState} from 'react';

import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";

const MovingType = () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="pink" onClick={onClickShow}>
                Custom Width Modal
            </MDBBtn>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        이사종류
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={"https://image.flaticon.com/icons/svg/888/888448.svg"} type={"button"} aria-setsize={"10"}/>
                    <img src={"https://image.flaticon.com/icons/svg/1625/1625514.svg"} type={"button"}/>
                    <img src={"https://image.flaticon.com/icons/svg/3023/3023392.svg"}type={"button"}/>
                    <img src={"https://image.flaticon.com/icons/svg/948/948615.svg"}type={"button"}/>


                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingType;