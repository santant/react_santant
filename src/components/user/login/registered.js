import React from 'react'
import './user.less'
import {
	Icon,
	Checkbox
} from 'antd-mobile';

class Registered extends React.Component {
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
				invitationCodeclass: 'regular-none',
				userNameclass: 'regular-none',
				emailclass: 'regular-none',
				passwordclass: 'regular-none',
				checkemail: 'wrong wrong-hide',
				passwordChange: false
			};
		}

		handleNameChange = (event) => {
			this.setState({
				userName: event.target.value,
				userNameclass: 'regular-active',
			})
		}
		handleNameFocus = (event) => {
			this.setState({
				userNameclass: 'regular-default',

			})
		}
		handleNameBlur = (event) => {
			if (!this.state.userName) {
				this.setState({
					userNameclass: 'regular-default',
				})
			} else {
				this.setState({
					userNameclass: 'regular-active',
				})
			}

		}

		handlePasswordChange = (event) => {
			this.setState({
				password: event.target.value,
				passwordChange: true,
				passwordstatue: 'check-success',
				passwordclass: 'regular-active',
			})
		}
		handlePasswordFocus = (event) => {
			this.setState({
				passwordChange: true,
				passwordclass: 'regular-default',
			})
		}
		handlePasswordBlur = (event) => {

			this.setState({
				passwordChange: false,
			})
			if (!this.state.password) {
				this.setState({
					passwordclass: 'regular-default',
				})
			} else {
				this.setState({
					passwordclass: 'regular-active',
				})
			}

		}

		handleCodeChange = (event) => {
			this.setState({
				invitationCode: event.target.value,
				invitationCodeclass: 'regular-active',
			})
		}
		handleCodeFocus = (event) => {
			this.setState({
				invitationCodeclass: 'regular-default',
			})
		}
		handleCodeBlur = (event) => {
			if (!this.state.invitationCode) {
				this.setState({
					invitationCodeclass: 'regular-default',
				})
			} else {
				this.setState({
					invitationCodeclass: 'regular-active',
				})
			}

		}
		handleEmailChange = (event) => {
			this.setState({
				email: event.target.value,
				emailstatus: '',
				emailclass: 'regular-active',
				checkemail: 'wrong wrong-hide'
			})
		}
		handleEmailFocus = (event) => {
			this.setState({
				emailclass: 'regular-default',
				emailstatus: '',
				checkemail: 'wrong wrong-hide'
			})
		}
		handleEmailBlur = (event) => {
			let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
			if (!this.state.email) {
				this.setState({
					emailclass: 'regular-default',
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
                <div>
				<div className='personal'>
					<div className="personal-title">
						<h5>Sign in to FCoin</h5>
						<div className="agreement">Please accept the user agreement</div>
					</div>
					<ul className="personal-form">
						<li className={this.state.invitationCodestatus}>
							<span className={this.state.invitationCodeclass}>Invitation Code (optional)</span>
							<div className="personal-input-box">
								<input type="password"
								name="password"
								value={this.state.invitationCode}
								onChange={this.handleCodeChange}
								onFocus={this.handleCodeFocus}
								onBlur={this.handleCodeBlur}
								placeholder="Invitation Code (optional)"
								className="personal-input"/>
							</div>
						</li>
						<li className={this.state.userNamestatus}>
							<span className={this.state.userNameclass}>Username</span>
							<div className="personal-input-box">
								<input type="text"
								name="nsername"
								value={this.state.userName}
								onChange={this.handleNameChange}
								onFocus={this.handleNameFocus}
								onBlur={this.handleNameBlur}
								placeholder="Username"
								className="personal-input"/>
								<span className="forgot">
									<Icon  type='check-circle-o'/>
								</span>
							</div>
						</li>
						<li className={this.state.emailstatus}>
							<span className={this.state.emailclass}>Email</span>
							<div className="personal-input-box">
								<input type="email"
								name="email"
								value={this.state.email}
								onChange={this.handleEmailChange}
								onFocus={this.handleEmailFocus}
								onBlur={this.handleEmailBlur}
								placeholder="Email"
								className="personal-input"/>
								<span className="forgot">
									<Icon  type='check-circle-o'/>
								</span>
							</div>
							<span className={this.state.checkemail}>
								Email wrong wrong wrong wrong
							</span>
						</li>
						<li className={this.state.passwordstatue}>
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
							<span className={this.state.passwordChange?'passwordprompt-show':'passwordprompt'}>
								Password requirements：8 - 32 bits,at least one lowercase letter,at least one uppercase letter,at least one number,there is at least one special character ~! @#$%^&*()_ +
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

					<div className="remember">
						<Checkbox></Checkbox>
						<span>I agree to <em>the terms of use</em> and <em>privacy policy</em></span>
					</div>

					<div className="btn-box">
						<button
						className={this.state.password&&this.state.userName&&this.state.email?'btn-cont btn-success':'btn-cont'}
						>
							Sign in
						</button>
					</div>
				</div>
				<div className = "accoun" >
					Already have an account? Sign in
				< /div>
        	</div>
		)
	}
}
export default Registered