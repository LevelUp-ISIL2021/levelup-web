import { ACCOUNT_ENDPOINT, SIGNUP_ENDPOINT, SIGNIN_ENDPOINT } from '../utils/appConstants'
import baseService from './baseService';

class AccountService {
    static register = (signUpUser) =>
        baseService.postWithCredentials(SIGNUP_ENDPOINT, signUpUser, {
            withCredentials: true,
        });

	static login = (authCredentials) =>
        baseService.postWithCredentials(SIGNIN_ENDPOINT, authCredentials, {
            withCredentials: true,
        });

	static logout = (token) =>
        baseService.getWithCredentials(`${ACCOUNT_ENDPOINT}/logout`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
}

export default AccountService;
