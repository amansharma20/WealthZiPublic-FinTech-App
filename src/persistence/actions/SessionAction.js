/* eslint-disable prettier/prettier */
import { RequestConstant, ResponseConstant } from '../../utils/constants/CommanConstants';
import { SessionConstant } from '../constants/SessionConstant';
import { SessionService } from '../services/SessionService';


export const SessionAction = { getSession, setSession };

function getSession() {
  return async dispatch => {
    dispatch(RequestConstant(SessionConstant.SESSION_REQUEST, {}));
    var result = await SessionService.getSession();
    const resultJson = {
      success: true,
      data: result,
    };
    dispatch(
      ResponseConstant(
        SessionConstant.SESSION_SUCCESS,
        SessionConstant.SESSION_FAILURE,
        resultJson,
      ),
    );
  };
}


function setSession(data) {
  return async dispatch => {
    dispatch(RequestConstant(SessionConstant.SET_SESSION_REQUEST, {}));
    var result = await SessionService.setSession(data);
    dispatch(
      ResponseConstant(
        SessionConstant.SET_SESSION_SUCCESS,
        SessionConstant.SET_SESSION_FAILURE,
        result,
      ),
    );
  };
}
