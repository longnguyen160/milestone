//import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';

export default function() {
  Meteor.methods({
    'users.sendPassword'(email) {

    }
  });
  Accounts.onCreateUser(function(option,user){
     user.firstName = option.firstName;
     user.lastName = option.lastName;
     user.company = option.company;
     user.roles = new Array();
     user.roles.push('company');
     user.roles.push('company_beta');
     user.invatationCode = Random.id(5).toUpperCase();
    return user
  });
  Meteor.methods({'users.createUserCompany' (firstName,lastName,company,email,password) {
    console.log(firstName + lastName + company + email + password);
    check(firstName,String);
    check(lastName,String);
    check(company,String);
    check(email,String);
    check(password, String);
    Accounts.createUser({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      company: company
    });
    const user = Accounts.findUserByEmail(email);
  }});
  Meteor.methods({'users.checkValidation' (text,type) {
    check(text,String);
    check(type,String);
    if (!text) {
      throw new Meteor.Error(1,'is required.');
    }
    if (type === 'email') {
      const user = Accounts.findUserByEmail(text);
      console.log(user);
      if (user) {
        throw new Meteor.Error(2,'Email has been used.')
      }
    }
  }});
}
