import React from "react";
import { reduxForm } from "redux-form";
import asyncValidate from "./asyncValidate";
import Table from "./Table";
import FileDetails from "./FileDetails";
import AppTracker from "./AppTracker";
import NotesManager from "./NotesManager";
import FileAssignment from "./FileAssignment";
import Grid from "@material-ui/core/Grid";

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "favoriteColor",
    "notes",
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const MaterialUiForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      {/************ */}
      <div>
        <h3>Files Search </h3>
        {/************ */}
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <FileDetails />
          </Grid>
        </Grid>
        {/************ */}
        <div>
          <h3>Files Table </h3>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Table />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </div>
      </div>
      {/************ */}
      <br />
      <br />
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={6}>
          <FileAssignment />
        </Grid>
        <Grid item xs={3}>
          <NotesManager />
        </Grid>
      </Grid>
      <Grid container>
        <AppTracker />
      </Grid>
      <br />
      <br />
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate,
  asyncValidate,
})(MaterialUiForm);
