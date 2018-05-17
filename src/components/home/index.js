import React from 'react'
import {
    Toast,
    Button
} from 'antd-mobile'

class Login extends React.Component {
    btn() {
        Toast.info('这是home')
    }

    render() {
        return (
            <div className='user'>
                <Button onClick={this.btn.bind(this)} type="warning">warning</Button>
                这是home
            </div>
        )
    }
}

export default Login