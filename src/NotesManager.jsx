import React, { Fragment } from "react";
import { Field } from "redux-form";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

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
const NotesManager = (props) => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <label>Note Management</label>
          <Field
            name="notes"
            component={renderTextField}
            label="Notes"
            multiline
            rowsMax="4"
            margin="normal"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default NotesManager;
