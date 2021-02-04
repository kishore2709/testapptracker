import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import asyncValidate from './asyncValidate'
import Table from "./Table";

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

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
)

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
)

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Complete" />
      <FormControlLabel value="male" control={<Radio />} label="Incomplete" />
    </RadioGroup>
  </FormControl>
)

const radioButton2 = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="assigned" control={<Radio />} label="Assigned" />
      <FormControlLabel value="unassigned" control={<Radio />} label="UnAssigned" />
      <FormControlLabel value="both" control={<Radio />} label="Both" />
    </RadioGroup>
  </FormControl>
)
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

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
        id: 'color-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props
  return (
    <form onSubmit={handleSubmit}>
      {/************ */}
      <div>
       <h3>Files Search </h3>
        {/************ */}
        <div>
        <h3>From Date </h3>
        <Field
          name="fromDate"
          component={renderTextField}
          label="mm/dd/yyyy"
        />
         <h3>To Date </h3>
        <Field
          name="toDate"
          component={renderTextField}
          label="mm/dd/yyyy"
        />
        <h3>Application Status </h3>
        <Field
          classes={classes}
          name="appStatus"
          component={renderSelectField}
          label="Application Status">
          <option value="" />
          <option value={1}>Submitted</option>
          <option value={2}>Initial Review</option>
          <option value={3}>Final Review</option>
          <option value={4}>Issued</option>
          <option value={5}>Closed out</option>
        </Field>
        <h3>File Assignment Status </h3>
        <Field name="fileAssignstatus" component={radioButton2}>
          <Radio value="Assigned" label="Assigned" />
          <Radio value="unAssigned" label="unAssigned" />
          <Radio value="Both" label="Both" />
        </Field>
        <button type="submit" disabled={pristine || submitting}>
          Search
        </button>
        <button type="button" disabled={pristine || submitting} >
          Add New
        </button>
      </div>
     
      {/************ */}
       <div>
       <h3>Files Table </h3>
       <Table />
      </div>
      </div>
      {/************ */}
       <div>
       <h3>File Details </h3>
        <Field name="filestatus" component={radioButton}>
          <Radio value="complete" label="complete" />
          <Radio value="incomplete" label="incomplete" />
        </Field>
      </div>
      <div>
      <h3>File Assignment </h3>
        <Field
          classes={classes}
          name="stafflist"
          component={renderSelectField}
          label="Staff List">
          <option value="" />
          <option value={1}>Jimmy</option>
          <option value={2}>Ily</option>
          <option value={3}>Carol</option>
        </Field>
      </div>
      <div>
      <h3>Note Management</h3>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiline
          rowsMax="4"
          margin="normal"
        />
      </div>

      <div>
      <h3>App Tracking Stages</h3>
      {/************ */}
      <div>
      <h3>Pre Screening</h3>
      <div>
      <h3>Search Company</h3>
        <Field
          name="companyACN"
          component={renderTextField}
          label="Enter ACN"
        />
         <h3>Or Flag as New Company</h3>
         <Field name="newcompany" component={renderCheckbox} label="New Company" />
      </div>
      </div>
      {/************ */}

{/************ */}
<div>
      <h3>Mail Screening</h3>
      <div>
      <h4>Drag and Drop your files here</h4>
        <Field
          name="dragDrop"
          component={renderTextField}
          label="Drag and Drop"
        />
         <h4>Or Click below for file upload</h4>
         <button type="submit" disabled={pristine || submitting}>
          File Upload
        </button>
      </div>
      </div>
      {/************ */}
      <div>
      <h3>Billing Details</h3>
      <div>
      <h3>Enter PID/check info</h3>
        <Field
          name="pidcheckno"
          component={renderTextField}
          label="Enter PID/check info"
        />
         <h3>Enter Amount</h3>
        <Field
          name="enteramount"
          component={renderTextField}
          label="Enter Amount"
        />
         <h3>Spilt Amount - opens dialog box</h3>
      </div>
      </div>
      {/************ */}
      <div>
      <h3>Document Review</h3>
      <div>
      <h3>Display uploaded docs</h3>
        <Field
          name="displaydoc"
          component={renderTextField}
          label="Displays uploaded docs"
        />
      </div>
      </div>
      {/************ */}
      <div>
      <h3>Multiple Statuses</h3>
      <div>
      <h3>Payment Status</h3>
      <Field name="newcompany" component={renderCheckbox} label="New Company" />
      <h3>Issuance Status</h3>
      <Field name="newcompany" component={renderCheckbox} label="New Company" />
      <h3>Closeout Status</h3>
      <Field name="newcompany" component={renderCheckbox} label="New Company" />
      </div>
      </div>


       </div>
      <div />
      
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm)
