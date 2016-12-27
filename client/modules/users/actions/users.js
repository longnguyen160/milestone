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

  //Login fuction with email  and password
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

  editCompanyProfile({Meteor, LocalState, FlowRouter}, userId, fname, lname, company, companyURL) {
        Meteor.call('users.editCompanyProfile', userId, fname, lname, company, companyURL, (err) => {
            if (err)
                return LocalState.set("SAVING_ERROR");
        });
    },

  editFreelancerProfile({Meteor, LocalState, FlowRouter}, userId, fname, lname, position, location, experience, rate, link, travel, headline, introduce, skill, sector, img, bgimg) {
        Meteor.call('users.editCompanyProfile', userId, fname, lname, company, companyURL, (err) => {
            if (err)
                return LocalState.set("SAVING_ERROR");
        });
    },

  edit({Meteor, LocalState, FlowRouter}, userId, email, password) {
        Meteor.call('user.edit', userId, email, password, (err) => {
            if (err)
                return LocalState.set("SAVING_ERROR");
        });
    },

  checkValidation({LocalState}, text, type) {
        if (type === 'checkbox') {
            console.log(type);
            console.log(text);
            if (text === true) {
                return LocalState.set('SIGNUP_COMPANAY_CHECKBOX', true);
            } else return LocalState.set('SIGNUP_COMPANAY_CHECKBOX', false);
        }
        Meteor.call('users.checkValidation', text, type, function (error) {
            if (error.error === 1) {
                if (type === 'firstName') {
                    return LocalState.set('SIGNUP_COMPANY_FIRSTNAME', 'First name' + " " + error.reason);
                }
                if (type === 'lastName') {
                    return LocalState.set('SIGNUP_COMPANY_LASTNAME', 'Last name' + " " + error.reason);
                }
                if (type === 'email') {
                    return LocalState.set('SIGNUP_COMPANY_EMAIL', 'Email' + " " + error.reason);
                }
                if (type === 'company') {
                    return LocalState.set('SIGNUP_COMPANY_COMPANY', 'Company' + " " + error.reason);
                }
                if (type === 'password') {
                    return LocalState.set('SIGNUP_COMPANY_PASSWORD', 'Password' + " " + error.reason);
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
//Check validation code
  checkInvitationCode({Meteor,LocalState,FlowRouter},invitationCode){

    if (!invitationCode) {
        return LocalState.set('INVITATIONCODE_ERROR', "Invitation code is required.");
    }

  },

//Create user company
  createUserCompany({Meteor}, firstName,lastName,company,email,password) {

    Meteor.call('users.createUserCompany',firstName, lastName,company,email,password);

  },//end of create user company

//Create user freelancer
  createUserFreelancer({Meteor,LocalState},firstName,lastName,email,password) {

    const invitaionCode = LocalState.get('INVITATIONCODE');
    console.log(invitaionCode);
    Meteor.call('users.createUserFreelancer',firstName,lastName,email,password,invitaionCode);

  },//end of create user freelancer

//Clear errors
  clearErrors({LocalState}) {

    LocalState.set("LOGIN_USER_ERROR", null);
    LocalState.set("EMAIL_ERROR", null);
    LocalState.set("SUCCESS", null);
    LocalState.set("INVITATIONCODE_ERROR",null);
    LocalState.set("SIGNUP_COMPANY_FIRSTNAME",null);
    LocalState.set("SIGNUP_COMPANY_LASTNAME",null);
    LocalState.set("SIGNUP_COMPANY_COMPANY",null);
    LocalState.set("SIGNUP_COMPANY_EMAIL",null);
    LocalState.set("SIGNUP_COMPANY_PASSWORD",null);
  }//end of clear errors
};
