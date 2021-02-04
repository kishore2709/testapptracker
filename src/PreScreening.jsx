import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { Field } from 'redux-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
  
const PreScreening = props => (
    <Fragment>
   <div>
      <h3>Pre Screening</h3>
      <div>
      <h3>Search Company</h3>
        <Field
          name="companyACN"
          component={renderTextField}
          label="Enter ACN"
        />
         <h3>Or Flag as New Company</h3>
         <Field name="newcompany" component={renderCheckbox} label="New Company" />
      </div>
      </div>
</Fragment>
);
export default  PreScreening ;
