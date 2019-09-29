import React from "react";
import { Paper } from '../../Components'
import Grid from '@material-ui/core/Grid';
import { ButtonAppBar } from '../../Components/Navbar/Navbar'
import {ButtonNew} from '../../Components/index'



class QuizDetail extends React.Component{
    render(){
        return(
            <div>
                <ButtonAppBar />


                <div style={{ padding: "20px" }}>
                    <Grid justify='center' container spacing={2}>
                        <Grid item xs={12} sm={12} md={8} lg={7}>
                            <Paper >
                            <div >
                                <h2 style={{textAlign:'center',padding:'10px 5px',background:'#3F51B5',color:'white',marginBottom:'5%',borderRadius:5}}>Quiz Title : Physics</h2>
                                {/* <p><strong  style={{fontWeight:'bold'}}>Title : </strong> <span style={{fontWeight:'bolder'}}>Physics</span></p> */}
                                <p><strong  style={{fontWeight:'bold'}}>Description : </strong> <span style={{fontWeight:'bolder'}}>Covers: Chapters 1 to 8 of Physics</span></p>
                                <p><strong  style={{fontWeight:'bold'}}>Passing Score :</strong> <span style={{fontWeight:'bolder'}}> 70</span></p>
                                <p><strong  style={{fontWeight:'bold'}}>Quiz Duration :</strong><span style={{fontWeight:'bolder'}}> 40 Minutes</span></p>
                                <p><strong  style={{fontWeight:'bold'}}>No. of Questions :</strong><span style={{fontWeight:'bolder'}}> 20 Questions</span></p>
                            </div>
                            <ButtonNew style={{background:'#3F51B5',color:'#fff'}}  onClick={()=>this.props.history.push('/quiz-Render')} Name="Next" />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default QuizDetail