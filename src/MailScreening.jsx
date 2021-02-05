import React, { Fragment } from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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
const MailScreening = (props) => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <Fragment>
      <div>
        <h3>Mail Screening</h3>
        <Grid container>
          <Grid item xs={6}>
            Drag and Drop your files here
            <Field
              name="dragDrop"
              component={renderTextField}
              label="Drag and Drop"
            />
          </Grid>
          <Grid item xs={6}>
            Or Click below for file upload
            <br />
            <br />
            <button type="submit" disabled={pristine || submitting}>
              File Upload
            </button>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};
export default MailScreening;
