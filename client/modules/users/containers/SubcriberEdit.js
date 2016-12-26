//import SubcriberEdit from '../components/SubcriberEdit.jsx';
//import {useDeps,composeWithTracker,composeAll} from 'mantra-core';

//export const composer = ({context,clearErrors},onData) => {
  //  const {LocalState} = context();
    //const error = LocalState.get('SAVE_ERROR');
    //onData(null,{error});
    //return clearErrors;
//};

//export const depsMapper = (context,actions) => ({
  //  edit: actions.users.eddit,
    //clearErrors: actions.users.clearErrors,
    //context: () => context
//});

//export default composeAll(
  //  composeWithTracker(composer),
    //useDeps(depsMapper)
//)(SubcriberEdit);
