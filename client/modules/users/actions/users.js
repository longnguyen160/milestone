export default {
  sendPassword({Meteor, LocalState, FlowRouter}, email) {
    if (!email)
      return LocalState.set('EMAIL_ERROR', 'Email is required!');
    LocalState.set('EMAIL_ERROR', null);
    Meteor.call("sendPassword", email);
    FlowRouter.go('/')
  }
}
