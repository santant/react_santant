import React from 'react'
import './user.less'
import verifyURL1 from './images/verify01.png';
import verifyURL2 from './images/verify02.png';

class Login extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                userName: '',
                password: '',
                //校验信息默认不加样式，成功加【'check-success'】，错误加【'check-wrong'】
                userNamestatus: '',
                passwordstatue: '',
                userNameclass: 'login-regular-none',
                passwordstatus: 'login-regular-none',
            };
        }

        handleNameChange = (event) => {
            this.setState({
                userName: event.target.value,
                userNameclass: 'login-regular-active',
            })
        }
        handleNameFocus = (event) => {
            this.setState({
                userNameclass: 'login-regular-default',

            })
        }
        handleNameBlur = (event) => {
            if (!this.state.userName) {
                this.setState({
                    userNameclass: 'login-regular-default',
                })
            } else {
                this.setState({
                    userNameclass: 'login-regular-active',
                })
            }

        }

        handlePasswordChange = (event) => {
            this.setState({
                password: event.target.value,
                passwordstatus: 'login-regular-active',
            })
        }
        handlePasswordFocus = (event) => {
            this.setState({
                passwordstatus: 'login-regular-default',
            })
        }
        handlePasswordBlur = (event) => {
            if (!this.state.password) {
                this.setState({
                    passwordstatus: 'login-regular-default',
                })
            } else {
                this.setState({
                    passwordstatus: 'login-regular-active',
                })
            }

        }
        render() {
                return (
                        <div id="login" className='login'>
               <div className="login-cont-box ">
                    <div className="login-title">
                        Sign in to FCoin
                    </div>
                    <ul className="login-form">
                        <li className={this.state.userNamestatus}>
                            <span className={this.state.userNameclass}>Username or Email</span>
                            <div className="login-box">
                                <input type="text" 
                                    name="nsername"
                                    value={this.state.userName}
                                    onChange={this.handleNameChange}
                                    onFocus={this.handleNameFocus}
                                    onBlur={this.handleNameBlur}
                                    placeholder="Username or Email" 
                                    className="login-input"/>
                                <span className="forgot">Forgot?</span>
                            </div>

                        </li>
                        <li className={this.state.passwordstatue}>
                            <span className={this.state.passwordstatus}>Password</span>
                            <div className="login-box">
                                <input type="password" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.handlePasswordChange}
                                onFocus={this.handlePasswordFocus}
                                onBlur={this.handlePasswordBlur}
                                placeholder="Password" 
                                className="login-input"/>

                            </div>
                            <span className="wrong">Password wrong wrong wrong wrong</span>

                        </li>
                    </ul>
                    <div className="login-verify">
                        Click the button to verify
                        <div className="left">
                            <img src={verifyURL1 } />
                        </div>
                        <div className="right">
                            <img src={verifyURL2 } />
                        </div>
                    </div>
                    <button 
                     className={this.state.password&&this.state.userName?'login-btn login-btn-success':'login-btn'}
                    >Sign in</button>
                </div> <
            div className = "accoun" > Create an account < /div> <
            /div>
        )
    }
}
export default Login