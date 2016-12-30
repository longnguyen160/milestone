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
import Confirm from '../users/containers/Confirm.js';
import Update from '../users/containers/Update.js';

import Selfcare from '../users/containers/Selfcare';
import AdminInvite from '../users/containers/AdminInvite.js';

import ProfileEdit from '../users/containers/ProfileEdit.js';
import Profile from '../users/containers/UserProfile.js';
import FreelancerApply from '../users/containers/FreelancerApply.js';

import NewPassword from '../users/containers/NewPassword.js';

import Applications from '../users/containers/Applications.js'

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
			if (Meteor.userId()) {
				return FlowRouter.go('/');
			}
			mount(MainLayoutCtx, {
				content: () => (<ForgotPassword />)
			});
		}
	});
//Login page/register/freelancer
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

	FlowRouter.route('/register/confirm/', {
		name: 'account.confirm',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Confirm />)
			});
		}
	});

	FlowRouter.route('/profile/update/:token', {
		name: 'profile.update',
		action({token}) {
			if (!Meteor.userId()) {
				Bert.alert("<b>You don't have permission to view this page<b/>", 'danger');
				return FlowRouter.go('/');
			}
			mount(MainLayoutCtx, {
				content: () => (<Update token={token}/>)
			});
		}
	});

	FlowRouter.route('/admin/apply', {
		name: 'admin.apply',
		action() {
			if (!Meteor.user() || Meteor.user().roles !== 'admin') {
				Bert.alert("<b>You don't have permission to view this page!</b>", 'danger');
				return FlowRouter.go('/');
			}
			mount(MainLayoutCtx, {
				content: () => (<Applications />)
			});
		}
	});

    FlowRouter.route('/profile/edit', {
        name: 'profile.update',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<ProfileEdit />),
                isNotShowFooter: true,
                changeBackground: true
            });
        }
    });

	FlowRouter.route('/profile/selfcare', {
		name: 'account.selfcare',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Selfcare />),
                isNotShowFooter: true,
                changeBackground: true
			});
		}
	});

	FlowRouter.route('/admin/invites', {
		name: 'admin.invites',
		action() {
			if (!Meteor.user() || Meteor.user().roles !== 'admin') {
				Bert.alert("<b>You don't have permission to view this page!</b>", 'danger');
				return FlowRouter.go('/');
			}
			mount(MainLayoutCtx, {
				content: () => (<AdminInvite />)
			});
		}
	});

	FlowRouter.route('/profile/:username', {
		name: 'profile',
		action({username}) {
			if (!Meteor.userId()) {
				Bert.alert("<b>You don't have permission to view this page<b/>", 'danger');
				return FlowRouter.go('/');
			}
			mount(MainLayoutCtx, {
				content: () => (<Profile username={username}/>),
				isNotShowFooter: true,
				changeBackground: true
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
				Bert.defaults.hideDelay = 5555;
				if ( error ) {
					Bert.alert('<b>'+(error.reason === 'Token expired' ? "Your link has expired" : error.reason)+'</b>', 'danger');
				} else {
					Bert.alert('<b>You email has been verified! Click <a href="register/confirm">here</a> to check again</b>', 'success');
				}
				FlowRouter.go("/");
			});
		}
	});

	FlowRouter.route('/new-password/:token', {
		name: 'accounts.newpw',
		action({token}) {
			mount(MainLayoutCtx, {
				content: () => (<NewPassword token={token}/>),
			});
		}
	});

	FlowRouter.route('/reset-password/:token', {
		name: 'accounts.resetpw',
		action(params) {
			FlowRouter.go("/new-password/"+params.token);
		}
	});

}