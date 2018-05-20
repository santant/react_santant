import React from 'react'

class handerNav extends React.Component {

    bindClick(){
        if(this.props.msg){
            this.props.msg()
        }
    }
    render() {
        console.log(this.props)
        return (
            <div id='handerNav'>
                <div className='back_currency'>
                    <span className={
                        this.props.noBorder ? '' : 'borderBottom'
                    }>
                        {
                            this.props.isLeft ? <i className='iconfont'>&#xe625;</i> : ''
                        }
                        {this.props.titleName}
                        {
                            this.props.address ?
                                <img className='address_url' src={require('../../assets/images/addressList.png')}
                                     alt=""/> : ''
                        }
                        <div onClick={this.bindClick.bind(this)} className='right'>
                            {this.props.children}
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default handerNav

// 调用demo
// <HanderNav isLeft   titleName='HBC'>
//     <i className='iconfont iconright'>&#xe600;</i>
// </HanderNav>