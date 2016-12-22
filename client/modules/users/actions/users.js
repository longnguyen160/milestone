export default {
  sendPassword({Meteor, LocalState, FlowRouter}, email) {
    if (!email) {
      LocalState.set('SUCCESS', null);
      return LocalState.set('EMAIL_ERROR', 'Email is required!');
    }
    LocalState.set('EMAIL_ERROR', 'User is not found!');
    check(email, String);
    if (Meteor.subscribe("users.email", email)) {
      var user = Collections.Users.findOne(email);
      if (user) {
        LocalState.set('EMAIL_ERROR', null);
        LocalState.set('SUCCESS', "Success");
        onData(null, {user});
      }
    }
    FlowRouter.go('/account/forgot');
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
    LocalState.set("LOGIN_USER_ERROR", null);
    LocalState.set("EMAIL_ERROR", null);
    LocalState.set("SUCCESS", null);
  }
};
