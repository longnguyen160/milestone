export default {

    sendPassword({Meteor, LocalState, FlowRouter}, email) {

        if (!email) {

            LocalState.set('SUCCESS', null);
            return LocalState.set('EMAIL_ERROR', 'Email is required!');

        }

        LocalState.set('EMAIL_ERROR', 'User is not found!');
        let options = {};
        options.email = email;
        Accounts.forgotPassword(options);
        LocalState.set('EMAIL_ERROR', null);
        LocalState.set('SUCCESS', "Success");

        FlowRouter.go('/account/forgot');
    },

    //Login fuction with email  and password
    login({Meteor, LocalState, FlowRouter}, email, password) {

        if (!email) {

            return LocalState.set('LOGIN_USER_ERROR', 'Email is required');

        }
        if (!password) {

            return LocalState.set('LOGIN_USER_ERROR', 'Password is required');

        }

        LocalState.set('LOGIN_USER_ERROR', null);

        Meteor.loginWithPassword(email, password, function (error) {
//if have error
            if (error)
                return LocalState.set('LOGIN_USER_ERROR', error.reason);
            else
                FlowRouter.go('/');
        });
        console.log("userId:");
        console.log(Meteor.userId());
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

    editCompanyProfile({Meteor, LocalState, FlowRouter}, userId, fname, lname, company, companyURL, imgURL) {
        Meteor.call('users.editCompanyProfile', userId, fname, lname, company, companyURL, imgURL, (err) => {
            if (err)
                return LocalState.set("SAVING_ERROR");
        });
    },

    editFreelancerProfile({Meteor, LocalState, FlowRouter}, userId, fname, lname, position, location, experience, rate, link, travel, headline, introduce, skill, sector, img, bgimg) {
        Meteor.call('users.editFreeLancerProfile', userId, fname, lname, position, location, experience, rate, link, travel, headline, introduce, skill, sector, img, bgimg, (err) => {
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
//check validation of firstName, lastName, email, company, password
    checkValidation({LocalState}, text, type) {

        let users_err = {
            firstName: ['SIGNUP_FIRSTNAME', 'First name'],
            lastName: ['SIGNUP_LASTNAME', 'Last name'],
            email: ['SIGNUP_EMAIL', 'Email'],
            company: ['SIGNUP_COMPANY', 'Company'],
            password: ['SIGNUP_PASSWORD', 'Password']
        };

        if (type === 'checkbox') {

            if (text === true) {

                return LocalState.set('SIGNUP_CHECKBOX', true);

            } else
                return LocalState.set('SIGNUP_CHECKBOX', false);
        }

        if (type === 'firstName' || type === 'lastName')  {

          Meteor.call('users.checkValidation', text, 'text', function (error) {
              if (error) {
                  return LocalState.set(users_err[type][0], users_err[type][1] + " " + error.reason);
              }
          });

        } else {
              Meteor.call('users.checkValidation', text, type, function (error) {
              if (error) {
                  return LocalState.set(users_err[type][0], users_err[type][1] + " " + error.reason);
              }
          });
        }
        //console.log(type1);

        LocalState.set(users_err[type][0], true);

    },
    createApplication({Meteor, LocalState, FlowRouter}, firstName, lastName, email, link, des) {
        Meteor.call('applications.create', firstName, lastName, email, link, des);
        FlowRouter.go('/');
    },
//Check validation code
    checkInvitationCode({Meteor, LocalState, FlowRouter}, invitationCode){

        if (!invitationCode) {
            return LocalState.set('INVITATIONCODE_ERROR', "Invitation code is required.");
        } else {
          Meteor.call('invitation.checkInvitationCode', invitationCode, function(error) {
            console.log(error);
            if (error) {
              return LocalState.set('INVITATIONCODE_ERROR',error.reason);
            } else {
              LocalState.set('INVITATIONCODE', invitationCode);
              FlowRouter.go('/register/freelancer/finish');
            }
          })
        }


    },

//Create user company
    createUserCompany({Meteor,LocalState}, firstName, lastName, company, email, password) {

        Meteor.call('users.createUserCompany', firstName, lastName, company, email, password);
        LocalState.set('SIGNUP_CONFIRM',true);

    },//end of create user company

//Create user freelancer
    createUserFreelancer({Meteor, LocalState}, firstName, lastName, email, password,invitationCode) {

        const invitaionCode = LocalState.get('INVITATIONCODE');
        console.log(invitaionCode);
        LocalState.set('SIGNUP_CONFIRM',true);
        Meteor.call('users.createUserFreelancer', firstName, lastName, email, password, invitaionCode);
        LocalState.set('INVITATIONCODE',null);

    },//end of create user freelancer

//Clear errors
    clearErrors({LocalState}) {

        LocalState.set("LOGIN_USER_ERROR", null);
        LocalState.set("EMAIL_ERROR", null);
        LocalState.set("SUCCESS", null);
        LocalState.set("INVITATIONCODE_ERROR", null);
        LocalState.set("SIGNUP_FIRSTNAME", null);
        LocalState.set("SIGNUP_LASTNAME", null);
        LocalState.set("SIGNUP_COMPANY", null);
        LocalState.set("SIGNUP_EMAIL", null);
        LocalState.set("SIGNUP_PASSWORD", null);
        LocalState.set('SIGNUP_CONFIRM',null);
        LocalState.set('SIGNUP_CHECKBOX',null);
    },//end of clear errors

//Generate code methods
  generateCode(count, usage) {
    if (!count) {
      count = 1;
    }
    if (!usage) {
      usage = 5;
    }
    const id = Meteor.call('invitation.generate',count,usage);
    const list = Meteor.subscribe("Invitation.list", id);
    console.log(list);
  }

};
