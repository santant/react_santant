import React from 'react'
import './user.less'
import verifyURL1 from './images/verify01.png';
import verifyURL2 from './images/verify02.png';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//邀请码
			invitationCode: '',
			userName: '',
			email: '',
			password: '',
			//校验信息默认不加样式，成功加【'check-success'】，错误加【'check-wrong'】
			invitationCodestatus: '',
			userNamestatus: '',
			emailstatus: '',
			passwordstatue: '',
			invitationCodeclass: 'login-regular-none',
			userNameclass: 'login-regular-none',
			emailclass: 'login-regular-none',
			passwordclass: 'login-regular-none',
			checkemail: 'wrong wrong-hide'
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
				passwordclass: 'login-regular-default',
			})
		} else {
			this.setState({
				passwordclass: 'login-regular-active',
			})
		}

	}

	handleCodeChange = (event) => {
		this.setState({
			invitationCode: event.target.value,
			invitationCodeclass: 'login-regular-active',
		})
	}
	handleCodeFocus = (event) => {
		this.setState({
			invitationCodeclass: 'login-regular-default',
		})
	}
	handleCodeBlur = (event) => {
		if (!this.state.invitationCode) {
			this.setState({
				invitationCodeclass: 'login-regular-default',
			})
		} else {
			this.setState({
				invitationCodeclass: 'login-regular-active',
			})
		}

	}
	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value,
			emailclass: 'login-regular-active',
			emailstatus: '',
			checkemail: 'wrong wrong-hide'
		})
	}
	handleEmailFocus = (event) => {
		this.setState({
			emailclass: 'login-regular-default',
			emailstatus: '',
			checkemail: 'wrong wrong-hide'
		})
	}
	handleEmailBlur = (event) => {
		let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
		if (!this.state.email) {
			this.setState({
				emailclass: 'login-regular-default',
			})
			return false;
		}
		if (emailReg.test(this.state.email)) {
			this.setState({
				emailclass: 'login-regular-active',
				emailstatus: 'check-success',
				checkemail: 'wrong wrong-hide'
			})
		} else {
			this.setState({
				emailclass: 'login-regular-wrong',
				emailstatus: 'check-wrong',
				checkemail: 'wrong wrong-show'
			})
		}

	}
	render() {

		return (
			<div className='login'>
			
                <div className="login-cont-box ">
                    <div className="login-title">
                        Sign in to FCoin
                    </div>
                    <ul className="login-form">
                     <li className={this.state.invitationCodestatus}>
                            <span className={this.state.invitationCodeclass}>Invitation Code (optional)</span>
                            <div className="login-box">
                                <input type="password" 
                                name="password" 
                                value={this.state.invitationCode} 
                                onChange={this.handleCodeChange}
                                onFocus={this.handleCodeFocus}
                                onBlur={this.handleCodeBlur}
                                placeholder="Invitation Code (optional)" 
                                className="login-input"/>
                            </div>

                        </li>
                        
                        
                        <li className={this.state.userNamestatus}>
                            <span className={this.state.userNameclass}>Username</span>
                            <div className="login-box">
                                <input type="text" 
                                	name="nsername"
                                	value={this.state.userName}
                                	onChange={this.handleNameChange}
                                	onFocus={this.handleNameFocus}
                                	onBlur={this.handleNameBlur}
                                	placeholder="Username" 
                                	className="login-input"/>
                                	<span className="forgot">√</span>
                            </div>
                        </li>
                        
                         <li className={this.state.emailstatus}>
                            <span className={this.state.emailclass}>Email</span>
                            <div className="login-box">
                                <input type="email"
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleEmailChange}
                                onFocus={this.handleEmailFocus}
                                onBlur={this.handleEmailBlur}
                                placeholder="Email" 
                                className="login-input"/>
                            </div>
                            <span className={this.state.checkemail}>Email wrong wrong wrong wrong</span>

                        </li>
                        <li className={this.state.passwordstatus}>
                            <span className={this.state.passwordclass}>Password</span>
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
                  	 className={this.state.password&&this.state.userName&&this.state.email?'login-btn login-btn-success':'login-btn'}
                    >Sign in</button>
                </div> </div>
		)
	}
}
export default Login