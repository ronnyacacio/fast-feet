import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import Deliveryman from '~/pages/Deliveryman';
import Recipient from '~/pages/Recipient';
import Problems from '~/pages/Problems';
import CreateDelivery from '~/pages/CreateDelivery';
import CreateDeliveryman from '~/pages/CreateDeliveryman';
import CreateRecipient from '~/pages/CreateRecipient';
import UpdateDelivery from '~/pages/UpdateDelivery';
import UpdateDeliveryman from '~/pages/UpdateDeliveryman';
import UpdateRecipient from '~/pages/UpdateRecipient';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route exact path="/delivery" component={Delivery} isPrivate />
      <Route exact path="/deliveryman" component={Deliveryman} isPrivate />
      <Route exact path="/recipient" component={Recipient} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />

      <Route path="/delivery/create" component={CreateDelivery} isPrivate />
      <Route
        path="/deliveryman/create"
        component={CreateDeliveryman}
        isPrivate
      />
      <Route path="/recipient/create" component={CreateRecipient} isPrivate />

      <Route path="/delivery/update" component={UpdateDelivery} isPrivate />
      <Route
        path="/deliveryman/update"
        component={UpdateDeliveryman}
        isPrivate
      />
      <Route path="/recipient/update" component={UpdateRecipient} isPrivate />
    </Switch>
  );
}
