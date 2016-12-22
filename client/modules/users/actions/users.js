export default {
  sendPassword({Meteor, LocalState, FlowRouter}, email) {
    if (!email)
      return LocalState.set('EMAIL_ERROR', 'Email is required!');
    LocalState.set('EMAIL_ERROR', null);
    Meteor.call("sendPassword", email);
    FlowRouter.go('/')
  },
  login({Meteor,LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_USER_ERROR','Email is required');
    }
    if (!password) {
      return LocalState.set('LOGIN_USER_ERROR','Password is required');
    }
    LocalState.set('LOGIN_USER_ERROR',null);
    Meteor.loginWithPassword(email, password, function(error){
      if(error.reason)
        return LocalState.set('LOGIN_USER_ERROR', error.reason);
      else
        FlowRouter.go('/');
    });
  },
  clearErrors({LocalState}) {
    LocalState.set("LOGIN_USER_ERROR,null");
  }
};
