import "whatwg-fetch";
import EasyLogin from "./setting";

let account = {
    login: function (funObj) {
        const {userInfo} = funObj;
        const {config} = EasyLogin;
        const {root} = config;
        const {account} = config.api;
        const {staticFun} = EasyLogin.services;

        const formStr = staticFun.form.setFormData({
            obj:userInfo
        });
        const header = staticFun.fetch.setHeader({
            obj:account.login,
            body:formStr.join('&')
        });

        fetch(root + account.resourcePath + account.login.resourcePath,
            header
            ).then(function (response) {
            if (response.status === account.login.successCode) {
                const {hashPath} = EasyLogin.config;
                window.location.hash = hashPath.main;
                return response.text();
            }
            else {
                return null;
            }
        }).then(function (response) {
            if (response) {
                console.log(response);
            }
        }).catch(function (err) {
            console.log(err);
        });
    },
    signUp:function (funObj) {
        const {userInfo} = funObj;
        const {config} = EasyLogin;
        const {root} = config;
        const {account} = config.api;
        const {staticFun} = EasyLogin.services;

        const formStr = staticFun.form.setFormData({
            obj:userInfo
        });
        const header = staticFun.fetch.setHeader({
            obj:account.signUp,
            body:formStr.join('&')
        });

        fetch(root + account.resourcePath + account.signUp.resourcePath,
            header
            ).then(function (response) {
            if (response.status === account.signUp.successCode) {
                return response.text();
            }
            else if (response.status === account.signUp.emailUsedCode){
                console.log('used');
                return null;
            }
            else {
                return null;
            }
        }).then(function (response) {
            if (response) {
                console.log(response);
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
};

export default account;