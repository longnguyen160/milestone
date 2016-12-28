import React from 'react';
import {mount} from 'react-mounter';
//Homepage
import Home from '../users/components/Home.jsx';
//Mainlayout
import Layout from './containers/MainLayout.js';
//Login page
import Login from '../users/containers/Login.js';
//Forgot password page
import ForgotPassword from '../users/containers/ForgotPassword.js';
//Copany register Page
import CompanyRegister from '../users/containers/CompanyRegister.js';
//Freelaner Register Page with invitation code
//Invitation code page
import InvittationCode from '../users/containers/InvitationCode.js';
//Freelancer register form
import FreelancerRegisterWithInvitationCode from '../users/containers/FreelancerRegisterWithInvitationCode.js';

import TOS from '../users/components/TOS.jsx';
import Confirm from '../users/components/Confirm.jsx';
import Update from '../users/components/Update.jsx';

import Selfcare from '../users/components/Selfcare.jsx';
import AdminInvite from '../users/containers/AdminInvite.js';

import ProfileEdit from '../users/containers/ProfileEdit.js';
import Profile from '../users/components/UserProfile.jsx';
import FreelancerApply from '../users/containers/FreelancerApply.js';

export default function (injectDeps, {FlowRouter,LocalState}) {
	//Home pgae
	const MainLayoutCtx = injectDeps(Layout);
	FlowRouter.route('/', {
		name: 'home',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Home />)
			});
		}
	});

	FlowRouter.route('/tos', {
		name: 'tos',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<TOS />)
			});
		}
	});
//Forgot password page
	FlowRouter.route('/account/forgot', {
		name: 'account.sendPassword',
		action() {
			if (Meteor.userid()) {
				return FlowRouter.go('/');
			}
			mount(MainLayoutCtx, {
				content: () => (<ForgotPassword />)
			});
		}
	});
//Login page
	FlowRouter.route('/account/login', {
		name: 'account.login',
		action() {

			if(Meteor.userId() != null) {
				FlowRouter.go("/");
				return;
			}
			mount(MainLayoutCtx, {
				content: () => (<Login />)
			});
		}
	});
//Register for company
	FlowRouter.route('/register/company', {
		name: 'account.signup',
		action() {
			if (Meteor.userId()) {
				console.log(Meteor.userId());
				return FlowRouter.go('/');
			}
			mount(MainLayoutCtx, {
				content: () => (<CompanyRegister />)
			});
		}
	});
//Register freelancer with invitation code
	FlowRouter.route('/register/freelancer', {
        name: 'account.join',
		action() {
			if (Meteor.userId()) {
				return FlowRouter.go('/');
			}
			const invitationCode = LocalState.get('INVITATIONCODE');
			if (invitationCode) {
				return FlowRouter.go('/register/freelancer/finish');
			}
			mount(MainLayoutCtx, {
                content: () => (<InvittationCode />)
            });
		}
	});
//Register freelance with
	FlowRouter.route('/register/freelancer/finish', {
		name: 'account.finish',
		action() {
			const invitationCode = LocalState.get('INVITATIONCODE');
			if (Meteor.userId()) {
				return FlowRouter.go('/');
			}
			if (!invitationCode) {
				return FlowRouter.go('/register/freelancer');
			}
			mount(MainLayoutCtx, {
				content: () => (<FreelancerRegisterWithInvitationCode />)
			});
		}
	});
//go to page register of freelancer with no invitation code
	FlowRouter.route('/register/freelancer/apply', {
		name: 'account.apply',
		action() {
			if (Meteor.userId()) {
				return FlowRouter.go('/');
			}
			mount(MainLayoutCtx, {
				content: () => (<FreelancerApply />)
			});
		}
	});

	FlowRouter.route('/register/confirm/:token', {
		name: 'account.confirm',
		action({token}) {
			mount(MainLayoutCtx, {
				content: () => (<Confirm />)
			});
		}
	});

	FlowRouter.route('/profile/update', {
		name: 'profile.update',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Update />)
			});
		}
	});

    FlowRouter.route('/profile/edit', {
        name: 'profile.update',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<ProfileEdit />)
            });
        }
    });

	FlowRouter.route('/account/selfcare', {
		name: 'account.selfcare',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Selfcare />)
			});
		}
	});

	FlowRouter.route('/admin/invites', {
		name: 'admin.invites',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<AdminInvite />)
			});
		}
	});

	FlowRouter.route('/profile', {
		name: 'profile',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Profile />)
			});
		}
	});

	FlowRouter.route('/logout', {
		name: 'accounts.logout',
		action() {
			Meteor.logout();
			FlowRouter.go("/");
		}
	});

	FlowRouter.route('/verify-email/:token', {
		name: 'accounts.verify',
		action(params) {
				Accounts.verifyEmail(params.token, ( error ) =>{
		if ( error ) {
			console.error( error, 'danger' );
		} else {
			FlowRouter.go( '/' );
			console.log( 'Email verified! Thanks!', 'success' );
		}
		});
			// FlowRouter.go("/register/confirm/"+params.token);
		}
	});

}
