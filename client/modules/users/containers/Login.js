import Login from '../components/Login.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
    const { LocalState } = context();
    const error = LocalState.get('LOGIN_USER_ERROR');
    onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    login: actions.users.login,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Login);
