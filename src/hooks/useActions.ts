import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearStore, getZipcodeApi } from '../store/actions';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ getZipcodeApi, clearStore }, dispatch);
};

export default useActions;
