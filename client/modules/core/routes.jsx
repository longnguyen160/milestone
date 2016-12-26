import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import NavBar from '../layout/components/NavBar.jsx';
import Home from '../layout/components/Home.jsx';
import ForgotPassword from '../users/containers/ForgotPassword.js';
import SignUp from '../layout/components/SignUp.jsx';
import TOS from '../layout/components/TOS.jsx';
import Login from '../users/containers/Login.js';
import FreelancerRegister from '../users/containers/FreelancerRegister.js';

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

	FlowRouter.route('/account/signup', {
		name: 'account.signup',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<SignUp />)
			});
		}
	});

	FlowRouter.route('/register/freelancer', {
		name: 'home',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<FreelancerRegister />)
			});
		}
	});

}
