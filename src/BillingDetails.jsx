import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';

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
)
const BillingDetails = props => {
    return (
    <Fragment>
  <div>
      <h3>Billing Details</h3>
      <div>
      <h3>Enter PID/check info</h3>
        <Field
          name="pidcheckno"
          component={renderTextField}
          label="Enter PID/check info"
        />
         <h3>Enter Amount</h3>
        <Field
          name="enteramount"
          component={renderTextField}
          label="Enter Amount"
        />
         <h3>Spilt Amount - opens dialog box</h3>
      </div>
      </div>
      {/************ */}
    
  
</Fragment>
);
}
export default  BillingDetails ;
