import React, { Component } from 'react';
import { Dropdown, Modal, Button, ModalFooter, ModalBody } from 'react-bootstrap';
import OtpInput from 'react-otp-input';

const OtpModal = (props) => {
    return (

        <div>
            <Modal show={true} onHide={props.onClickCancel1} className="custom_modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.allText && props.allText.mobile_verification}</Modal.Title>
                  
                    
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={props.handleOnSubmitForm}>
                        <h4 style = {{color:"gray"}}>Enter the code sent to : </h4>
                        <h5 style={{color:"gray"}}>{props.mobileText}</h5>
                        <div className="otpContainer">
                            <OtpInput
                                onChange={props.onChange}
                                value = {props.value}
                                numInputs={6}
                                inputStyle={{ width: "50px", border: "none",
                                borderBottom: "3px solid rgb(92, 187, 206)" }}
                                focusStyle = {{border: "none",
                                borderBottom: "3px solid rgb(92, 187, 206)" }}
                                separator={<span> &nbsp;&nbsp;</span>}
                            />
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="form-group">
                        <button type="button" className="btn btn-danger" onClick={props.onClickCancel}>Cancel</button>&nbsp;&nbsp;
                                    <button type="button" name="save" className="btn btn-primary S" onClick={props.handleSubmitOtp}>Submit</button>
                    </div>


                </Modal.Footer>


            </Modal>
        </div>
    )
}
export default OtpModal;







