import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FrameWork from "../frameWork/frameWork";
import { Link } from "react-router-dom";
import IconButton from 'material-ui/IconButton';
import EasyLogin from "../staticJs/setting";

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };
    }

    login(){
        const {username, password} = this.state;
        const funObj = {
            userInfo:{
                username: username,
                password: password
            }
        };
        EasyLogin.services.account.login(funObj);
    }

    setUsername(e, v){
        this.state.username = v;
    }

    setPwd(e, v){
        this.state.password = v;
    }

    render(){
        return (
            <FrameWork
                content={
                    <div
                        className="absolute-center width-300"
                    >
                        <div>
                            Login
                        </div>
                        <div>
                            <TextField
                                id='loginEmail'
                                fullWidth={true}
                                hintText="Email Field"
                                floatingLabelText="Email"
                                type="email"
                                onChange={this.setUsername.bind(this)}
                            />
                        </div>
                        <div>
                            <TextField
                                id='loginPwd'
                                fullWidth={true}
                                hintText="Password Field"
                                floatingLabelText="Password"
                                type="password"
                                onChange={this.setPwd.bind(this)}
                            />
                        </div>
                        <div>
                            <RaisedButton
                                label='login'
                                primary={true}
                                fullWidth={true}
                                onClick={this.login.bind(this)}
                            />
                        </div>
                        <div
                            className='display-flex'
                        >
                            <div
                                className='z-index-1'
                            >
                                <Link to='/signUp'>
                                    <FlatButton
                                        label='sign up'
                                    />
                                </Link>
                            </div>
                            <div
                                className='saml-login position-absolute'
                            >
                                <div>
                                    saml login
                                </div>
                                <div
                                    className='saml-login-footer position-absolute display-flex'
                                >
                                    <div>
                                        <a href={EasyLogin.config.springBootSaml.okta}>
                                            Okta
                                        </a>
                                    </div>
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />
        );
    }
}