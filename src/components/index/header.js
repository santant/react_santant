import React from 'react'
import logoURL from './../../assets/images/logo.png';

class SantantHeader extends React.Component {
    render() {
        // this.props.userState 如果userState=1未登录，=2已登录
        return (
            <div className='santant-header'>
                <img className="logo" src={logoURL}/>
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