import React from 'react'
import './user.less'

class FindpwdPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			//【'verification-check-success'】,【'verification-check-wrong'】
			emailstatus: 'verification-cont',
			emailNameclass: 'verification-regular-none',
		};
	}

	handleemailChange = (event) => {
		this.setState({
			email: event.target.value,
			emailNameclass: 'verification-regular-active',
		})
	}
	handleemailFocus = (event) => {
		this.setState({
			emailNameclass: 'verification-regular-default',
		})
	}
	handleemailBlur = (event) => {
		if (!this.state.email) {
			this.setState({
				emailNameclass: 'verification-regular-default',
			})
		} else {
			this.setState({
				emailNameclass: 'verification-regular-active',
			})
		}

	}
	render() {
		return (
			<div>
				<div className='verification'>
					<div className="verification-title">
						<h5>Forgot password</h5>
					</div>
					<div className="verification-box">
						<div className={this.state.emailstatus}>
							<span className={this.state.emailNameclass}>
								forgot password
							</span>
							<input type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleemailChange}
							onFocus={this.handleemailFocus}
							onBlur={this.handleemailBlur}
							placeholder="Email"
							className="verification-input"/>
						</div>
					</div>
					<div className="btn-box">
						<button
						className={this.state.email?'btn-cont btn-success':'btn-cont'}
						>
							Reset password
						</button>
					</div>
				</div>
				<div className = "accoun">Sign up</div>
			</div>
		)
	}
}
export default FindpwdPassword