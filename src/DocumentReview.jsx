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
const DocumentReview = props => (
    <Fragment>
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
  
</Fragment>
);
export default  DocumentReview ;
