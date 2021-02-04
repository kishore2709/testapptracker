
import React, { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
/*
 filedetails: {
          details: { complete: 'yes', incomplete: 'no' },
          assignmentList: { name1: 'Jimmy', name2: 'Ily',name3: 'Carol', },
          assignedfor: 'Jimmy' 
      }
*/


const FileDetails = props => (
    <Fragment>
        <p>Assigned For: {props.filedetails.assignedfor}</p>
        <FormControl component="fieldset">
      <FormLabel component="legend">Details</FormLabel>
      <RadioGroup aria-label="details" name="details" value='complete' >
        <FormControlLabel value="complete" control={<Radio />} label="complete" />
        <FormControlLabel value="incomplete" control={<Radio />} label="incomplete" />
      </RadioGroup>
    </FormControl>
    {/*
        <p>Details: Complete {props.filedetails.details.complete}
        or Incomplete {props.filedetails.details.incomplete}</p>
        */}
    </Fragment>
);

export default  FileDetails ;