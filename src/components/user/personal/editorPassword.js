import React from 'react'
import {
	Icon
} from 'antd-mobile';
import HanderNav from '../../index/handerNav'

import './editorPassword.less'

class EditorPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			old:'',
			oldstatus:'',
			oldclass: 'regular-none',
            oldChange: false,
            checkOld:'wrong wrong-hide',
            confirm:'',
            confirmstatus:'',
            confirmclass: 'regular-none',
            confirmChange: false,
            checkConfirm:'wrong wrong-hide',
            new:'',
            newstatus:'',
            newclass: 'regular-none',
            newChange: false,
            checkNew:'wrong wrong-hide',
		}
	}
	
	handleoldChange = (event) => {
		this.setState({
			old: event.target.value,
			oldstatus: '',
		oldclass: 'regular-active',
		oldChange:true,
		checkOld: 'wrong wrong-hide'
		})
	}
	handleoldFocus = (event) => {
		this.setState({
			oldstatus: '',
			oldChange: true,
			oldclass: 'regular-default',
			checkOld: 'wrong wrong-hide'
		})
	}
	handleoldBlur = (event) => {
		this.setState({
			oldChange:false
		})

		if (!this.state.oldPassword) {
			this.setState({
				oldclass: 'regular-default',
				checkOld: 'wrong wrong-show'
			})
			return false;
		}
		if (this.state.oldPassword=='1111') {
			this.setState({
				oldclass: 'regular-active',
				oldstatus: 'check-success',
				checkOld: 'wrong wrong-hide'
			})
		} else {
			this.setState({
				oldclass: 'regular-wrong',
				oldstatus: 'check-wrong',
				checkOld: 'wrong wrong-show'
			})
		}
	}

	handlenewChange = (event) => {
		this.setState({
			new: event.target.value,
			newstatus: '',
			newclass: 'regular-active',
			newChange:true,
			checkNew: 'wrong wrong-hide'
		})
	}
	handlenewFocus = (event) => {
		this.setState({
			newstatus: '',
			newChange: true,
			newclass: 'regular-default',
			checkNew: 'wrong wrong-hide'
		})
	}
	handlenewBlur = (event) => {
		this.setState({
			newChange:false
		})

		if (!this.state.oldPassword) {
			this.setState({
				newclass: 'regular-default',
				checkNew: 'wrong wrong-show'
			})
			return false;
		}
		if (this.state.new=='2222') {
			this.setState({
				newclass: 'regular-active',
				newstatus: 'check-success',
				checkNew: 'wrong wrong-hide'
			})
		} else {
			this.setState({
				newclass: 'regular-wrong',
				newstatus: 'check-wrong',
				checkNew: 'wrong wrong-show'
			})
		}
	}

	handleconfirmChange = (event) => {
		this.setState({
			confirm: event.target.value,
			confirmstatus: '',
			confirmclass: 'regular-active',
			confirmChange:true,
			checkConfirm: 'wrong wrong-hide'
		})
	}
	handleconfirmFocus = (event) => {
		this.setState({
			confirmstatus: '',
			confirmChange: true,
			confirmclass: 'regular-default',
			checkConfirm: 'wrong wrong-hide'
		})
	}
	handleconfirmBlur = (event) => {
		this.setState({
			confirmChange:false
		})

		if (!this.state.oldPassword) {
			this.setState({
				confirmclass: 'regular-default',
				checkConfirm: 'wrong wrong-show'
			})
			return false;
		}
		if (this.state.confirm=='3333') {
			this.setState({
				confirmclass: 'regular-active',
				confirmstatus: 'check-success',
				checkConfirm: 'wrong wrong-hide'
			})
		} else {
			this.setState({
				confirmclass: 'regular-wrong',
				confirmstatus: 'check-wrong',
				checkConfirm: 'wrong wrong-show'
			})
		}
	}


	render() {
		return (
			<div className='editorPassword-box'>
            <HanderNav isLeft noBorder  title={'PASSWORD'} ></HanderNav>
			<div className='editorPassword'>
				<ul className="editorPassword-form">
					<li className={this.state.oldstatus}>
						<span className={this.state.oldclass}>Old Password</span>
						<div className="editorPassword-input-box">
							<input type="password"
							name="password"
							value={this.state.old}
							onChange={this.handleoldChange}
							onFocus={this.handleoldFocus}
							onBlur={this.handleoldBlur}
							placeholder="Old Password"
							className="editorPassword-input"/>
						</div>
						<span className={this.state.oldChange?'passwordprompt-show':'passwordprompt'}>
							Password requirements：8 - 32 bits,at least one lowercase letter,at least one uppercase letter,at least one number,there is at least one special character ~! @#$%^&*()_ +
						</span>
						<span className={this.state.checkOld}>
							Password wrong Password wrongPassword wrong
						</span>
					</li>
					<li className={this.state.newstatus}>
						<span className={this.state.newclass}>New Password</span>
						<div className="editorPassword-input-box">
							<input type="password"
							name="password"
							value={this.state.new}
							onChange={this.handlenewChange}
							onFocus={this.handlenewFocus}
							onBlur={this.handlenewBlur}
							placeholder="New Password"
							className="editorPassword-input"/>
						</div>
						<span className={this.state.newChange?'passwordprompt-show':'passwordprompt'}>
							Password requirements：8 - 32 bits,at least one lowercase letter,at least one uppercase letter,at least one number,there is at least one special character ~! @#$%^&*()_ +
						</span>
						<span className={this.state.checkNew}>
							Password wrong Password wrongPassword wrong
						</span>
					</li>
					<li className={this.state.confirmstatus}>
						<span className={this.state.confirmclass}>Confirm Password</span>
						<div className="editorPassword-input-box">
							<input type="password"
							name="password"
							value={this.state.confirm}
							onChange={this.handleconfirmChange}
							onFocus={this.handleconfirmFocus}
							onBlur={this.handleconfirmBlur}
							placeholder="Confirm Password"
							className="editorPassword-input"/>
						</div>
						<span className={this.state.confirmChange?'passwordprompt-show':'passwordprompt'}>
							Password requirements：8 - 32 bits,at least one lowercase letter,at least one uppercase letter,at least one number,there is at least one special character ~! @#$%^&*()_ +
						</span>
						<span className={this.state.checkConfirm}>
							Password wrong Password wrongPassword wrong
						</span>
					</li>
				</ul>

			</div>
			<div className="btn-box">
				<button
				className={this.state.new&&this.state.old&&this.state.onfirm?'btn-cont btn-success':'btn-cont'}
				>
					Submit
				</button>
			</div>
            </div>
			)
	}
}
export default EditorPassword