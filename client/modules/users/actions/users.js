import {Random} from 'meteor/random';

export default {

    sendPassword({Meteor, LocalState, FlowRouter}, email) {

        if (!email) {
            LocalState.set('SUCCESS', null);
            return LocalState.set('EMAIL_ERROR', 'Email is required!');
        }

        LocalState.set('EMAIL_ERROR', 'User is not found!');
        let options = {};
        options.email = email;
        Accounts.forgotPassword(options, (err) => {
            if(err) {
                LocalState.set('EMAIL_ERROR', 'Email is not found!');
                LocalState.set('SUCCESS', null);
            } else {
                LocalState.set('EMAIL_ERROR', null);
                LocalState.set('SUCCESS', "Success");
            }
        });

        FlowRouter.go('/account/forgot');
    },

    resendEmail({Meteor, LocalState, FlowRouter}, email) {
        Meteor.call('sendVerifyEmail', email, (err) => {
            if(err)
                Bert.alert('<b>Unexpected errors has occurred! Sorry for this inconvenience</b>','danger');
            else {
                Bert.alert('<b>Your verify link has been resent! Please check your email!</b>', 'success');
            }
        });
    },


    resetPassword({Meteor, LocalState, FlowRouter}, password, repassword, token) {
        if(!password || !repassword) {
            LocalState.set('SUCCESS', null);
            return LocalState.set('PASSWORD_ERROR','Please fill in all the required fields!');
        }
        if(password !== repassword) {
            LocalState.set('SUCCESS', null);
            return LocalState.set('PASSWORD_ERROR','Password did not match!');
        }
        Accounts.resetPassword(token, password, (error) => {
            Bert.defaults.hideDelay = 5555;
            if ( error ) {
                Bert.alert('<b>'+(error.reason === 'Token expired' ? "Your link has expired" : error.reason)+'</b>', 'danger');
            } else {
                Bert.alert('<b>Your password has been updated!', 'success');
            }
            FlowRouter.go("/");
		});
    },

    //Login fuction with email  and password
    login({Meteor, LocalState, FlowRouter}, email, password) {

        if (!email) {

            return LocalState.set('LOGIN_USER_ERROR', 'Email is required');

        }
        if (!password) {

            return LocalState.set('LOGIN_USER_ERROR', 'Password is required');

        }

        Meteor.loginWithPassword(email, password, function (error) {
            if (error)
                return LocalState.set('LOGIN_USER_ERROR', error.reason);
            else
                FlowRouter.go('/');
        });
    },

    editCompanyProfile({Meteor, LocalState, FlowRouter}, userId, fname, lname, company, companyURL, imgURL) {
        Meteor.call('users.editCompanyProfile', userId, fname, lname, company, companyURL, imgURL, (err) => {
            if (err)
                return LocalState.set("SAVING_ERROR");
        });
        FlowRouter.go("/profile/edit");
    },

    editFreelancerProfile({Meteor, LocalState, FlowRouter}, userId, status, info, ExperienceInPosition, details, image) {
        Meteor.call('users.editFreelancerProfile', userId, status, info, ExperienceInPosition, details, image, (err) => {
            if (err)
                return LocalState.set("SAVING_ERROR");
        });
        FlowRouter.go("/profile/edit");
    },

    updateIntroduce({Meteor, LocalState, FlowRouter}, userId, introduce) {
        Meteor.call('users.updateIntroduce', userId, introduce, (err) => {
           if (err)
               return LocalState.set("UPDATE_ERROR");
        });
    },

    edit({Meteor, LocalState, FlowRouter}, userId, email, password) {
        Meteor.call('user.edit', userId, email, password, (err) => {
            if (err)
                return LocalState.set("SAVING_ERROR");
        });
    },

    deleteIMG({Meteor, LocalState, FlowRouter}, userId, i) {
        Meteor.call('users.deleteIMG', userId, i, (err) => {
            if (err)
                return LocalState.set("DELETE_ERROR");
        });
        FlowRouter.go("/profile/edit");
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

        LocalState.set(users_err[type][0], true);

    },
    createApplication({Meteor, LocalState, FlowRouter}, firstName, lastName, email, link, des) {
        Meteor.call('applications.create', firstName, lastName, email, link, des);
        FlowRouter.go('/');
        Bert.alert('<b>Successful', 'success');


    },
//Check validation code
    checkInvitationCode({Meteor, LocalState, FlowRouter}, invitationCode){
        if (!invitationCode) {
            return LocalState.set('INVITATIONCODE_ERROR', "Invitation code is required.");
        } else {
          Meteor.call('invitation.checkInvitationCode', invitationCode, function(error) {
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
    createUserCompany({Meteor,LocalState, FlowRouter}, firstName, lastName, company, email, password) {

        Meteor.call('users.createUserCompany', {firstName, lastName, company, email, password});
        LocalState.set('SIGNUP_CONFIRM',true);
        Bert.alert('<b>You company account has been created! Please check your email to verify your account!', 'success');
        Meteor.setTimeout(function() {FlowRouter.go("/");}, 2500);
    },//end of create user company

//Create user freelancer
    createUserFreelancer({Meteor, LocalState, FlowRouter}, firstName, lastName, email, password,invitationCode) {

        const invitaionCode = LocalState.get('INVITATIONCODE');
        LocalState.set('SIGNUP_CONFIRM',true);
        Meteor.call('invitation.checkInvitationCode',invitationCode,function(error) {
          if (error) {
            Bert.alert('<b>Your invitation code is not available!', 'danger');
            LocalState.set('INVITATIONCODE',null);
            FlowRouter.go('/register/freelancer');
          }
          else {
            Meteor.call('users.createUserFreelancer', {firstName, lastName, email, password, invitationCode});
            LocalState.set('INVITATIONCODE',null);
            Bert.alert('<b>You freelancer account has been created! Please check your email to verify your account!', 'success');
            Meteor.setTimeout(function() {FlowRouter.go("/");}, 2500);
          }
        });

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
        LocalState.set('GENERATE_INVITATIONCODE',null);
        LocalState.set('ID',null);
    },//end of clear errors

//Generate code methods
  generateCode({LocalState}, count, usage) {
    const patt = /^\d$/;
    if (!count || !patt.test(count) || count < 0) {
      count = 1;
    }
    if (!usage || !patt.test(usage) || usage < 0) {
      usage = 5;
    }
    Meteor.call('invitation.generate',count,usage, (err, response) => {
      if(err){
        return;
      }
      else {
        LocalState.set('ID',response);
      }
    })
  },
    acceptApplications({LocalState},firstName,lastName,email,link,introduce) {
      const password = Random.id(10);
      Meteor.call('users.createUserFreelancer', {firstName, lastName, email, password,link,introduce, invitationCode:''});
      Meteor.call('applications.delete',email);
    },
    declineApplications({LocalState},email) {
      Meteor.call('applications.delete',email);
    }
};
