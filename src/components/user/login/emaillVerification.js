import React from 'react'
import {
	Icon
} from 'antd-mobile';
import './user.less'

class Verification extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='verification'>
				<div className="verification-title">
					<h5>Emaill verification</h5>
				</div>
				<p>We have sent the authentication mail to the following email. Please follow the instructions.
				</p>
				<strong className="email-addr">kiana_liu@outlook.com</strong>
				<span className="receiveno">Did not receive it?<a href="javascript:;">Re - send Mail</a></span>
				
				<div className="verification-footer">
					<span className='dec-title'> 	<i className='iconfont iconright'>&#xe60f;
    </i>If you haven't received the email, do the following:</span>
					<p>• Ensure that the email address provided is correct.Please try to find in spam or other folders.</p>
					<p>• Aet up a white list of email addresses and a white list of domain names. <a href="javascript:;"> How to set up?</a></p>
					<p>• Check the mail client to receive and receive normal.</p>
				</div>
			</div>
			)
	}
}
export default Verification