import AdminInvite from '../components/AdminInvite.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState, Collections} = context();
  const id = LocalState.get('ID');
  console.log('id:' + id);
  let list = null;
  if(Meteor.subscribe("Invitation.list", id).ready()){
    list = Collections.InvitationCode.find({uniqueCode:id}).fetch();
  }
  onData(null,{id,list});
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
