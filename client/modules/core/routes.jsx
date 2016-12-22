import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import NavBar from '../layout/components/NavBar.jsx';
import Home from '../layout/components/Home.jsx';
import ForgotPassword from '../users/containers/ForgotPassword.js';

import Login from '../layout/components/Login.jsx';

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
	
	FlowRouter.route('/account/forgot', {
		name: 'users.sendPassword',
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
}
