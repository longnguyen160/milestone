import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Image} from '/lib/collections';

export default function () {
    Meteor.publish("user.single", function(userId) {
        try {
            check(userId, String)
        } catch(err) {
            console.log('user.single - users.js publications');
            return;
        }
        return Meteor.users.find(userId);

    });

    Meteor.publish("users.single", function() {
        return Meteor.users.find();
    });

    Meteor.publish("img.single", function() {
        return Image.find();
    });

    Meteor.publish("username.find", function(username) {
        try {
            check(username, String)
        } catch(err) {
            console.log('username.find - users.js publications');
            return;
        }
        console.log(Meteor.users.find({username}).fetch());
        return Meteor.users.find({username});

    });

}
    // Meteor.publish('userData',function() {
    //     var currentUser;
    //     currentUser = this.user;
    //     console.log(currentUser);
    //     if (currentUser) {
    //         return Meteor.users.find({
    //             _id: currentUser
    //         });
    //     } else {
    //         return this.ready();
    //     }
    // });
