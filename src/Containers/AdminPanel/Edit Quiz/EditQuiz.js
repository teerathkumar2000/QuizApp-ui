import React from "react";
import './EditQuiz.css'
import { Navbar, Paper, DropdownPage, ButtonPage } from '../../../Components/index'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Table } from '../../../Components/index'






class EditQuizUi extends React.Component {
    constructor() {
        super()
        this.state = {
            disable1: true,
            value: false
        }
    }
    Next = () => {
        this.setState({ value: true })
    }
    render() {
        return (
            <div>
                {this.state.value ?
                    <div>
                        <Table />
                    </div>
                    :
                    <div>
                        <Grid justify='center' container spacing={3}>
                            <Grid item xs={12} sm={12} md={8} lg={6}>
                                <Paper >
                                    <Typography variant='h4' align='center'>Edit Questions</Typography>
                                    <div className="AddQuiz">
                                        <DropdownPage value1='Biology' value2='Chemistry' value3='Physics' value4='Mathematic' label='Select Catogery' onChange={(e) => this.setState({ category: e.target.value, disable1: false })} />
                                        <div className="QuizBtn">
                                            <ButtonPage disabled={this.state.disable1} color="mdb-color" onClick={() => this.Next()}>Next</ButtonPage>
                                        </div>
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











export default class EditQuiz extends React.Component {
    render() {
        return (
            <div>
                <Navbar component={<EditQuizUi />} />
            </div>
        )
    }
}