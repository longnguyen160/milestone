import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

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
                $set: {firstName: fname, lastName: lnamem, company: compnany, ExperienceInPosition: {experience: experience, rate: rate, link: link},
                 details: {headline: headline, introduce: introduce, skill: skill, sector: sector}}
            });
        }
    });
}
