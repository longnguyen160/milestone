export default {

  checkEmail({Meteor, LocalState, FlowRouter}, email) {
    let re = /^[a-zA-Z0-9\-.]{3,25}@[a-zA-Z0-9]{1,3}(\.[a-zA-Z0-9]{1,3}){0,2}$/;
    return re.test(email);
  },

  sendEmail({Meteor, LocalState, FlowRouter}, from, to, subject, text) {
    if(!from || !to) {
      LocalState.set('SUCCESS', null);
      return LocalState.set('EMAIL_ERROR', 'Email is required');
    }

    LocalState.set('EMAIL_ERROR', null);
    //check all arguments at one function
    check([from, to, subject, text], [String]);
    Meteor.call('sendEmail', to, from, subject, text);

  },

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
    });
  },

  checkValidation({LocalState},text,type) {
    if (type === 'checkbox') {
      console.log(type);
      console.log(text);
      if (text === true) {
        return LocalState.set('SIGNUP_COMPANAY_CHECKBOX',true);
      } else return LocalState.set('SIGNUP_COMPANAY_CHECKBOX',false);
    }
      Meteor.call('users.checkValidation',text,type,function(error) {
        if (error.error === 1) {
          if (type === 'firstName') {
            return LocalState.set('SIGNUP_COMPANY_FIRSTNAME','First name' + " " + error.reason);
          }
          if (type === 'lastName') {
            return LocalState.set('SIGNUP_COMPANY_LASTNAME','Last name' + " " + error.reason);
          }
          if (type === 'email') {
            return LocalState.set('SIGNUP_COMPANY_EMAIL','Email' + " " + error.reason);
          }
          if (type === 'company') {
            return LocalState.set('SIGNUP_COMPANY_COMPANY','Company' + " " + error.reason);
          }
          if (type === 'password') {
            return LocalState.set('SIGNUP_COMPANY_PASSWORD','Password' + " " + error.reason);
          }
        }
        if (error.error === 2) {
            return LocalState.set('SIGNUP_COMPANY_EMAIL', error.reason);
        }
      });
      if (type === 'firstName') {
        return LocalState.set('SIGNUP_COMPANY_FIRSTNAME',true);
      }
      if (type === 'lastName') {
        return LocalState.set('SIGNUP_COMPANY_LASTNAME',true);
      }
      if (type === 'email') {
        return LocalState.set('SIGNUP_COMPANY_EMAIL',true);
      }
      if (type === 'company') {
        return LocalState.set('SIGNUP_COMPANY_COMPANY',true);
      }
      if (type === 'password') {
        return LocalState.set('SIGNUP_COMPANY_PASSWORD',true);
      }
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

  createUserCompany({Meteor,LocalState,FlowRouter}, firstName,lastName,company,email,password) {
    Meteor.call('users.createUserCompany',firstName, lastName,company,email,password);
    return;
  },

  clearErrors({LocalState}) {
    LocalState.set("LOGIN_USER_ERROR", null);
    LocalState.set("EMAIL_ERROR", null);
    LocalState.set("SUCCESS", null);
  }

};
