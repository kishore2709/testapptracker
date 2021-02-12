import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);

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
const DocumentReview = (props) => {
  const { classes } = props;
return (
    <Fragment>
    <div>
    <h3>Clone the App</h3>
    <button type="submit">
    Clone Button
            </button>
      <h3>Document Review</h3>
      <div>
        <Field
          name="displaydoc"
          component={renderTextField}
          label="Displays uploaded docs"
        />
      
<br/>
<h3>File Assignment</h3>
<Field
  classes={classes}
  name="stafflist"
  component={renderSelectField}
  label="Select Processor"
>
  <option value="" />
  <option value={1}>Jimmy</option>
  <option value={2}>Ily</option>
  <option value={3}>Carol</option>
  <option value={4}>Perp Staff</option>
</Field>
<br/>
<Field
  classes={classes}
  name="stafflist"
  component={renderSelectField}
  label="Select Reviewer"
>
  <option value="" />
  <option value={1}>Jimmy</option>
  <option value={2}>Ily</option>
  <option value={3}>Carol</option>
  <option value={4}>Perp Staff</option>
</Field>
<Field
          name="fileAssigned"
          component={renderCheckbox}
          label="File Assigned"
        />
        
<h3>Waiting Payment</h3>
        <Field
          name="payReceived"
          component={renderCheckbox}
          label="Payment Received"
        />
      </div>
      </div>
  
</Fragment>
);
};
export default  DocumentReview ;
