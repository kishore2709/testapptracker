import React, { Fragment } from "react";
import { Field } from "redux-form";
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

const PreScreening = (props) => (
  <Fragment>
    <div>
      <h2> Pre Screening</h2>
      <div>
      Entered Company: Test Company
        
        <h4>If no ACN present, flagged as New Company</h4>
        <Field
          name="newcompany"
          component={renderCheckbox}
          label="New Company"
        />
        
        <Field
          name="preScreening"
          component={renderCheckbox}
          label="Pre Screening Complete"
        />
         <p>Pre Screening done by: test user</p>
      </div>
    </div>
  </Fragment>
);
export default PreScreening;
