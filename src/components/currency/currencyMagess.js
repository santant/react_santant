import React from 'react'
import HanderNav from '../index/handerNav'
import './currency.less'

class currencyMagess extends React.Component {
    constructor(props){
        super(props)
        this.state={
            detailData:props.history.location.state.parma?this.props.history.location.state.parma:{currency:'',available:'',frozen:''}

        }
    }

    handleCurrencyRecharge=()=>{
        this.props.history.push('/CurrencyRecharge')
    }

    render() {
        return (
            <div id='currencyMagess'>
                <HanderNav isLeft titleName={this.state.detailData.currency} address></HanderNav>
                <div className="price">
                    <span className="Value">Estimated Value</span>
                    <span className="btc">15.10768112 BTC</span>
                    <span className="usd">$170982.87 USD</span>
                </div>
                <div className='price_msg'>
                    <ul>
                        <li>
                            <span>可用</span>
                            <p>{this.state.detailData.available}</p>
                        </li>
                        <li>
                            <span>冻结</span>
                            <p>{this.state.detailData.frozen}</p>
                        </li>
                    </ul>
                    <div className='btn_box'>
                        <div onClick={this.handleCurrencyRecharge}>Deposit</div>
                        <div>Withdraw</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default currencyMagess