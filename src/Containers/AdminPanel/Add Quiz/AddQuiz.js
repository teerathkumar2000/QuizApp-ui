import React from "react";
import './AddQuiz.css'
import { Navbar, Paper, DropdownPage, InputPage, ButtonPage } from '../../../Components/index'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';






class AddQuizUi extends React.Component {
    constructor() {
        super()
        this.state = {
            value: true,
            disable1: true,
            disable2: true,
            disable3: true,
        }
    }
    allData = () => {
        this.setState({ value: true })

    }
    Next = () => {
        this.setState({ value: false })
    }
    render() {
        return (
            <div>
                {
                    this.state.value ?
                        <div>
                            <Grid justify='center' container spacing={3}>
                                <Grid item xs={12} sm={12} md={8} lg={6}>
                                    <Paper >
                                        <Typography variant='h4' align='center'>Add Questions</Typography>
                                        <div className="AddQuiz">
                                            <DropdownPage value1='Biology' value2='Chemistry' value3='Physics' value4='Mathematic' label='Select Catogery' onChange={(e) => this.setState({ category: e.target.value, disable1: false })} />
                                            <DropdownPage disabled={this.state.disable1} value1='20 Mintues' value2='25 Mintues' value3='30 Mintues' value4='35 Mintues' label='Select Time' onChange={(e) => this.setState({ Time: e.target.value, disable2: false })} />
                                            <DropdownPage disabled={this.state.disable2} value1='20 Questions' value2='25 Questions' value3='30 Questions' value4='35 Questions' label='Select Questions' onChange={(e) => this.setState({ question: e.target.value, disable3: false })} />
                                            <div className="QuizBtn">
                                                <ButtonPage disabled={this.state.disable3} color="mdb-color" onClick={() => this.Next()}>Next</ButtonPage>
                                            </div>
                                        </div>

                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                        :
                        <div>
                            <Grid justify='center' container spacing={3}>
                                <Grid item xs={12} sm={12} md={8} lg={6}>
                                    <Paper >
                                        <Typography variant='h4' align='center'>Add Questions</Typography>
                                        <div className="AddQuiz">
                                            <InputPage label='Question' name='Question' type='text' onChange={(e) => this.setState({ question: e.target.value })} />
                                            <InputPage label='Option 1' name='Question' type='text' onChange={(e) => this.setState({ option1: e.target.value })} />
                                            <InputPage label='Option 2' name='Question' type='text' onChange={(e) => this.setState({ option2: e.target.value })} />
                                            <InputPage label='Option 3' name='Question' type='text' onChange={(e) => this.setState({ option3: e.target.value })} />
                                            <InputPage label='Correct' name='Question' type='text' onChange={(e) => this.setState({ option4: e.target.value })} />
                                            <DropdownPage label='Select Catogery' onChange={(e) => this.setState({ category: e.target.value })} />
                                            <div className="QuizBtn">
                                                <ButtonPage color="mdb-color" onClick={() => this.allData()}>Submit</ButtonPage>
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











export default class AddQuiz extends React.Component {
    render() {
        return (
            <div>
                <Navbar component={<AddQuizUi />} />
            </div>
        )
    }
}