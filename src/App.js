import './App.css';
import {Component} from 'react';
import Table2 from "./Table2";
import FileDetails from "./FileDetails";
import AppTracker from "./AppTracker";
import Grid from "@material-ui/core/Grid";
import { reduxForm } from "redux-form";
class App extends Component {
  state = {
      filedetails: {
          details: { complete: 'yes', incomplete: 'no' },
          assignmentList: { name1: 'Jimmy', name2: 'Ily',name3: 'Carol', },
          assignedfor: 'Jimmy' 
      },
      //sid, fno, acn, companyname, appdate
      filesList : [{
        sid : 1234,
        fno : 1234,
        acn : 'ACN-1234',
        companyname : 'SunBelt 1',
        appdate : '02/06/2021'
        }, {
          sid : 1235,
          fno : 1235,
          acn : 'ACN-1235',
          companyname : 'SunBelt 2',
          appdate : '02/07/2021'
          },
          {
            sid : 1236,
            fno : 1236,
            acn : 'ACN-1236',
            companyname : 'SunBelt 3',
            appdate : '02/08/2021'
            }],
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

render() {
  return (
    <div className="App">
        <h1 className="App-title">Welcome to App Tracker</h1>

<form onSubmit={this.submit}>
      {/************ */}
      <div>
        <h3>Files Search </h3>
        {/************ */}
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <FileDetails />
          </Grid>
        </Grid>
        {/************ */}
        <div>
          <h3>Files Table </h3>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Table2 filedata={this.state}/>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </div>
      </div>
      {/************ */}
      <br />
      <br />
      <Grid container>
        <Grid item xs={2}></Grid>
       
      </Grid>
      <Grid container>
        <AppTracker />
      </Grid>
      <br />
      <br />
    </form>
</div>
  );
}
}

export default reduxForm({
  form: "App", // a unique identifier for this form
})(App);

