let config = {
    root:"https://springsamlboottest.com:8443/api",
    mode:'cors',
    api:{
        account:{
            resourcePath:"/auth",
            login:{
                resourcePath: "/login",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: "POST",
                successCode: 200
            },
            signUp:{
                resourcePath: "/signUp",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: "POST",
                successCode: 201,
                emailUsedCode: 409
            }
        }
    },
    hashPath:{
        login:'/login',
        signUp:'/signUp',
        main:'/main'
    },
    springBootSaml:{
        okta:'/springbootsaml'
    }
};

export default config;