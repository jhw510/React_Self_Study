import React, { useState} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";


const MovingEndPoint= () => {
    const [show, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="pink" onClick={onClickShow}>
                도착지
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
                        도착지역
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <a className="list">
                        <MDBBtn onClick>서울</MDBBtn>
                        <MDBBtn onClick>경기</MDBBtn>
                        <MDBBtn onClick>인천</MDBBtn>
                        <MDBBtn onClick>대전</MDBBtn>
                        <MDBBtn onClick>광주</MDBBtn>
                        <MDBBtn onClick>대구</MDBBtn>
                        <MDBBtn onClick>부산</MDBBtn>
                        <MDBBtn onClick>울산</MDBBtn>
                        <MDBBtn onClick>충북</MDBBtn>
                        <MDBBtn onClick>충남</MDBBtn>
                        <MDBBtn onClick>전북</MDBBtn>
                        <MDBBtn onClick>전남</MDBBtn>
                        <MDBBtn onClick>경북</MDBBtn>
                        <MDBBtn onClick>경남</MDBBtn>
                        <MDBBtn onClick>강원</MDBBtn>
                        <MDBBtn onClick>제주</MDBBtn>
                        <MDBBtn onClick>세종</MDBBtn>
                    </a>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingEndPoint;