import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
const MultipleItemStatus = props => (
    <Fragment>
   <div>
      <h3>Multiple Statuses</h3>
      <div>
      <Field name="paymentStatus" component={renderCheckbox} label="Payment Status" />
      <Field name="issuanceStatus" component={renderCheckbox} label="Issuance Status" />
      <Field name="closeoutStatus" component={renderCheckbox} label="Closeout Status" />
      </div>
      </div>
</Fragment>
);
export default  MultipleItemStatus ;
