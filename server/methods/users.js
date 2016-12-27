import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';

export default function() {

  Meteor.methods({

    'users.sendPassword'(email) {

    },

  });
  //Add fields in to user database
  Accounts.onCreateUser(function(option, user) {
  //If user company
      if (option.roles === 'company') {
        user.firstName = option.firstName;
        user.lastName = option.lastName;
        user.company = option.company;
        user.roles = option.roles;
      }
  //Add user freelancer
      else {
        user.firstName = option.firstName;
        user.lastName = option.lastName;
        user.roles = option.roles;
      }

      return user
  });
//Create user company
  Meteor.methods({'users.createUserCompany' (firstName,lastName,company,email,password) {

    check(firstName,String);
    check(lastName,String);
    check(company,String);
    check(email,String);
    check(password, String);

    Accounts.createUser({
      email: email,
      password: password,
      firstName:firstName,
      lastName:lastName,
      company:company,
      roles:'company'
    });

  }});
  //Create user freelancer
  Meteor.methods({'users.createUserFreelancer' (firstName,lastName,email,password) {

    check(firstName,String);
    check(lastName,String);
    check(invitationCode,String);
    check(email,String);
    check(password, String);
//Call create user method
    Accounts.createUser({
      email: email,
      password: password,
      firstName:firstName,
      lastName:lastName,
      roles:'freelancer',
    });
  }});
//Check validation
  Meteor.methods({'users.checkValidation' (text,type) {

    check(text,String);
    check(type,String);
//if empty content
    if (!text) {

      throw new Meteor.Error(1,'is required.');

    }
//if email has been used already
    if (type === 'email') {

      const user = Accounts.findUserByEmail(text);
      console.log(user);

      if (user) {

        throw new Meteor.Error(2,'Email has been used.')

      }
    }
  }});
}
