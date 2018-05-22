import React from 'react'

class handerNav extends React.Component {
	constructor(props) {
		super(props);
	}

    bindClick(){
        if(this.props.msg){
            this.props.msg()
        }
    }
    render() {
        return (
            <div id='handerNav'>
                <div className='back_currency'>
                    <span className={
                        this.props.noBorder ? '' : 'borderBottom'
                    }>
                        {
                            this.props.isLeft ? <i className='iconfont'>&#xe625;</i> : ''
                        }
                        {titleName}
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
        let titleName=this.props.title?this.props.title:'';
    }
}

export default handerNav

// 调用demo
// <HanderNav isLeft   titleName='HBC'>
//     <i className='iconfont iconright'>&#xe600;</i>
// </HanderNav>