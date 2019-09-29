import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './Login.css';
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
                                            <strong>Sign in</strong>
                                        </h3>
                                    </div>
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
                                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                                        Forgot
                <a href="#!" className="blue-text ml-1">

                                            Password?
                </a>
                                    </p>
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
                                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                                        or Sign in with:
              </p>
                                    <div className="row my-3 d-flex justify-content-center">
                                        <MDBBtn size='sm' color="blue" social="fb" onClick={this.loginWithFacebook}>
                                            <MDBIcon fab icon="facebook-f" className="pr-1" /> Login With Facebook
                </MDBBtn>
                                        <MDBBtn size='sm' color="red" social="gplus">
                                            <MDBIcon fab icon="google-plus-g" className="pr-1" /> Login with Google &nbsp;
                </MDBBtn>
                                    </div>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                                        <Link to='/' className="blue-text ml-1">SignUp</Link>

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