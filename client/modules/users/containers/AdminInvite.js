import AdminInvite from '../components/AdminInvite.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState, Collections} = context();
  const error = LocalState.get('GENERATE_INVITATIONCODE');
  const id = LocalState.get('ID');
  console.log('id:' + id);
  if(Meteor.subscribe("Invitation.list", id).ready()){
    const list = Collections.InvitationCode.find({uniqueCode:id}).fetch();
    console.log('List invitation');
    console.log(list);
  }
  onData(null,{error,id});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  clearErrors : actions.users.clearErrors,
  generateCode: actions.users.generateCode,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AdminInvite)
