import React from 'react'
import './user.less'

class Verification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			resetPassword: '',
			//【'verification-check-success'】,【'verification-check-wrong'】
			resetstatus: 'verification-cont',
			resetNameclass: 'verification-regular-none',
		};
	}

	handleresetChange = (event) => {
		this.setState({
			resetPassword: event.target.value,
			resetNameclass: 'verification-regular-active',
		})
	}
	handleresetFocus = (event) => {
		this.setState({
			resetNameclass: 'verification-regular-default',
		})
	}
	handleresetBlur = (event) => {
		if (!this.state.resetPassword) {
			this.setState({
				resetNameclass: 'verification-regular-default',
			})
		} else {
			this.setState({
				resetNameclass: 'verification-regular-active',
			})
		}

	}
	render() {
		return (
			<div className='verification'>
				<div className="verification-title">
					<h5>Reset password</h5>
				</div>
				<div className="verification-box">
					<div className={this.state.resetstatus}>
						<span className={this.state.resetNameclass}>
							reset password
						</span>
						<input type="password"
						name="password"
						value={this.state.resetPassword}
						onChange={this.handleresetChange}
						onFocus={this.handleresetFocus}
						onBlur={this.handleresetBlur}
						placeholder="password"
						className="verification-input"/>
					</div>
				</div>
				<div className="btn-box">
					<button
					className={this.state.resetPassword?'btn-cont btn-success':'btn-cont'}
					>
						Confirm
					</button>
				</div>

			</div>
		)
	}
}
export default Verification