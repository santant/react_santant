import React from 'react'
import './address_code.less'

class AddressErificationCode extends React.Component {
    state = {
        password: []
    }

    changeValue(ev) {
        let {password} = [...this.state]
        var arr = []
        for (var i = 0; i < ev.target.value.length; i++) {
            arr.push(ev.target.value.charAt(i))
        }
        this.setState({
            password: arr
        })
        // console.log(arr)
        // console.log(ev.target.value.split(','))
    }

    render() {
        const itme = this.state.password.map((value, index) => {
            return (
                <div key={index} className='password_number'>{value}</div>
            )
        })
        return (
            <div id='AddressErificationCode'>
                <div className="address_title">← GA Verification</div>
                <div className="erification_box">
                    <input onChange={this.changeValue.bind(this)}  className='password_tel' maxLength='6' type="tel"/>
                    <div className='erification2'>
                        {itme}
                    </div>
                    <ul className='erification'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='confirm_btn'>
                    Confirm
                </div>
            </div>
        )
    }
}

export default AddressErificationCode