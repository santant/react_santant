import React from 'react'
import ServerApi from './../api'
import {Icon, Checkbox} from 'antd-mobile';
import './assetslist.less'

class Assets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: null
        }
    }
    componentDidMount() {
        ServerApi.assets.get_assets(null).then(res => {
            let result = res.data.data;
            if (result && result.length > 0) {
                let resultData = [];
                for (let i = 0, len = result.length; i < len; i++) {
                    resultData.push({
                        'currency': result[i].currency,
                        'available': Number(result[i].available).toFixed(6),
                        'frozen': Number(result[i].frozen).toFixed(6)
                    });
                }
                this.setState({
                    listData: resultData
                })
            }
        })
    }

    handlecurrencyDetail=(data)=>{
        this.props.history.push('/CurrencyMagess',{parma:data})
    }

    //跳转地址列表
    handleAddressList=()=>{
        this.props.history.push('/addressList')
    }

    render() {
        let {listData} = this.state;
        return (
            <div id='assets'>
                <div className='titleName'>
                    <span>ASSETS</span>
                    <img src={require('./image/pieChart.png')} alt=""/>
                    <img onClick={this.handleAddressList}  className='img_address' src={require('./image/addressList.png')} alt=""/>
                </div>
                <div className='price'>
                    <span className='Value'>Estimated Value</span>
                    <span className='btc'>15.10768112 BTC</span>
                    <span className='usd'>$170982.87 USD</span>
                </div>
                <div className='assets-list'>
                    <dl>
                        <dd className='title-search'>
                            <Checkbox></Checkbox>
                            <span>Hide 0 Balances</span>
                            <Icon className='search' type="search"/>
                        </dd>
                        <dt className='price-title'>
                            <span className="title">Coin</span>
                            <span className="title">可用</span>
                            <span className="title">冻结</span>
                        </dt>
                        {listData && listData.length > 0 ? listData.map((item, index) =>
                            <dt className='price-number' key={index}>
                                <span onClick={this.handlecurrencyDetail.bind(this,item)} className="number number_name">{item.currency}</span>
                                <span className="number">{item.available}</span>
                                <span className="number">{item.frozen}</span>
                            </dt>
                        ) : ''}
                    </dl>
                </div>
            </div>
        )
    }
}

export default Assets