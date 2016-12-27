import React from 'react';
import Selfcare from './components/Selfcare.jsx';

export const composer = ({context, userId, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('SAVING_ERROR');
    if (userId !== undefined) {
        const user = users.findOne(userId);
        if (user)
            onData(null, {user});
        else onData();
    }
    else onData(null, {error});
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    edit: actions.users.edit,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Selfcare);