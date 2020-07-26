import React, { useState,useReducer} from 'react';
import {Modal} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";
import { DatePicker, RangePicker, theme } from 'react-trip-date';
import {ThemeProvider} from 'styled-components';
import './MovingType.css'


const  handleResponsive  =  setNumberOfMonth  =>  {
    let  width  =  document.querySelector('.tp-calendar').clientWidth;
    if  (width  >  900)  {
        setNumberOfMonth(3);
    }  else  if  (width  <  900  &&  width  >  580)  {
        setNumberOfMonth(2);
    }  else  if  (width  <  580)  {
        setNumberOfMonth(1);
    }
};

const  Day = ({  day  }) => {
    return  (
        <>
            <p  className="date">{day.format('DD')}</p>
            <p  className="date">7</p>
        </>
    );
};

const MovingDate = () => {
    const onChangeDate = date => console.log(date)
    const [show, setShow] = useState(false);
    const [Title,setTitle]=useState("")
    const onClickShow=e=>{
        setShow(!show)
    }
    return (
        <>
            <MDBBtn color="pink" onClick={onClickShow}>
               이사날짜
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
                        이사날짜
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <ThemeProvider theme={theme}>
                            <DatePicker
                                handleChange={onChangeDate}
                                selectedDays={""} //initial selected days
                                jalali={false}
                                numberOfMonths={2}
                                numberOfSelectableDays={2} // number of days you need
                                disabledDays={['2020-8-02']} //disabeld days
                                responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
                                disabledBeforToday={true}
                                disabled={false} // disable calendar
                                dayComponent={Day} //custom day component
                                titleComponent={Title} // custom title of days
                            />
                        <h3>날짜는</h3>
                        </ThemeProvider>
                    </div>


                </Modal.Body>
            </Modal>
        </>
    );
}


export default MovingDate;