export default {
  sendPassword({Meteor, LocalState, FlowRouter}, email) {
    if (!email) {
      LocalState.set('SUCCESS', null);
      return LocalState.set('EMAIL_ERROR', 'Email is required!');
    }
    LocalState.set('EMAIL_ERROR', 'User is not found!');
    check(email, String);
    if (Meteor.subscribe("users.email", email).ready()) {
      var user = Collections.Users.findOne(email);
      if (user) {
        LocalState.set('EMAIL_ERROR', null);
        LocalState.set('SUCCESS', "Success");
        onData(null, {user});
      }
    }
    FlowRouter.go('/account/forgot');
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
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

  sendCode({Meteor, LocalState, FlowRouter}, inviteCode) {
    if (!inviteCode)
      return LocalState.set('INVITECODE_ERROR', 'Invite code is required');
    check(inviteCode, String);
    LocalState.set('INVITECODE_ERROR', 'Invilad code!');
    Meteor.call("invitation.validation", inviteCode, (error) => {
      if (error) {
        return LocalState.set('SAVING_ERROR', error.message);
      }
    });
    FlowRouter.go('/register/freelancer/finish');
  },

  clearErrors({LocalState}) {
    LocalState.set("LOGIN_USER_ERROR", null);
    LocalState.set("EMAIL_ERROR", null);
    LocalState.set("SUCCESS", null);
  }
};
