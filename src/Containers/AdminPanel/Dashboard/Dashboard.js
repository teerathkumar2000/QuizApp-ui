import React from "react";
import { Navbar, Paper } from '../../../Components/index'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';






class DashboardUi extends React.Component {
    render() {
        return (
            <div>

                <Grid justify='center' container spacing={3}>
                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <Paper >
                            <div style={() => alert('hi')}>
                                <Typography variant='h4' align='center' >Total Users</Typography>
                                <Typography variant='h5' align='center' >90</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <Paper >
                            <Typography variant='h4' align='center' >Total Users</Typography>
                            <Typography variant='h5' align='center' >90</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <Paper >
                            <Typography variant='h4' align='center' >Total Users</Typography>
                            <Typography variant='h5' align='center' >90</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}











export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navbar component={<DashboardUi />} />
            </div>
        )
    }
}