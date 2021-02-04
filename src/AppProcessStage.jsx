import React, { Fragment } from 'react';
import PreScreening from './PreScreening';
import MailScreening from './MailScreening';
import BillingDetails from './BillingDetails';
import DocumentReview from './DocumentReview';
import MultipleItemStatus from './MultipleItemStatus';
const AppProcessStage = props => (
    <Fragment>
    <p>App Process Stages</p>
  
    <PreScreening/>
     
    <MailScreening/>

    <BillingDetails/>

    <DocumentReview/>

    <MultipleItemStatus/>
   
</Fragment>
);
export default  AppProcessStage;
