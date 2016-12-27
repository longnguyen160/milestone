import ForgotPassword from '../components/ForgotPassword.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {Accounts} from 'meteor/accounts-base';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get("EMAIL_ERROR");
  const success = LocalState.get("SUCCESS");

  let role = null;
  let emails = null;
  let u = null;
  
  if(Meteor.subscribe('user.single', Meteor.userId()).ready()){
      u = Meteor.user().roles;
      emails = Meteor.user().emails[0].address;
  } else {
      console.log("Something went wrong!");
  }
  if(u != null)
      role = u != "admin";

  onData(null, {error, success, role, emails});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  sendPassword: actions.users.sendPassword,
  clearErrors: actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ForgotPassword)
