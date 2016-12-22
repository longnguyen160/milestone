import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import NavBar from '../layout/components/NavBar.jsx';
import Home from '../layout/components/Home.jsx';

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
	FlowRouter.route('/account-login', {
		name: 'login',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<Home />)
			});
		}
	});
}
