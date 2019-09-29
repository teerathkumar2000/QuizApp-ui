import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { Paper, OutlinedTextFields, ButtonPage } from "../../../Components"
import Grid from '@material-ui/core/Grid';
import './Login.css'

export default class AdminLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",

        }
    }

    render() {
        return (
            <div>
                <MDBNavbar color="mdb-color" dark>
                    <MDBNavbarBrand href="#">
                        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="" />
                    </MDBNavbarBrand>
                </MDBNavbar>

                <div className="paper">

                    <Grid justify='center' container spacing={3}>
                        <Grid item xs={12} sm={12} md={8} lg={5}>
                            <Paper >
                                <div >
                                    <h3 className="adminlogin">Admin-Login</h3>
                                </div>
                                <div className="input">
                                    < OutlinedTextFields name='Email' type='email' label="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                    < OutlinedTextFields name='Password' type='password' label="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                </div>
                                <div className="Loginbtn">
                                    <ButtonPage color="mdb-color" >Login</ButtonPage>

                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}