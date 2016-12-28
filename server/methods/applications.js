import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Applications} from '/lib/collections';
export  default function() {
//create application in database
  Meteor.methods({'applications.create'(firstName, lastName, email, link, introduction){
    //check({firstName,lastName,email,link,introduction}, Object);
//add applications to db
    check(firstName,String);
    check(lastName,String);
    check(link,String);
    check(email,String);
    check(introduction, String);

    Applications.insert({
      firstName:firstName,
      lastName:lastName,
      email:email,
      link:link,
      introduction: introduction,
      createAt: new Date()
    })
  }});

  Meteor.methods({'applications.delete'(email){
    check(email,String);
    Applications.remove({email:email});
  }})
}
