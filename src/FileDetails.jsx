import React, { Fragment } from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { Field } from "redux-form";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
/*
 filedetails: {
          details: { complete: 'yes', incomplete: 'no' },
          assignmentList: { name1: 'Jimmy', name2: 'Ily',name3: 'Carol', },
          assignedfor: 'Jimmy' 
      }
*/

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const radioButton2 = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="assigned" control={<Radio />} label="Assigned" />
      <FormControlLabel
        value="unassigned"
        control={<Radio />}
        label="UnAssigned"
      />
      <FormControlLabel value="both" control={<Radio />} label="Both" />
    </RadioGroup>
  </FormControl>
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: "color-native-simple",
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const FileDetails = (props) => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <Fragment>
      <div>
        <Grid container>
          <Grid item xs={3}>
            <div>
              <label>To Date:</label>
              <Field
                name="fromDate"
                component={renderTextField}
                label="mm/dd/yyyy"
              />
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
              <label>To Date:</label>
              <Field
                name="toDate"
                component={renderTextField}
                label="mm/dd/yyyy"
              />
            </div>
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
            <button type="submit" disabled={pristine || submitting}>
              Search
            </button>
          </Grid>
          <Grid item xs={1}>
            <button type="button" disabled={pristine || submitting}>
              Add New
            </button>
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
