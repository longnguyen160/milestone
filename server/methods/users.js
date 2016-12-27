import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';


export default function () {

    Meteor.methods({
        'users.sendPassword'(email) {
            check(email, String);
        }
    });

    Meteor.methods({
        'users.editCompanyProfile'(userId, fname, lname, company, companyURL, img) {
            check(userId, String);
            check(fname, String);
            check(lname, String);
            check(company, String);
            check(companyURL, String);
            users.update(userId, {
                $set: {firstName: fname, lastName: lnamem, company: compnany, companyURL: companyURL, img: img}
            });
        }
    });

    Meteor.methods({
        'users.edit'(userId, email, password) {
            check(userId, String);
            check(email, String);
            check(password, String);
            users.update(userId, {
                $set: {email: email, password: password}
            });
        }
    });

    Meteor.methods({
        'users.editFreelancerProfile'(userId, fname, lname, position, location, experience, rate, link, travel, headline, introduce, skill, sector, img, bgimg) {
            check(userId, String);
            check(fname, String);
            check(lname, String);
            check(position, String);
            check(location, String);
            check(experience, String);
            check(rate, String);
            check(link, String);
            check(travel, Boolean);
            check(introduce, String);
            check(skill, String);
            check(sector, String);
            check(img, String);
            check(bgimg, String);
            users.update(userId, {
                $set: {
                    firstName: fname,
                    lastName: lnamem,
                    company: compnany,
                    ExperienceInPosition: {experience: experience, rate: rate, link: link},
                    details: {headline: headline, introduce: introduce, skill: skill, sector: sector}
                }
            });
        }
    });

    Accounts.onCreateUser(function (option, user) {
        user.firstName = option.firstName;
        user.lastName = option.lastName;
        user.company = option.company;
        user.roles = new Array();
        user.roles.push('company');
        user.roles.push('company_beta');
        user.invatationCode = Random.id(5).toUpperCase();
        return user
    });

    Meteor.methods({
        'users.createUserCompany' (firstName, lastName, company, email, password) {
            console.log(firstName + lastName + company + email + password);
            check(firstName, String);
            check(lastName, String);
            check(company, String);
            check(email, String);
            check(password, String);
            Accounts.createUser({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                company: company
            });
            const user = Accounts.findUserByEmail(email);
            //Accounts.sendVerificationEmail(user._ID);
        }
    });

    Meteor.methods({
        'users.checkValidation' (text, type) {
            check(text, String);
            check(type, String);
            if (!text) {
                throw new Meteor.Error(1, 'is required.');
            }
            if (type === 'email') {
                const user = Accounts.findUserByEmail(text);
                console.log(user);
                if (user) {
                    throw new Meteor.Error(2, 'Email has been used.')
                }
            }
        }
    });
}

