import React, { Fragment } from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";
import SplitAmount from './SplitAmount';
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
          Enter PID/check info
          <Field
            name="pidcheckno"
            component={renderTextField}
            label="Enter PID/check info"
          />
          <br />
          Enter Amount
          <Field
            name="enteramount"
            component={renderTextField}
            label="Enter Amount"
          />
          <SplitAmount/>
        </div>
      </div>
      {/************ */}
    </Fragment>
  );
};
export default BillingDetails;
