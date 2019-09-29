import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';



class Table extends React.Component {
  constructor() {
    super()
    this.state = {
      disable: true,
      color: 'none',
      question: 'what is your Name?',
      option1: 'Sagar',
      option2: 'Darpan',
      option3: 'Teerath',
      option4: 'Dileep',
      edit: false
    }
  }
  componentDidMount() {
    this.setState({ allClasses: this.props.data })
  }


  editClass = () => {
    this.setState({ disable: false, color: 'white', edit: true })
  }
  updateClass = () => {
    this.setState({ disable: true, color: 'none', edit: false })
  }


  deleteClass = () => {
    alert("Delete")
  }


  render() {
    let { edit, disable, question, option1, option2, option3, option4 } = this.state;
    return (
      <div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sm={12} lg={12} >

            <table className="table table-bordered table-responsive-md table-striped text-center">

              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-center">Question</th>
                  <th className="text-center">Option 1</th>
                  <th className="text-center">Option 2</th>
                  <th className="text-center">Option 3</th>
                  <th className="text-center">Option 4</th>
                  <th className="text-center">{edit ? 'Update' : 'Edit'}</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr className="tabletr">
                  <th scope="row" >1</th>
                  <td><input onChange={(e) => this.setState({ question: e.target.value })} disabled={disable} value={question} /></td>
                  <td><input onChange={(e) => this.setState({ option1: e.target.value })} disabled={disable} value={option1} /></td>
                  <td><input onChange={(e) => this.setState({ option2: e.target.value })} disabled={disable} value={option2} /></td>
                  <td><input onChange={(e) => this.setState({ option3: e.target.value })} disabled={disable} value={option3} /></td>
                  <td><input onChange={(e) => this.setState({ option4: e.target.value })} disabled={disable} value={option4} /></td>

                  <td>{edit ? <CheckIcon onClick={() => this.updateClass()} /> : <EditIcon onClick={() => this.editClass()} />}
                  </td>
                  <td><DeleteIcon onClick={() => this.deleteClass()} /></td>
                </tr>



              </tbody>

            </table>

          </Grid>
        </Grid>




      </div>

    )
  }
}


export default Table;