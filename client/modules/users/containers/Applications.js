import Applications from '../components/Applications.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState, Collections} = context();
  let list = null;
  if(Meteor.subscribe("application.list").ready()){
    list = Collections.Applications.find().fetch();
  }
  onData(null,{list});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  accept : actions.users.acceptApplications,
  decline : actions.users.declineApplications,
  clearErrors : actions.users.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Applications)
