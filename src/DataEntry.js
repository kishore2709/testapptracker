import React, { Fragment } from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return;
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>;
    }
  };
const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl error={touched && error}>
      <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: "color-native-simple",
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
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
  
const DataEntry = (props) => {
    const { classes } = props;
  return (
    <Fragment>
      <div>
        <h3>Data Entry</h3>
        <div>
          Enter 
          <Field
            name="txnNo"
            component={renderTextField}
            label="Txn Number"
          />
          <br />
          Enter 
          <Field
            name="enteramount"
            component={renderTextField}
            label="Application Number"
          />
           <br />
           Select  
           <Field
            classes={classes}
            name="txnType"
            component={renderSelectField}
            label="Txn Type"
          >
            <option value="" />
            <option value={1}>Initial Registration</option>
            <option value={2}>Registration Renewal</option>
            <option value={3}>Placard Replacement</option>
            <option value={4}>Sticker Replacement</option>
          </Field>
            <Field
          name="dataEntry"
          component={renderCheckbox}
          label="Data Entry Complete"
        />
         <p>Data Entry done by: test user</p>
           
        </div>
      </div>
      {/************ */}
    </Fragment>
  );
};
export default DataEntry;
