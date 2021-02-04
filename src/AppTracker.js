import React, { Fragment } from 'react';
import BillingDetails from './BillingDetails';
import MultipleItemStatus from './MultipleItemStatus';
import MailScreening from './MailScreening';
import PreScreening from './PreScreening';
import DocumentReview from './DocumentReview';

const AppTracker = props => {
    
  const { handleSubmit, pristine, reset, submitting, classes } = props
    return (
    <Fragment>
    <div>
      <h3>App Tracking Stages</h3>
      {/************ */}
      <PreScreening/>
      {/************ */}

{/************ */}
<MailScreening/>
      {/************ */}
      <BillingDetails/>
      {/************ */}
      <DocumentReview/>
<MultipleItemStatus/>

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
      
</Fragment>
);
    }
export default  AppTracker ;
