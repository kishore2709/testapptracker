import React, { Fragment } from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";
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
const BillingDetails = (props) => {
  return (
    <Fragment>
      <div>
        <h3>Billing Details</h3>
        <div>
          Enter Invoice No
          <Field
            name="invoiceno"
            component={renderTextField}
            label="Enter Invoice No"
          />
          <br />
          Enter Amount
          <Field
            name="enteramount"
            component={renderTextField}
            label="Enter Amount"
          />
           <Field
          name="invoiceSent"
          component={renderCheckbox}
          label="Billing Invoice Sent"
        />
        
           <p>Invoice details entered by: test user</p>
        </div>
      </div>
      {/************ */}
    </Fragment>
  );
};
export default BillingDetails;
