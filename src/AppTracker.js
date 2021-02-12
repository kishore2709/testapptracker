import React, { Fragment } from "react";
import BillingDetails from "./BillingDetails";
import MultipleItemStatus from "./MultipleItemStatus";
import MailScreening from "./MailScreening";
import PreScreening from "./PreScreening";
import DocumentReview from "./DocumentReview";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import DataEntry from "./DataEntry";
import Notes from "./notes";


const AppTracker = (props) => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <h2>App Tracking Stages</h2>
          {/************ */}
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <PreScreening />
              {/************ */}
              <Divider />
              {/************ */}

              <MailScreening />
            </Grid>
            {/************ */}
            <Grid item xs={3}>
            <DataEntry />
              <BillingDetails />
            </Grid>
            {/************ */}
            <Grid item xs={3}>
              <DocumentReview />
              <MultipleItemStatus />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid item xs={12}>
        <h3>Note Management</h3>
          <Notes/>
          <button type="submit" disabled={pristine || submitting}>
              Add New Note
            </button>
        </Grid>
        <br/>
        <br/>
        
        <Grid item xs={12}>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </button>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default AppTracker;
