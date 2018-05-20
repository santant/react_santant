import React from 'react'
import './address_code.less'
import ValidateCode from '../../index/validateCode'
import {Toast} from 'antd-mobile';

class AddressErificationCode extends React.Component {
    state = {
        code: []
    }

    getCode() { // 拿到密码
        if (this.refs.pasCode.state.password.length === 0) {
            Toast.info('请正确输入密码')
            return false
        }
        let password = this.refs.pasCode.state.password.join(',')
        let newPaw = password.replace(/,/g, '')
        let reg = /^\d{6}$/
        if (!reg.test(newPaw)) {
            Toast.info('请正确输入6位密码')
        } else {
            Toast.info('ok')
        }
    }

    render() {
        return (
            <div id='AddressErificationCode'>
                <div className="address_title"><i className='iconfont'>&#xe625;</i> GA Verification</div>
                <ValidateCode classText='validate_box'  ref='pasCode'></ValidateCode>
                <div onClick={this.getCode.bind(this)} className='confirm_btn'>
                    Confirm
                </div>
            </div>
        )
    }
}

export default AddressErificationCode