import React,{context} from 'react'
import './user.less'
import ServerApi from './../../api'
import {Link,browserHistory} from 'react-router-dom'
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.context.router;
        this.state = {
            userName: '',
            password: '',
            //校验信息默认不加样式，成功加【'check-success'】，错误加【'check-wrong'】
            userNamestatus: '',
            passwordstatus: '',
            userNameclass: 'regular-none',
            passwordclass: 'regular-none',
            checkUserName: 'wrong wrong-hide',
            checkPassword: 'wrong wrong-hide'
        };
    }

    handleNameChange = (event) => {
        this.setState({
            userName: event.target.value,
            userNamestatus: '',
            userNameclass: 'regular-active',
            checkUserName: 'wrong wrong-hide'
        })
    }
    handleNameFocus = (event) => {
        this.setState({
            userNameclass: 'regular-default',
            userNamestatus: '',
            checkUserName: 'wrong wrong-hide'
        })
    }
    handleNameBlur = (event) => {
        let userReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
        if (!this.state.userName) {
            this.setState({
                userNameclass: 'regular-default',
            })
            return false;
        }
        if (userReg.test(this.state.userName)) {
            this.setState({
                userNameclass: 'regular-active',
                userNamestatus: 'check-success',
                checkUserName: 'wrong wrong-hide'
            })
        } else {
            this.setState({
                userNameclass: 'regular-wrong',
                userNamestatus: 'check-wrong',
                checkUserName: 'wrong wrong-show'
            })
        }

    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
            passwordstatus: '',
            passwordclass: 'regular-active',
            checkPassword: 'wrong wrong-hide'
        })
    }
    handlePasswordFocus = (event) => {
        this.setState({
            passwordclass: 'regular-default',
            passwordstatus: '',
            checkPassword: 'wrong wrong-hide'
        })
    }
    handlePasswordBlur = (event) => {
        if (!this.state.password) {
            this.setState({
                passwordclass: 'regular-wrong',
                passwordstatus: 'check-wrong',
                checkPassword: 'wrong wrong-show'
            })
        } else {
            this.setState({
                passwordclass: 'regular-active',
                passwordstatus: 'check-success',
                checkPassword: 'wrong wrong-hide'
            })
        }

    }
    componentDidMount = async () => {
        // ServerApi.logoin(null);
    }
    handleLogin = () => {
        let submitData = {
            'email': this.state.userName.toString(),
            'password': this.state.password.toString(),
        }
        ServerApi.logoin(submitData).then(res => {
            let result=res.data;
            sessionStorage.setItem('token', result.data);
            console.log('====',this.context)
            // this.context.router.push('/findpwdPassword');
        });
    }

    jupmFinduserName = () => {
        // this.context.router.history.push('/chat')
        this.props.history.push('/findpwdPassword')
        console.log('===',this.props)
    }

    render() {
        return (
            <div>
                <div className='personal'>
                    <div className="personal-title">
                        <h5>Sign in to FCoin</h5>
                    </div>
                    <ul className="personal-form">
                        <li className={this.state.userNamestatus}>
                            <span className={this.state.userNameclass}>Username or Email</span>
                            <div className="personal-input-box">
                                <input type="text"
                                       name="nsername"
                                       value={this.state.userName}
                                       onChange={this.handleNameChange}
                                       onFocus={this.handleNameFocus}
                                       onBlur={this.handleNameBlur}
                                       placeholder="Username or Email"
                                       className="personal-input"/>
                                <span className="forgot" onClick={this.jupmFinduserName.bind(this)}>
											Forgot?
										</span>
                            </div>
                            <span className={this.state.checkUserName}>
								UserName wrong wrong wrong wrong
							</span>
                        </li>
                        <li className={this.state.passwordstatus}>
                            <span className={this.state.passwordclass}>Password</span>
                            <div className="personal-input-box">
                                <input type="password"
                                       name="password"
                                       value={this.state.password}
                                       onChange={this.handlePasswordChange}
                                       onFocus={this.handlePasswordFocus}
                                       onBlur={this.handlePasswordBlur}
                                       placeholder="Password"
                                       className="personal-input"/>
                            </div>
                            <span className={this.state.checkPassword}>
                            Password wrong wrong wrong wrong
                            </span>
                        </li>
                    </ul>
                    <div className="verify-box">
                        <div className="verify-cont">
                            Click the button to verify
                            <div className="left">
                                <img src={require('./images/verify01.png')} alt=""/>
                            </div>
                            <div className="right">
                                <img src={require('./images/verify02.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <button
                            className={this.state.password && this.state.userName ? 'btn-cont btn-success' : 'btn-cont'}
                            onClick={this.handleLogin}>
                            Sign in
                        </button>
                    </div>

                </div>
                <div className="accoun">
                    Create an account
                </div>
            </div>
        )
    }
}

export default Login