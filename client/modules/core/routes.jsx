import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import NavBar from '../layout/components/NavBar.jsx';
import Home from '../layout/components/Home.jsx';
import ForgotPassword from '../users/containers/ForgotPassword.js';
import SignUp from '../layout/components/SignUp.jsx';
import TOS from '../layout/components/TOS.jsx';
import Login from '../users/containers/Login.js';
import Join from '../layout/components/Join.jsx';
import FinishJoin from '../layout/components/FinishJoin.jsx';
import Apply from '../layout/components/Apply.jsx';
import Confirm from '../layout/components/Confirm.jsx';
import Update from '../layout/components/Update.jsx';
import Selfcare from '../layout/components/Selfcare.jsx';
import AdminInvite from '../layout/components/AdminInvite.jsx';

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
				content: () => (<SignUp />)
			});
		}
	});

	FlowRouter.route('/register/freelancer', {
		name: 'account.join',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Join />)
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

}
