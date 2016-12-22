import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import NavBar from '../layout/components/NavBar.jsx';
import Home from '../layout/components/Home.jsx';
<<<<<<< HEAD
import ForgotPassword from '../users/containers/ForgotPassword.js';
import Card from '../layout/components/Card.jsx';
=======
import Login from '../layout/components/Login.jsx';
>>>>>>> e81aefe8f0641a38b6c7096a71faa21e4fb22e39

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

	FlowRouter.route('/account/login', {
		name: 'account.login',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Login />)
			});
		}
	});
}
