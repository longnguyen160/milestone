import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Applications} from '/lib/collections';

export  default function() {

//create application in database
  Meteor.methods({
    'applications.create'(firstName, lastName, email, link, introduction){

    check(firstName,String);
    check(lastName,String);
    check(link,String);
    check(email,String);
    check(introduction, String);

//Insert to applications db
    Applications.insert({
      firstName:firstName,
      lastName:lastName,
      email:email,
      link:link,
      introduction: introduction,
      createAt: new Date()
    })
  }});

//Delete applications by email
  Meteor.methods({
    'applications.delete'(email){
    check(email,String);
    Applications.remove({email:email});
  }})
}
