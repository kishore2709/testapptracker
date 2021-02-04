import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';

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
const MailScreening = props => {
      
  const { handleSubmit, pristine, reset, submitting, classes } = props
    return (
    <Fragment>
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
  
</Fragment>
);
    }
export default  MailScreening ;
