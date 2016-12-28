import NewPassword from '../components/NewPassword.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, token, clearErrors }, onData) => {
    const { LocalState } = context();
    const error = LocalState.get('PASSWORD_ERROR');
    let Token = token;
    onData(null, {error, Token});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    resetpassword: actions.users.resetPassword,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(NewPassword);
