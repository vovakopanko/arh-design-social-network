import {instance} from './Instance';

// [Authentication]

export const AuthProfileAPI = {
    loginProfile(email, password, rememberMe, captcha) {
      return instance.post(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      });
    },
    logoutProfile() {
      return instance.delete(`auth/login`).then((Response) => Response.data);
    },
  };

// [Add Captcha if you send 3 incorrect entries]

export const securityAPI = {
    getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`);
    },
  };