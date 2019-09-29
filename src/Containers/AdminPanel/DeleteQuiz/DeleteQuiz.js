import React from "react";
import './DeleteQuiz.css'
import { Navbar, Paper, DropdownPage, InputPage, ButtonPage } from '../../../Components/index'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';






class DeleteQuizUi extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    allData = () => {

    }
    render() {
        return (
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

        )
    }
}











export default class DeleteQuiz extends React.Component {
    render() {
        return (
            <div>
                <Navbar component={<DeleteQuizUi />} />
            </div>
        )
    }
}