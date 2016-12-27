import {Random} from 'meteor/random';

function verifyEmail(email) {

	let id = Accounts.findUserByEmail(email);
	Accounts.sendVerificationEmail(id, email);

};

export default function() {
	
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

        // check(firstName,String);
        // check(lastName,String);
        // check(company,String);
        // check(email,String);
        // check(password, String);
        check([firstName,lastName,company,email,password], [String]);
        Accounts.createUser({
            email: email,
            password: password,
            firstName:firstName,
            lastName:lastName,
            company:company,
            roles:'company'
        });
        verifyEmail(email);
    }});
    //Create user freelancer
    Meteor.methods({'users.createUserFreelancer' (firstName,lastName,email,password) {

        check(firstName,String);
        check(lastName,String);
        check(invitationCode,String);
        check(email,String);
        check(password, String);
        check([firstName,lastName,email,password], [String]);
        //Call create user method
        Accounts.createUser({
            email: email,
            password: password,
            firstName:firstName,
            lastName:lastName,
            roles:'freelancer',
        });
        verifyEmail(email);
    }});
    //Check validation
    //Check validation
  Meteor.methods({'users.checkValidation' (text,type) {
        check(text,String);
        check(type,String);
        //if empty content
        console.log(text);
        let errorString = '';
        if(!text){
            errorString = ' is required';
        }
        if (text && type === 'email') {
            const user = Accounts.findUserByEmail(text);
            if (user) {
                errorString = ' has been used';
            }
        }
        if (errorString.length !== 0) {
            throw new Meteor.Error('Error',errorString);
        }
  }});

    Meteor.methods({
        'users.sendPassword'(email) {
            check(email, String);
        }
    });

    Meteor.methods({
        'users.editCompanyProfile'(userId, fname, lname, company, companyURL) {
            check(userId, String);
            check(fname, String);
            check(lname, String);
            check(company, String);
            check(companyURL, String);
            Meteor.users.update(userId, {
                $set: {firstName: fname, 
                    lastName: lname,
                    company: company,
                    companyURL: companyURL
                    }
            });
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
        'users.editFreelancerProfile'(
        userId, 
        fname, 
        lname, 
        position, 
        location, 
        experience, 
        rate, 
        link, 
        travel, 
        headline, 
        introduce, 
        skill, 
        sector, 
        img, 
        bgimg) {
                // check(userId, String);
                // check(fname, String);
                // check(lname, String);
                // check(position, String);
                // check(location, String);
                // check(experience, String);
                // check(rate, String);
                // check(link, String);
                // check(travel, Boolean);
                // check(introduce, String);
                // check(skill, String);
                // check(sector, String);
                // check(img, String);
                // check(bgimg, String);
                check([userId, 
                fname, 
                lname, 
                position, 
                location, 
                experience, 
                rate, 
                link, 
                travel, 
                headline, 
                introduce, 
                skill, 
                sector, 
                img, 
                bgimg], [String]);
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
