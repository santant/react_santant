import React from 'react'
import './user.less'

class Verification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			findpwd: '',
			//【'verification-check-success'】,【'verification-check-wrong'】
			findpwdstatus: 'verification-cont',
			findpwdNameclass: 'verification-regular-none',
		};
	}

	handlefindpwdChange = (event) => {
		this.setState({
			findpwd: event.target.value,
			findpwdNameclass: 'verification-regular-active',
		})
	}
	handlefindpwdFocus = (event) => {
		this.setState({
			findpwdNameclass: 'verification-regular-default',
		})
	}
	handlefindpwdBlur = (event) => {
		if (!this.state.findpwd) {
			this.setState({
				findpwdNameclass: 'verification-regular-default',
			})
		} else {
			this.setState({
				findpwdNameclass: 'verification-regular-active',
			})
		}

	}
	render() {
		return (
			<div className='verification'>
					<div className="verification-title">
						<h5>GA Verification</h5>
					</div>
					<div className="verification-box">
						<div className={this.state.findpwdstatus}>
							<span className={this.state.findpwdNameclass}>GA Verification</span>
							<input type="text"
							name="username"
							value={this.state.findpwd}
							onChange={this.handlefindpwdChange}
							onFocus={this.handlefindpwdFocus}
							onBlur={this.handlefindpwdBlur}
							placeholder="Email"
							className="verification-input"/>
						</div>
					</div>
					<div className="btn-box">
						<button
						className={this.state.findpwd?'btn-cont btn-success':'btn-cont'}
						>
							Confirm
						</button>
					</div>
			</div>
			
		)
	}
}
export default Verification