import {instance} from './Instance';

// [Authentication]

export const AuthProfileAPI = {
    loginProfile(email:string | null, password:string | null, rememberMe:boolean, captcha:string | null) {
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