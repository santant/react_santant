import React, {Component} from 'react'
import {Toast, Button} from 'antd-mobile'

class Login extends Component {
    btn() {
        Toast.info('这是首页')
    }

    render() {
        return (
            <div className='user'>
                <Button onClick={this.btn.bind(this)} type="warning">warning</Button>
                这是首页
            </div>
        )
    }
}

export default Login
