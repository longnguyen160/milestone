export default {
  sendPassword({Meteor, LocalState, FlowRouter}, email) {
    if (!email) {
      LocalState.set('SUCCESS', null);
      return LocalState.set('EMAIL_ERROR', 'Email is required!');
    }
    LocalState.set('EMAIL_ERROR', null);
    LocalState.set('SUCCESS', "Success");
    Meteor.call("sendPassword", email);
    FlowRouter.go('/login/forgotpassword')
  }
}
