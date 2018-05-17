import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import uuid from 'uuid'
import Login from './components/user/login/login.js'
import {Toast, Button} from 'antd-mobile';

class App extends Component {
    state = {
        value: '',
        data: [ // status =1未完成 =2完成
            {
                id: uuid(),
                text: '语文',
                status: 1
            },
            {
                id: uuid(),
                text: '数学',
                status: 1
            },
            {
                id: uuid(),
                text: '外语',
                status: 1
            }
        ]
    }
    btn(){
        Toast.info('ok!')
    }
    render() {
        return (
            <div>
                <Button onClick={this.btn.bind(this)} type="warning">warning</Button>
                <Login></Login>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))