import React from "react";
import { Paper } from '../../Components'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ButtonAppBar } from '../../Components/Navbar/Navbar'






export default class DashboardUi extends React.Component {
    render() {
        return (
            <div>
                <div style={{ marginBottom: '3%' }}>
                    <ButtonAppBar />
                </div>

                <div style={{ padding: "20px" }}>
                    <Grid justify='center' container spacing={2}>
                        <Grid item xs={12} sm={12} md={8} lg={3}>
                            <div onClick={()=>this.props.history.push('/quiz-detail')} >

                            <Paper >
                                <Typography variant='h4' align='center' >Total Users</Typography>
                                <Typography variant='h5' align='center' >90</Typography>
                            </Paper>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={3}>
                            <Paper >
                                <Typography variant='h4' align='center' >Total Users</Typography>
                                <Typography variant='h5' align='center' >90</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={3}>
                            <Paper >
                                <Typography variant='h4' align='center' >Total Users</Typography>
                                <Typography variant='h5' align='center' >90</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={3}>
                            <Paper >
                                <Typography variant='h4' align='center' >Total Users</Typography>
                                <Typography variant='h5' align='center' >90</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </div>

        )
    }
}

