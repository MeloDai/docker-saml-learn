import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FrameWork from "../frameWork/frameWork";
import { Link } from "react-router-dom";
import EasyLogin from "../staticJs/setting";

export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            rePassword:""
        };
    }

    signUp(){
        const {username, password, rePassword} = this.state;
        if(password === rePassword){
            const funObj = {
                userInfo:{
                    username: username,
                    password: password
                }
            };
            EasyLogin.services.account.signUp(funObj);
        }
    }

    setUsername(e, v){
        this.state.username = v;
    }

    setPwd(e, v){
        this.state.password = v;
    }

    setRePwd(e, v){
        this.state.rePassword = v;
    }

    render(){
        return (
            <FrameWork
                content={
                    <div
                        className="absolute-center width-300"
                    >
                        <div>
                            Sign Up
                        </div>
                        <div>
                            <TextField
                                id='signUpEmail'
                                fullWidth={true}
                                hintText="Email Field"
                                floatingLabelText="Email"
                                type="email"
                                onChange={this.setUsername.bind(this)}
                            />
                        </div>
                        <div>
                            <TextField
                                id='SignUpPwd'
                                fullWidth={true}
                                hintText="Password Field"
                                floatingLabelText="Password"
                                type="password"
                                onChange={this.setPwd.bind(this)}
                            />
                        </div>
                        <div>
                            <TextField
                                id='SignUpRePwd'
                                fullWidth={true}
                                hintText="ReEnter Password Field"
                                floatingLabelText="ReEnter Password"
                                type="password"
                                onChange={this.setRePwd.bind(this)}
                            />
                        </div>
                        <div>
                            <RaisedButton
                                label='sign up'
                                primary={true}
                                fullWidth={true}
                                onClick={this.signUp.bind(this)}
                            />
                        </div>
                        <div
                            className='display-flex'
                        >
                            <div>
                                <Link to='/login'>
                                    <FlatButton
                                        label='login'
                                    />
                                </Link>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                }
            />
        );
    }
}