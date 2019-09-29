import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class ButtonPage extends React.Component {
    render() {
        return (
            <Fragment>
                <MDBBtn disabled ={this.props.disabled} onClick={() => this.props.onClick()} color={this.props.color}> {this.props.children} </MDBBtn>
            </Fragment>
        );
    }
}



const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  
function ButtonNew(props) {
    const classes = useStyles();
  
    return (
      <div>
        <Button variant="contained" onClick={props.onClick} style={props.style} className={classes.button}>
          {props.Name}
        </Button>
        </div>
    )}

export  {ButtonPage,ButtonNew};