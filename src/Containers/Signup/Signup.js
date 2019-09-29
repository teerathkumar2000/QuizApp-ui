import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './Signup.css';
import { ButtonAppBar } from '../../Components/Navbar/Navbar'
import { Link } from "react-router-dom"

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
        };
    }




    render() {
        return (
            <div>
                <div style={{ marginBottom: '3% ' }}>
                    <ButtonAppBar />
                </div>
                <MDBContainer >
                    <MDBRow center >
                        <MDBCol md="5" >
                            <MDBCard>
                                <MDBCardBody className="mx-4">
                                    <div className="text-center">
                                        <h3 className="dark-grey-text mb-5">
                                            <strong>Sign Up</strong>
                                        </h3>
                                    </div>
                                    <div className="row my-3 d-flex justify-content-center">
                                        <MDBBtn size='sm' color="blue" social="fb" onClick={this.loginWithFacebook}>
                                            <MDBIcon fab icon="facebook-f" className="pr-1" /> Login With Facebook
                                        </MDBBtn>
                                        <MDBBtn size='md' color="red" social="gplus">
                                            <MDBIcon fab icon="google-plus-g" className="pr-1" /> Login with Google &nbsp;
                                        </MDBBtn>
                                    </div>
                                    <p style={{ fontSize: '1.2em' }} className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                                        <strong>or Sign in with:</strong>
                                    </p>
                                    <MDBInput
                                        label="UserName"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your email"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your password"
                                        group
                                        type="password"
                                        validate
                                        containerClass="mb-0"
                                    />
                                    <MDBInput
                                        group
                                        type="file"
                                        validate
                                        error="wrong"
                                        success="right"
                                        style={{ border: 'none', borderBottom: '1px solid #E7E9EC' }}
                                    />
                                    <div className="text-center mb-3">
                                        <MDBBtn
                                            type="button"
                                            gradient="#59698D"
                                            rounded
                                            className="btn-block z-depth-1a"
                                            style={{ backgroundColor: '#59698D', color: 'white' }}
                                        >
                                            Submit
                </MDBBtn>

                                    </div>

                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Already Account?
                <Link to='/login' className="blue-text ml-1">Login</Link>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

        );
    }
};

export default Login;