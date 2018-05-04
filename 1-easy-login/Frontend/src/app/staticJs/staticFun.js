let staticFun = {
    form:{
        setFormData:function (funObj) {
            const {obj} = funObj;
            const formStr = [];
            for (let key in obj){
                formStr.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
            return formStr;
        }
    },
    fetch:{
        setHeader:function (funObj) {
            const {obj, body} = funObj;
            return {
                headers: obj.headers,
                method: obj.method,
                body: body
            }
        }
    }
};

export default staticFun;