import React, { Fragment } from "react";
import Radio from "@material-ui/core/Radio";
import { Field } from "redux-form";
import Grid from "@material-ui/core/Grid";
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {AddNewForm} from './AddNewForm';
import {renderTextField,radioButton2,renderSelectField} from './utils';

/*
 filedetails: {
          details: { complete: 'yes', incomplete: 'no' },
          assignmentList: { name1: 'Jimmy', name2: 'Ily',name3: 'Carol', },
          assignedfor: 'Jimmy' 
      }
*/

const newFileData =[{
  sid : 2234,
  fno : 2234,
  acn : 'ACN-1234',
  companyname : 'SunBelt 1',
  appdate : '02/06/2021'
  }, {
    sid : 3235,
    fno : 3235,
    acn : 'ACN-1235',
    companyname : 'SunBelt 2',
    appdate : '02/07/2021'
    },
    {
      sid : 4236,
      fno : 4236,
      acn : 'ACN-1236',
      companyname : 'SunBelt 3',
      appdate : '02/08/2021'
      }];
const FileDetails = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-02-05T21:11:54'));
  const [filesList, setFilesList] = React.useState();
 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("In Search");
   // setFilesList(...filesList,newFileData);
    //setTimeout(() => {
    //  this.setState({results: [0, 1, 2, 3, 4]})
   // }, 1000)
  }
  
  
  const {classes } = props;
  return (
    <Fragment>
      <div>
        <Grid container>
          <Grid item xs={3}>
            <div>
           
       
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
       From Date: 
       <KeyboardDatePicker
         margin="normal"
         id="date-picker-dialog"
         label="Date picker dialog"
         format="MM/dd/yyyy"
         value={selectedDate}
         onChange={handleDateChange}
         KeyboardButtonProps={{
           'aria-label': 'change date',
         }}
       />
</MuiPickersUtilsProvider>
            </div>
    
          </Grid>
          <Grid item xs={3}>
            <label>Application Status </label>
            <Field
              classes={classes}
              name="appStatus"
              component={renderSelectField}
              label="Application Status"
            >
              <option value="" />
              <option value={1}>Submitted</option>
              <option value={2}>Initial Review</option>
              <option value={3}>Final Review</option>
              <option value={4}>Issued</option>
              <option value={5}>Closed out</option>
            </Field>
          </Grid>
          
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
           To Date:
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>

            </div>
          </Grid>
          <Grid item xs={3}>
            <label>Enter </label>
          
        <Field
          name="companyACN"
          component={renderTextField}
          label="Company ACN/Name"
        />
          </Grid>
          <br />
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={6} style={{ display: "flex" }}>
            File Assignment Status:
            <Field
              row
              name="fileAssignstatus"
              component={radioButton2}
              label="File Assignment Status:"
            >
              <label>Assigned </label>
              <Radio value="Assigned" label="Assigned" />
              <label>Un Assigned </label>
              <Radio value="unAssigned" label="unAssigned" />
              <label>Both </label> <Radio value="Both" label="Both" />
            </Field>
          </Grid>
        </Grid>
        <br />
        <br />

        <Grid container justifyContent="center">
          <Grid item xs={1}>
            <button type="submit" onClick={handleSearch}>
              Search
            </button>
          </Grid>
          <Grid item xs={1}>
            <AddNewForm onSubmit={props.handleSubmit}/>
          </Grid>
        </Grid>
      </div>

      {/*
        <p>Details: Complete {props.filedetails.details.complete}
        or Incomplete {props.filedetails.details.incomplete}</p>
        */}
    </Fragment>
  );
};

export default FileDetails;
