import React from 'react'
import './user.less'

class Verification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			verification: '',
			//【'verification-check-success'】,【'verification-check-wrong'】
			verificationstatus: 'verification-cont',
			verificationNameclass: 'verification-regular-none',
		};
	}

	handleverificationChange = (event) => {
		this.setState({
			verification: event.target.value,
			verificationNameclass: 'verification-regular-active',
		})
	}
	handleverificationFocus = (event) => {
		this.setState({
			verificationNameclass: 'verification-regular-default',
		})
	}
	handleverificationBlur = (event) => {
		if (!this.state.verification) {
			this.setState({
				verificationNameclass: 'verification-regular-default',
			})
		} else {
			this.setState({
				verificationNameclass: 'verification-regular-active',
			})
		}

	}
	render() {
		return (
			<div className='login'>
							<div className="verification-box">
								<div className="verification-title">GA Verification</div>

								<div className={this.state.verificationstatus}>
									<span className={this.state.verificationNameclass}>GA Verification</span>
									<input type="text" 
                                	name="nsername"
                                	value={this.state.verification}
                                	onChange={this.handleverificationChange}
                                	onFocus={this.handleverificationFocus}
                                	onBlur={this.handleverificationBlur}
                                	placeholder="GA Verification" 
                                	className="verification-input"/>
								</div>
								<button 
                  	 className={this.state.verificationstatus?'verification-btn verification-btn-success':'verification-btn'}
                    >Confirm</button>
							</div>
                
						</div>
		)
	}
}
export default Verification