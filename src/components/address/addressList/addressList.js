import React from 'react'
import './addressList.less'
import ServerApi from "../../api";

class AddressList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: null
        }
    }

    componentDidMount() {
        ServerApi.addresses.get_addresses(null).then(res => {
            let result = res.data.data;
            console.log('====',res)
            // if (result && result.length > 0) {
            //     let resultData = [];
            //     for (let i = 0, len = result.length; i < len; i++) {
            //         resultData.push({
            //             'currency': result[i].currency,
            //             'available': Number(result[i].available).toFixed(6),
            //             'frozen': Number(result[i].frozen).toFixed(6)
            //         });
            //     }
            //     this.setState({
            //         listData: resultData
            //     })
            // }
        })
    }
    openChange=()=>{
        // alert('1')
    }
    render() {
        return (
            <div id='addressList'>
                <div className='address_title'>
                    Address Management
                </div>
                <dl className='address_box'>
                    <dd className='address_item'><span>USDT</span> <span className='next-list'>1
                        <img  onClick={this.openChange.bind(this)} src={require('./image/top.png')} alt=""/>
                    </span></dd>
                    <dt className='address_msg'>
                        <div className='key_msg_box'>
                            <span className='address_key'>1NKwUjGw1rqacC8yc1NKwUjGw1rqacC8yci1tdfJfGC4mk61pqzi1tdfJfGC4mk61pqz</span>
                            <div className='key_msg'>
                                <span className='key_text'>
                                    小金的神操作无敌风火轮钱包地址
                                </span>
                                <img className='copy' src={require('./image/copy.png')} alt=""/>
                                <img className='delete' src={require('./image/delete.png')} alt=""/>
                            </div>
                        </div>
                        <div className='address_add'>
                            + USDT address
                        </div>
                    </dt>
                </dl>
                <dl className='address_box'>
                    <dd className='address_item'><span>USDT</span> <span className='next-list'>2
                        <img src={require('./image/top.png')} alt=""/>
                    </span></dd>
                    <dt className='address_msg'>
                        <div className='key_msg_box'>
                            <span className='address_key'>1NKwUjGw1rqacC8yc1NKwUjGw1rqacC8yci1tdfJfGC4mk61pqzi1tdfJfGC4mk61pqz</span>
                            <div className='key_msg'>
                                <span className='key_text'>
                                    小金的神操作无敌风火轮钱包地址
                                </span>
                                <img className='copy' src={require('./image/copy.png')} alt=""/>
                                <img className='delete' src={require('./image/delete.png')} alt=""/>
                            </div>
                        </div>
                        <div className='address_add'>
                            + USDT address
                        </div>
                    </dt>
                </dl>
            </div>
        )
    }
}

export default AddressList