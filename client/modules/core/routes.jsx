import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import Home from '../users/components/Home.jsx';
import ForgotPassword from '../users/containers/ForgotPassword.js';
import SignUp from '../users/components/SignUp.jsx';
import TOS from '../users/components/TOS.jsx';
import Login from '../users/containers/Login.js';
import FreelancerRegister from '../users/containers/FreelancerRegister.js';
import Join from '../users/components/Join.jsx';
import Apply from '../users/components/Apply.jsx';
import Confirm from '../users/components/Confirm.jsx';
import Update from '../users/components/Update.jsx';
import FinishJoin from '../users/components/FinishJoin.jsx';
import Selfcare from '../users/components/Selfcare.jsx';
import AdminInvite from '../users/components/AdminInvite.jsx';

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

    FlowRouter.route('/profile/edit', {
        name: 'profile.update',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<EditProfile />)
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
