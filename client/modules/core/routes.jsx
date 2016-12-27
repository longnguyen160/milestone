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
import AdminInvite from '../users/components/AdminInvite.jsx';

import ProfileEdit from '../users/containers/ProfileEdit.js';
import Profile from '../users/components/UserProfile.jsx';
import FreelancerApply from '../users/containers/FreelancerApply.js';

export default function (injectDeps, {FlowRouter}) {
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
			mount(MainLayoutCtx, {
				content: () => (<ForgotPassword />)
			});
		}
	});
//Login page
	FlowRouter.route('/account/login', {
		name: 'account.login',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Login />)
			});
		}
	});
//Register for company
	FlowRouter.route('/register/company', {
		name: 'account.signup',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<CompanyRegister />)
			});
		}
	});
//Register freelancer with invitation code
	FlowRouter.route('/register/freelancer', {
        name: 'account.join',
		action() {
			mount(MainLayoutCtx, {
                content: () => (<InvittationCode />)
            });
		}
	});
//Register freelance with
	FlowRouter.route('/register/freelancer/finish', {
		name: 'account.finish',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<FreelancerRegisterWithInvitationCode />)
			});
		}
	});
//go to page register of freelancer with no invitation code
	FlowRouter.route('/register/freelancer/apply', {
		name: 'account.apply',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<FreelancerApply />)
			});
		}
	});

	FlowRouter.route('/register/confirm', {
		name: 'account.confirm',
		action() {
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

}
