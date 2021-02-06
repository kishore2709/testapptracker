import React, { Fragment } from "react";
import AddNotes from "./AddNotes";
import Grid from "@material-ui/core/Grid";
import ViewNotes from "./ViewNotes";

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
          <AddNotes />
          <ViewNotes />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default NotesManager;
