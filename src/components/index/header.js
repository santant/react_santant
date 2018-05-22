import React from 'react'
import logoURL from './../../assets/images/logo.png';
import  axios from 'axios'
class SantantHeader extends React.Component {
    login_s(){
        axios.post('https://uc-api-sandbox.fcoin.com/users/v1/dev/login', {
            email:'huobili1@163.com',
            password: '1234@Qwer'
        })
            .then(function (response) {
                sessionStorage['token'] = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        // this.props.userState 如果userState=1未登录，=2已登录
        return (
            <div className='santant-header'>
                <img className="logo" src={logoURL}/>
                <span onClick={this.login_s.bind(this)}>登录</span>
                <div className='userState'>
                    <div className='user_title'>
                        {
                            this.props.userState == 1 ? <p><b>sign in</b> <b>/sign up</b></p> : <span>UserName</span>
                        }
                    </div>
                    <img src={require('../loginState/image/item_btn.png')} alt=""/>
                </div>
            </div>
        )
    }
}

export default SantantHeader