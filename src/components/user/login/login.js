import React from 'react'
import './user.less'
import ServerApi from './../../api'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            //校验信息默认不加样式，成功加【'check-success'】，错误加【'check-wrong'】
            userNamestatus: '',
            checkUserName: 'wrong wrong-hide',
            passwordstatue: '',
            userNameclass: 'regular-none',
            passwordstatus: 'regular-none',
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
            passwordstatus: 'regular-active',
        })
    }
    handlePasswordFocus = (event) => {
        this.setState({
            passwordstatus: 'regular-default',
        })
    }
    handlePasswordBlur = (event) => {
        if (!this.state.password) {
            this.setState({
                passwordstatus: 'regular-default',
            })
        } else {
            this.setState({
                passwordstatus: 'regular-active',
            })
        }

    }
    componentDidMount = async () => {
        // ServerApi.logoin(null);
    }
    handleLogin = () => {
        let submitData = {
            captcha: '',
            email: this.state.userName,
            password: this.state.userName,
        }
        ServerApi.logoin(submitData).then(res => {
            console.log('res+++', res)
        });
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
                                <span className="forgot">
											Forgot?
										</span>
                            </div>
                            <span className={this.state.checkUserName}>
								UserName wrong wrong wrong wrong
							</span>
                        </li>
                        <li className={this.state.passwordstatue}>
                            <span className={this.state.passwordstatus}>Password</span>
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
                            {/*<span className="wrong">*/}
                            {/*Password wrong wrong wrong wrong*/}
                            {/*</span>*/}
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
                            className={this.state.password && this.state.userName && this.state.email ? 'btn-cont btn-success' : 'btn-cont'}
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