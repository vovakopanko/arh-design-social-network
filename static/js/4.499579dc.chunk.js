(this["webpackJsonparh-design-social-network"]=this["webpackJsonparh-design-social-network"]||[]).push([[4],{322:function(e,t,a){e.exports={titlelogin:"Login_titlelogin__1aiDp",titleForm:"Login_titleForm__63OHp",formAllError:"Login_formAllError__6nzOu",freeLogin:"Login_freeLogin__1T5M2",enterLog:"Login_enterLog__2OqVc"}},324:function(e,t,a){"use strict";a.r(t);var r=a(19),n=a(20),l=a(22),c=a(21),i=a(0),o=a.n(i),s=a(14),m=a(17),u=a(146),p=a(57),h=a(46),b=a(35),f=a(322),g=a.n(f),d=Object(u.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,r=e.captchaUrl;return o.a.createElement("form",{onSubmit:t,className:g.a.titleForm},o.a.createElement("div",null,Object(h.a)("text",b.a,[h.c],"email","email")),o.a.createElement("div",null,Object(h.a)("password",b.a,[h.c],"password","password"),r&&o.a.createElement("img",{src:r,alt:"captcha"}),r&&Object(h.a)({},b.a,[h.c],"captcha","Symbols from image")),o.a.createElement("div",null,Object(h.a)("checkbox","input",null,"rememberMe",null),"Remember Me"),a&&o.a.createElement("div",{className:g.a.formAllError},a),o.a.createElement("div",null,o.a.createElement("button",{className:g.a.enterLog},"\u0412\u0445\u043e\u0434")),o.a.createElement("div",{className:g.a.freeLogin},o.a.createElement("div",null,"If you dont registreted, you can use test account:"),o.a.createElement("div",null,o.a.createElement("b",null,"Login"),": free@samuraijs.com"," "),o.a.createElement("div",null,o.a.createElement("b",null,"Password"),": free")))})),E=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;if(this.props.isAuth)return o.a.createElement(m.a,{to:"/profile"});return o.a.createElement("div",{className:g.a.titlelogin},o.a.createElement("h1",null,"LOG IN"),o.a.createElement(d,{onSubmit:function(t){e.props.login(t.email,t.password,t.remberMe,t.captcha)},captchaUrl:this.props.captchaUrl}))}}]),a}(o.a.Component);t.default=Object(s.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:p.c})(E)}}]);
//# sourceMappingURL=4.499579dc.chunk.js.map