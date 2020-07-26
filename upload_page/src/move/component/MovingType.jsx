import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";
import './MovingType.css'

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
                size={"lg"}
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
                    <img className={"mtPhoto"} src={"https://image.flaticon.com/icons/svg/888/888448.svg"} type={"button"}/>
                    <h3>보관이사</h3>
                    <img className={"mtPhoto"}  src={"https://image.flaticon.com/icons/svg/1625/1625514.svg"} type={"button"}/>
                    <h3>사무실이사</h3>
                    <img className={"mtPhoto"} src={"https://image.flaticon.com/icons/svg/3023/3023392.svg"}type={"button"}/>
                    <h3>우리집이사</h3>
                    <img className={"mtPhoto"} src={"https://image.flaticon.com/icons/svg/948/948615.svg"}type={"button"}/>
                    <h3>소형이사</h3>


                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingType;