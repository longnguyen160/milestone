import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import NavBar from '../layout/components/NavBar.jsx';
import Home from '../layout/components/Home.jsx';
import ForgotPassword from '../users/containers/ForgotPassword.js';

export default function (injectDeps, {FlowRouter}) {
	const MainLayoutCtx = injectDeps(Layout);
	FlowRouter.route('/', {
		name: 'home.test',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Home />)
			});
		}
	});
	FlowRouter.route('/login/forgotpassword', {
		name: 'users.sendPassword',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<ForgotPassword />)
			});
		}
	});
}
