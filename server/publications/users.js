import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
<<<<<<< HEAD
export default function () {
    Meteor.publish("users.single", function() {
        return Meteor.users.find();
    });
}
=======

export default function() {
    Meteor.publish('users.single', function(userId){
        check(userId, String);
        return Meteor.users.find(userId);
    });

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
}
>>>>>>> origin/master
