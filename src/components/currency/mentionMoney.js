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
			address:'',
			addressstatus:'',
			addressclass: 'regular-none',
            checkAddress:'wrong wrong-hide',
            amount:'',
            amountstatus:'',
            amountclass: 'regular-none',
            checkAmount:'wrong wrong-hide',
            addressChange:false,
		}
	}
	
	handleaddressChange = (event) => {
		this.setState({
			address: event.target.value,
			addresssstatus: '',
		addresssclass: 'regular-active',

		checkAddress: 'wrong wrong-hide'
		})
	}
	handleaddressFocus = (event) => {
		this.setState({
			addressstatus: '',
			addressChange:true,
			addressclass: 'regular-default',
			checkAddress: 'wrong wrong-hide'
		})
	}
	handleaddressBlur = (event) => {
		if (!this.state.address) {
			this.setState({
				addressclass: 'regular-default',
				checkAddress: 'wrong wrong-show'
			})
			return false;
		}
		this.setState({
			addressclass: 'regular-active',
			addressstatus: 'check-success',
			checkAddress: 'wrong wrong-hide'
		})
	}

	handleamountChange = (event) => {
		this.setState({
			amount: event.target.value,
			amountstatus: '',
			amountclass: 'regular-active',
			checkAmount: 'wrong wrong-hide'
		})
	}
	handleamountFocus = (event) => {
		this.setState({
			amountstatus: '',
			amountclass: 'regular-default',
			checkAmount: 'wrong wrong-hide'
		})
	}
	handleamountBlur = (event) => {

		if (!this.state.amount) {
			this.setState({
				amountclass: 'regular-default',
				checkAmount: 'wrong wrong-show'
			})
			return false;
		}
		this.setState({
			amountclass: 'regular-active',
			amountstatus: 'check-success',
			checkAmount: 'wrong wrong-hide'
		})
	}
	
	cheakaddress=(data)=>{
		this.setState({
			address:data,
			addressChange:false,
			checkAddress: 'wrong wrong-hide',
			addressstatus: 'check-success',
			addressclass: 'regular-active',
			
		})
	}
	
	//搜索事件
	handleSearch=()=>{
		alert('搜索事件')
	}
	
	render() {
		var addressList = () => {
          var res = [];
          for(var i = 1; i < 7; i++) {
          	if(i===1){
          		 res.push(<li onClick={this.cheakaddress.bind(this,i)} key={i} className="active"><p>1NKwUjGw1rqacC8yci1tdfJfGC4mk61pqz</p><span>liuzhenhai address</span></li>)
          	}else{
           		res.push(<li onClick={this.cheakaddress.bind(this,i)} key={i}><p>1NKwUjGw1rqacC8yci1tdfJfGC4mk61pqz</p><span>liuzhenhai address</span></li>)
          	}

          }
          return res
        }
		return (
			<div id="mentionMoney">
            <HanderNav noBorder  title={'BCH Withdraw'} msg={this.handleSearch.bind(this)}
>
            	<i style={{fontSize:'20px',top:'0px'}} className='iconfont iconright'>&#xe652;</i>
            </HanderNav>
			<div className='editorPassword'>
				<div className="mentionMoney-title">
					<div className="mentionMoney-title-cont">
						<label>Available：</label>0.00004200  BCH
					</div>
					<span className="mentionMoney-title-dec">
					 	<i className='iconfont iconright'>&#xe60f;</i>
					 	Minmum withdrawal:187 BCH
					</span>
				</div>
			  
				<ul className="editorPassword-form">
					<li className={this.state.addressstatus}>
						<span className={this.state.addressclass}>BCH Address</span>
						<div className="editorPassword-input-box">
							<input type="text"
							name="address"
							value={this.state.address}
							onChange={this.handleaddressChange}
							onFocus={this.handleaddressFocus}
							onBlur={this.handleaddressBlur}
							placeholder="BCH Address"
							className="editorPassword-input"/>
							<span className="forgot">
								<img  className="arrow-no-rotate" src={require('./../../assets/images/top.png')} alt=""/>
							</span>
						</div>
						<div className="address-list" style={{'display':this.state.addressChange?'block':'none'}}>
							<a className="address-title">＋New' Address</a>
							<ul className="address-box">{addressList()}</ul>
						</div>
						<span className={this.state.checkAddress}>
							BCH Address wrong BCH Address wrong
						</span>
					</li>
					<li className={this.state.amountstatus}>
						<span className={this.state.amountclass}>BCH Amount</span>
						<div className="editorPassword-input-box">
							<input type="password"
							name="password"
							value={this.state.amount}
							onChange={this.handleamountChange}
							onFocus={this.handleamountFocus}
							onBlur={this.handleamountBlur}
							placeholder="BCH Amount"
							className="editorPassword-input"/>
							<span className="forgot">
								All Amount
							</span>
						</div>
						<span className={this.state.checkAmount}>
							BCH Amount wrong
						</span>
					</li>
					
				</ul>

			</div>
			<div className="btn-box">
				<button
				className={this.state.address&&this.state.amount?'btn-cont btn-success':'btn-cont'}
				>
					Submit
				</button>
			</div>
			<div className="mentionMoney-footer">
				<div className="mentionMoney-footer-cont">
					<span>Fee</span>
					<h5>0.0000  BCH</h5>
				</div>
				<div className="mentionMoney-footer-cont">
					<span>Receive Amount </span>
					<h5>0.0000  BCH</h5>
				</div>
			</div>
            </div>
			)
	}
}
export default Addaddress