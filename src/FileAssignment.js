import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }
const radioButton = ({ input, ...rest }) => (
    <FormControl>
      <RadioGroup {...input} {...rest}>
        <FormControlLabel value="female" control={<Radio />} label="Complete" />
        <FormControlLabel value="male" control={<Radio />} label="Incomplete" />
      </RadioGroup>
    </FormControl>
  );
  
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
  );
const FileAssignment = props => {
    
  const { handleSubmit, pristine, reset, submitting, classes } = props
    return (
    <Fragment>
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
      
</Fragment>
);
    }
export default  FileAssignment ;
