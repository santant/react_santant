import React from 'react'
import HanderNav from '../index/handerNav'
import './currency.less'

class CurrencyRecharge extends React.Component {

    render() {
        return (
            <div id='CurrencyRecharge'>
                <HanderNav noBorder  titleName='BCH Deposit'>
                    <i style={{fontSize:'20px',top:'0px'}} className='iconfont iconright'>&#xe652;</i>
                </HanderNav>
                <img className='weixin' src={require('../../assets/images/weixinImg.jpg')} alt=""/>
                <p className='text_code key'>save QR Code</p>
                <p className='code_key '>1NKwUjGw1rqacC8yci1tdfJfGC4mk61pqz</p>
                <p className='copy_key key'>copy address</p>
                <p className='text_msg'>Please don't deposit any other digital assets except ft to the above address.</p>
                <p className='text_msg'>Depositing to the above address requires confirmations of the entire network. It will arrive after 15 confirmations,it will be available to withdraw after 30 confirmations.Minimum deposit amount: 0.5 ft. It won't be credited less than 0.5 ft.</p>
            </div>
        )
    }
}

export default CurrencyRecharge