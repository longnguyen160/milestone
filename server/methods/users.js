import {Random} from 'meteor/random';
import {Image} from '/lib/collections';
import {InvitationCode} from '/lib/collections';
import {Applications} from '/lib/collections';

function verifyEmail(email) {

    let user = Accounts.findUserByEmail(email);
    Accounts.sendVerificationEmail(user._id, email);

};

function checkArgument(argument, patten) {

    return patten.test(argument);
};

export default function () {

    //Add fields in to user database
    Accounts.onCreateUser(function (option, user) {
        //If user company
        if (option.roles === 'company') {
            user.username = option.username,
            user.firstName = option.firstName;
            user.lastName = option.lastName;
            user.company = option.company;
            user.roles = option.roles;
        }
        //Add user freelancer
        else {
            user.username = option.username;
            user.firstName = option.firstName;
            user.lastName = option.lastName;
            user.roles = option.roles;
            user.invitationCode = option.invitationCode;
            user.availability = {};
            user.availability.status = 'not available';
            user.availability.date = '';
        }
        return user
    });
    Meteor.methods({
        'sendVerifyEmail'(email) {
            check(email, String);
            let user = Accounts.findUserByEmail(email);
            Accounts.sendVerificationEmail(user._id, email);
        }
    });
    Meteor.methods({
        'users.createUserCompany' (firstName, lastName, company, email, password) {

            check([firstName, lastName, company, email, password], [String]);
            let username = firstName + lastName;
            username = username.replace(/\s/g,'');
            username = username.toLowerCase();
            let i = 1;

            while (Accounts.findUserByUsername(username)) {
                username = username + i;
                i++;
            }

            Accounts.createUser({
                username:username,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                company: company,
                roles: 'company'
            });

            Meteor.call('sendVerifyEmail',email);
        }
    });
    //Create user freelancer
    Meteor.methods({
        'users.createUserFreelancer' (firstName, lastName, email, password, invitationCode) {
          console.log('abc');
            check([firstName, lastName, email, password, invitationCode], [String]);
            let username = firstName + lastName;
            username = username.toLowerCase();
            username.replace(/\s/g,'');
            let i = 1;
            while (Accounts.findUserByUsername(username)) {
                username = username + i;
                i++;
            }

            //Call create user method
            Accounts.createUser({
                username:username,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                roles: 'freelancer',
                invitationCode: invitationCode,
            });
            console.log('hello');
            if (invitationCode.length !== 0) {
              console.log(invitationCode);
              let code = InvitationCode.find({code: invitationCode}).fetch();
              InvitationCode.update({code: invitationCode}, {$set: {usage: code[0].usage - 1}});

            } else {
                Meteor.call('sendEmail',
                email,'admin@zigvy.com',
                'Welcome to Friendzone!', 'Welcome to Friendzone, '+firstName + ' ' + lastName + '</br>' +
                'Your email: '+email+'</br>'+
                'Your password: '+password+'</br>');

            }
            Meteor.call('sendVerifyEmail',email);
        }
    });
    //Check validation
    Meteor.methods({
        'users.checkValidation' (text, type) {
            check(text, String);
            check(type, String);

            //if empty content
            let errorString = '';
            if (!text) {
                errorString = ' is required';
            } else if (type === 'text') {
                if (!checkArgument(text, /^[a-zA-Z]+(\s[a-zA-Z]+)?$/)) {
                    errorString = ' is not correct.';
                }
            } else if (type === 'email') {
                if (!checkArgument(text, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    errorString = ' is not correct.';
                } else {
                    if (Accounts.findUserByEmail(text)) {
                        errorString = ' has been used';
                    } else if (Applications.find({email:text})[0]) {
                        errorString = ' has been used';
                    }
                }
            }
            if (errorString.length !== 0) {
                throw new Meteor.Error('Error', errorString);
            }
        }
    });

    Meteor.methods({
        'users.sendPassword'(email) {
            check(email, String);
        }
    });

    Meteor.methods({
        'users.editCompanyProfile'(userId, fname, lname, company, companyURL, imgURL) {
            check(userId, String);
            check(fname, String);
            check(lname, String);
            check(company, String);
            check(companyURL, String);
            check(imgURL, String);
            Meteor.users.update(userId, {
                $set: {
                    firstName: fname,
                    lastName: lname,
                    company: company,
                    companyURL: companyURL
                }
            });
            if (Meteor.subscribe("img.single").ready()) {
                const img = Image.find({userId: userId}).fetch();
                if (img[0] !== undefined)
                    Image.update(img[0]._id, {$set: {imgURL: imgURL}});
                else {
                    const image = {userId, imgURL};
                    Image.insert(image);
                }
            }
        }
    });

    Meteor.methods({
        'users.edit'(userId, email, password) {
            check(userId, String);
            check(email, String);
            check(password, String);
            Meteor.users.update(userId, {
                $set: {email: email, password: password}
            });
        }
    });

    Meteor.methods({
        'users.deleteIMG'(userId) {
            check(userId, String);
            if (Meteor.subscribe("img.single").ready()) {
                const img = Image.find({userId: userId}).fetch();
                if (img[0] !== undefined)
                    Image.update(img[0]._id, {$set: {imgURL: ''}});
            }
        }
    });

    Meteor.methods({
        'users.editFreelancerProfile'(userId,fname,lname,position,location,experience,rate,link,travel,headline,introduce,skill,sector,img,bgimg) {

            check([userId,fname,lname,position,location,experience,rate,link,travel,headline,introduce,skill,sector,img,bgimg], [String]);
            Meteor.users.update(userId, {
                $set: {
                    firstName: fname,
                    lastName: lname,
                    company: compnany,
                    ExperienceInPosition: {experience: experience, rate: rate, link: link},
                    details: {headline: headline, introduce: introduce, skill: skill, sector: sector}
                }
            });
        }
    });
}
