import React from "react";
import { Paper } from '../../Components'
import Grid from '@material-ui/core/Grid';
import { ButtonAppBar } from '../../Components/Navbar/Navbar'
import { ButtonNew } from '../../Components/index'



class QuizRender extends React.Component {
    constructor() {
        super();
        this.state = {
            value: true
        }
    }
    next() {
        this.setState({ value: false })
    }
    render() {
        return (
            <div>
                <ButtonAppBar />
                {this.state.value ?
                    <div style={{ padding: "20px" }}>
                        <Grid justify='center' container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Paper >
                                    <div >
                                        <p style={{ textAlign: 'right', marginRight: '2%' }}>Time Left : 10:00</p>
                                        <h5 style={{ textAlign: 'left', padding: '10px 5px', }}>
                                            <strong style={{ fontWeight: 'bold' }}>1) </strong>
                                            <span style={{ fontWeight: 'bolder' }}>What is your Name?</span>
                                        </h5>
                                        <div style={{ marginLeft: '2%' }}>
                                            <p>
                                                <input type="radio" />
                                                <span style={{ fontWeight: 'bolder' }}> Sagar</span>
                                            </p>
                                            <p>
                                                <input type="radio" />
                                                <span style={{ fontWeight: 'bolder' }}> Darpan</span>
                                            </p>
                                            <p>
                                                <input type="radio" />
                                                <span style={{ fontWeight: 'bolder' }}> Teerath</span>
                                            </p>
                                            <p>
                                                <input type="radio" />
                                                <span style={{ fontWeight: 'bolder' }}> Rashid</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right', marginRight: '2%' }}>
                                        <ButtonNew style={{ background: '#3F51B5', color: '#fff' }} onClick={this.next.bind(this)} Name="Next" />
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                    :
                    <div>
                        <Grid justify='center' container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Paper >
                                    <div style={{ textAlign: 'center' }}>
                                        <h5 style={{ padding: '10px 5px', }}>
                                            <strong style={{ fontWeight: 'bold' }}>Result</strong>
                                        </h5>
                                        <div style={{ marginLeft: '2%' }}>
                                            <p>
                                                <span style={{ fontWeight: 'bolder', color: 'green', fontSize: '1.5em' }}>'Congratulations! Your are passed '</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right', marginRight: '2%' }}>
                                        <ButtonNew style={{ background: '#3F51B5', color: '#fff' }} onClick={()=>this.setState({value:true})} Name="Re-Take" />
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}

export default QuizRender