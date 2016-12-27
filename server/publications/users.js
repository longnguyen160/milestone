import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {
    Meteor.publish("users.single", function() {
        return Meteor.users.find();
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


