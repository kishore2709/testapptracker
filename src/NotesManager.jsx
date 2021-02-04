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
  );
const NotesManager = props => {
    return (
    <Fragment>
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
</Fragment>
);
}
export default  NotesManager ;
