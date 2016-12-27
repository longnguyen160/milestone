import React from 'react';
import {mount} from 'react-mounter';
/*
	Layout - Mainlayout	
	Home - Main context - URL: /
	ForgotPassword - URL: /account/forgot
	CompanyRegister - URL: register/company
	FreelancerRegister - URL: register/freelancer or /i/{token}
	TOS - Term of Service - URL: /tos 
	Login - URL: account/login
	FinishJoin - URL: register/freelancer/finish
	Apply - URL: register/freelancer/apply
	Confirm - URL: register/confirm/{token}
	Update - URL: /profile/update/{token}
	Selfcare - URL: profile/selfcare
	AdminInvite - URL: admin/invites
	Profile - URL: profile/{username}
*/
import Layout from './components/MainLayout.jsx';
import Home from '../users/components/Home.jsx';
import ForgotPassword from '../users/containers/ForgotPassword.js';
import CompanyRegister from '../users/containers/CompanyRegister.js';
import FreelancerRegister from '../users/containers/FreelancerRegister.js';
import TOS from '../users/components/TOS.jsx';
import Login from '../users/containers/Login.js';
import FinishJoin from '../users/components/FinishJoin.jsx';
import Apply from '../users/components/Apply.jsx';
import Confirm from '../users/components/Confirm.jsx';
import Update from '../users/components/Update.jsx';
import Selfcare from '../users/components/Selfcare.jsx';
import AdminInvite from '../users/components/AdminInvite.jsx';
import Profile from '../users/components/UserProfile.jsx';


export default function (injectDeps, {FlowRouter}) {
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

	FlowRouter.route('/account/forgot', {
		name: 'account.sendPassword',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<ForgotPassword />)
			});
		}
	});

	FlowRouter.route('/account/login', {
		name: 'account.login',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Login />)
			});
		}
	});

	FlowRouter.route('/register/company', {
		name: 'account.signup',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<CompanyRegister />)
			});
		}
	});

	FlowRouter.route('/register/freelancer', {
        name: 'account.join',
		action() {
			mount(MainLayoutCtx, {
                content: () => (<FreelancerRegister />)
            });
		}
	});

	FlowRouter.route('/register/freelancer/finish', {
		name: 'account.finish',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<FinishJoin />)
			});
		}
	});

	FlowRouter.route('/register/freelancer/apply', {
		name: 'account.apply',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Apply />)
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

}
