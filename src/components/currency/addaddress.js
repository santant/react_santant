import React from 'react'
import {
	Icon
} from 'antd-mobile';
import HanderNav from '../index/handerNav'

import './currency.less'

class Addaddress extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			notes:'',
			notesstatus:'',
			notesclass: 'regular-none',
            checkNotes:'wrong wrong-hide',
            newAddress:'',
            newAddressstatus:'',
            newAddressclass: 'regular-none',
            checknewAddress:'wrong wrong-hide',
		}
	}
	
	handlenotesChange = (event) => {
		this.setState({
			notes: event.target.value,
			notesstatus: '',
		notesclass: 'regular-active',

		checkNotes: 'wrong wrong-hide'
		})
	}
	handlenotesFocus = (event) => {
		this.setState({
			notesstatus: '',

			notesclass: 'regular-default',
			checkNotes: 'wrong wrong-hide'
		})
	}
	handlenotesBlur = (event) => {
		if (!this.state.notes) {
			this.setState({
				notesclass: 'regular-default',
				checkNotes: 'wrong wrong-show'
			})
			return false;
		}
		this.setState({
			notesclass: 'regular-active',
			notesstatus: 'check-success',
			checkNotes: 'wrong wrong-hide'
		})
	}

	handlenewAddressChange = (event) => {
		this.setState({
			newAddress: event.target.value,
			newAddressstatus: '',
			newAddressclass: 'regular-active',
			checknewAddress: 'wrong wrong-hide'
		})
	}
	handlenewAddressFocus = (event) => {
		this.setState({
			newAddressstatus: '',
			newAddressclass: 'regular-default',
			checknewAddress: 'wrong wrong-hide'
		})
	}
	handlenewAddressBlur = (event) => {

		if (!this.state.newAddress) {
			this.setState({
				newAddressclass: 'regular-default',
				checknewAddress: 'wrong wrong-show'
			})
			return false;
		}
		this.setState({
			newAddressclass: 'regular-active',
			newAddressstatus: 'check-success',
			checknewAddress: 'wrong wrong-hide'
		})
	}

	render() {
		return (
			<div className='editorPassword-box'>
            <HanderNav isLeft noBorder  title={'NEW ADDRESS'} ></HanderNav>
			<div className='editorPassword'>
				<ul className="editorPassword-form">
					<li className={this.state.notesstatus}>
						<span className={this.state.notesclass}>Notes</span>
						<div className="editorPassword-input-box">
							<input type="password"
							name="password"
							value={this.state.notes}
							onChange={this.handlenotesChange}
							onFocus={this.handlenotesFocus}
							onBlur={this.handlenotesBlur}
							placeholder="Notes"
							className="editorPassword-input"/>
						</div>
						<span className={this.state.checkNotes}>
							notes wrong notes wrong
						</span>
					</li>
					<li className={this.state.newAddressstatus}>
						<span className={this.state.newAddressclass}>Enter New Address</span>
						<div className="editorPassword-input-box">
							<input type="password"
							name="password"
							value={this.state.newAddress}
							onChange={this.handlenewAddressChange}
							onFocus={this.handlenewAddressFocus}
							onBlur={this.handlenewAddressBlur}
							placeholder="Enter New Address"
							className="editorPassword-input"/>
						</div>
						<span className={this.state.checknewAddress}>
							Enter New Address wrong
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
export default Addaddress