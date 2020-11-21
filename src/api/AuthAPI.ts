import { instance } from "./Instance";
import { ResultCodeEnum, CaptchaResultCodeEnum } from "./UsersAPI";

// [Authentication]

type LoginResponseType = {
 resultCode: ResultCodeEnum | CaptchaResultCodeEnum
 data: {
   userId: number
 }
 messages: Array<string>
};

type LogoutResponseType = {
  resultCode: number
  messages: Array<string>
}

type CaptchaResponseType = {
  url: string
}

export const AuthProfileAPI = {
  loginProfile(
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null
  ) {
    return instance.post<LoginResponseType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    }).then((Response)=>Response.data);
  },
  logoutProfile() {
    return instance.delete<LogoutResponseType>(`auth/login`).then((Response) => Response.data);
  },
};

// [Add Captcha if you send 3 incorrect entries]

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<CaptchaResponseType>(`security/get-captcha-url`).then(Response=>Response.data);
  },
};
