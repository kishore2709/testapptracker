import React, { Fragment } from "react";
import { Field } from "redux-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
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

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest} row label="File Details">
      <FormLabel>File Details </FormLabel>
      <FormControlLabel value="complete" control={<Radio />} label="Complete" />
      <FormControlLabel
        value="incomplete"
        control={<Radio />}
        label="Incomplete"
      />
    </RadioGroup>
  </FormControl>
);
const MailScreening = (props) => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <Fragment>
      <div>
        <h3>Mail Screening</h3>
        <Grid container>
          <Grid item xs={6}>
            
          <Field row name="filestatus" component={radioButton}>
            <Radio value="complete" label="complete" />
            <Radio value="incomplete" label="incomplete" />
          </Field>    
        <Field
          name="mailScreening"
          component={renderCheckbox}
          label="Mail Screening Complete"
        />
         <p>Mail Screening done by: test user</p>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};
export default MailScreening;
