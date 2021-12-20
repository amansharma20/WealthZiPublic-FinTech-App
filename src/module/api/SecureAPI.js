import axios from 'axios';
import { applicationProperties } from '../../../application.properties';
import CommonLoading from '../../components/CommonLoading';
import * as Keychain from 'react-native-keychain';


const post = async (endPoint, data, loading) => {
  let userToken = await Keychain.getGenericPassword();
  let token = userToken.password;
  if (loading) {
    CommonLoading.show();
  }
  try {
    let response = await axios.post(applicationProperties.baseUrl + endPoint, data, {headers : { 'Authorization': token}});
    if (response.data !== undefined && response.data.status) {
      return {
        success: true,
        data: response,
      };
    } else {
      return {
        success: false,
        data: response,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  } finally {
    if (loading) {
      CommonLoading.hide();
    }
  }
};
const get = async (endPoint, data, loading) => {
  let userToken = await Keychain.getGenericPassword();
  let token = userToken.password;
  if (loading) {
    CommonLoading.show();
  }
  try {
    let response = await axios.get(applicationProperties.baseUrl + endPoint, {headers : { 'Authorization': token}});
    if (response.data !== undefined && response.data.status) {
      return {
        success: true,
        data: response,
      };
    } else {
      return {
        success: true,
        data: response,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  } finally {
    if (loading) {
      CommonLoading.hide();
    }
  }
};
export const api = {
  post,
  get,
};