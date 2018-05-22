import React from 'react'
import HanderNav from '../index/handerNav'
// import Sidebar from './sidebar'
import {Tabs, Badge} from 'antd-mobile';
import './entrusts.less'
import {Drawer} from 'antd-mobile'
import ServerApi from "../api";

const tabs = [
    {title: <Badge>OPEN ORDERS</Badge>},
    {title: <Badge>ORDER HISTORY</Badge>}
]

class currentEntrust extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentEntrust: [],
            historyEntrust: [],
            open: false,
            coin: '',
            chargeCoin: '',
            currentTab: 0
        }
    }

    componentDidMount() {
        //当前委托
        ServerApi.entrust.get_currentEntrust(null).then(res => {
            let result = res.data.data;
            if (result && result.length > 0) {
                let resultData = [];
                for (let i = 0, len = result.length; i < len; i++) {
                    resultData.push({
                        "id": result[i].id,
                        "symbol": result[i].symbol,
                        "amount": Number(result[i].amount).toFixed(6),
                        "price": Number(result[i].price).toFixed(6),
                        "created_at": this.timestampToTime(result[i].canceled_at),
                        "type": result[i].type,
                        "filled_amount": result[i].filled_amount,
                        "executed_value": Number(result[i].executed_value).toFixed(6),
                        "fill_fees": result[i].fill_fees,
                        "finished_at": result[i].finished_at,
                        "source": result[i].source,
                        "state": result[i].state,
                        "canceled_at": result[i].canceled_at
                    });
                }
                this.setState({
                    currentEntrust: [...resultData]
                })
            }
        })

        //历史委托
        ServerApi.entrust.history_entrust(null).then(res => {
            let result = res.data.data;
            if (result && result.length > 0) {
                let resultData = [];
                for (let i = 0, len = result.length; i < len; i++) {
                    resultData.push({
                        "id": result[i].id,
                        "symbol": result[i].symbol,
                        "amount": Number(result[i].amount).toFixed(6),
                        "price": Number(result[i].price).toFixed(6),
                        "created_at": this.timestampToTime(result[i].canceled_at),
                        "type": result[i].type,
                        "filled_amount": result[i].filled_amount,
                        "executed_value": Number(result[i].executed_value).toFixed(6),
                        "fill_fees": result[i].fill_fees,
                        "finished_at": result[i].finished_at,
                        "source": result[i].source,
                        "state": result[i].state,
                        "canceled_at": result[i].canceled_at
                    });
                }
                this.setState({
                    historyEntrust: [...resultData]
                })
            }
        })

    }

    timestampToTime = (timestamp) => {
        let date = new Date(timestamp);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return Y + '/' + M + '/' + D + '   ' + h + m + s;
    }

    changeInput1(ev) {
        ev.nativeEvent.stopImmediatePropagation()
        this.setState({
            coin: ev.target.value
        })
    }

    changeInput2(ev) {
        ev.nativeEvent.stopImmediatePropagation()
        this.setState({
            chargeCoin: ev.target.value
        })
    }

    onOpenChange() {
        this.setState({open: !this.state.open})
    }

    handelChange = (tab, index) => {
        this.setState({
            currentTab: index
        })
    }

    render() {
        let {currentEntrust, historyEntrust} = this.state;
        const sidebar = (
            <div id='sidebar'>
                <div className='orderState'>
                    Order State
                </div>
                <ul className='btn_box_curess'>
                    <li className='active_li'>Buy</li>
                    <li>Sell</li>
                    <li>Sell</li>
                </ul>
                <dl className='search_input'>
                    <dd className='title_search'>
                        pairs
                    </dd>
                    <dt>
                        <div className={
                            this.state.coin ? 'input_line input_group' : 'input_group'
                        }>
                            <i>
                                {
                                    this.state.coin ? 'coin' : ''
                                }
                            </i>
                            <input placeholder='Coin' onChange={this.changeInput1.bind(this)} value={this.state.coin}
                                   type="text"/>
                        </div>
                        <div className={
                            this.state.chargeCoin ? 'input_line input_group' : 'input_group'
                        }>
                            <i>{
                                this.state.chargeCoin ? 'Charge coin' : ''
                            }</i>
                            <input placeholder='Charge coin' onChange={this.changeInput2.bind(this)}
                                   value={this.state.chargeCoin} type="text"/>
                        </div>
                    </dt>
                </dl>
                <div className='btn_group'>
                    <div>Reset</div>
                    <div>Confirm</div>
                </div>
            </div>
        )
        return (
            <div id='currentEntrust'>
                <HanderNav msg={this.onOpenChange.bind(this)} noBorder titleName='ORDER'>
                    <i style={{fontSize: '20px', top: '0px'}}
                       className='iconfont iconright'>&#xe60c; Filter</i>
                </HanderNav>
                <Tabs tabs={tabs}
                      initialPage={0}
                      tabBarBackgroundColor='#2e3d45'
                      tabBarActiveTextColor='#fff'
                      tabBarInactiveTextColor='#7391a1'
                      onChange={(tab, index) => this.handelChange(tab, index)}
                      onTabClick={(tab, index) => this.handelChange(tab, index)}
                >
                </Tabs>
                {currentEntrust && currentEntrust.length > 0 ? currentEntrust.map((item, index) =>
                    <ul className='tab_box' key={index}
                        style={{display: this.state.currentTab === 0 ? 'block' : 'none'}}>
                        <li className='item_tab'>
                            <span><b>{item.type}</b>{item.price}</span>
                            <span className='time'>{item.created_at}</span>
                        </li>
                        <li className='tab'>
                            <span>price(SMT)</span>
                            <span>{item.price}</span>
                        </li>
                        <li className='tab'>
                            <span>amount(SMT)</span>
                            <span>{item.amount}</span>
                        </li>
                        <li className='tab'>
                            <span>executed(SMT)</span>
                            <span>{item.executed_value}</span>
                        </li>
                        <li className='cancel'>
                            <span></span>
                            <span>Cancel</span>
                        </li>
                    </ul>
                ) : ''}

                {
                    historyEntrust && historyEntrust.length > 0 ? historyEntrust.map((item, index) =>
                        <ul className='tab_box' key={index}
                            style={{display: this.state.currentTab === 1 ? 'block' : 'none'}}>
                            <li className='item_tab'>
                                <span><b>{item.type}</b>{item.price}</span>
                                <span className='time'>{item.created_at}</span>
                            </li>
                            <li className='tab'>
                                <span>price(SMT)</span>
                                <span>{item.price}</span>
                            </li>
                            <li className='tab'>
                                <span>amount(SMT)</span>
                                <span>{item.amount}</span>
                            </li>
                            <li className='tab'>
                                <span>executed(SMT)</span>
                                <span>{item.executed_value}</span>
                            </li>
                            <li className='cancel'>
                                <span></span>
                                <span>Cancel</span>
                            </li>
                        </ul>
                    ) : ''
                }


                {/*<ul className='tab_box'>*/}
                {/*<li className='item_tab'>*/}
                {/*<span><b>Buy</b>SMT/USDT</span>*/}
                {/*<span className='time'>28/03/18  18:35:35</span>*/}
                {/*</li>*/}
                {/*<li className='tab'>*/}
                {/*<span>price(SMT)</span>*/}
                {/*<span>0.073999</span>*/}
                {/*</li>*/}
                {/*<li className='tab'>*/}
                {/*<span>amount(SMT)</span>*/}
                {/*<span>11.173.999</span>*/}
                {/*</li>*/}
                {/*<li className='tab'>*/}
                {/*<span>executed(SMT)</span>*/}
                {/*<span>1273.999</span>*/}
                {/*</li>*/}
                {/*<li className='cancel'>*/}
                {/*<span></span>*/}
                {/*<span>Cancel</span>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*<ul className='tab_box'>*/}
                {/*<li className='item_tab'>*/}
                {/*<span><b>Buy</b>SMT/USDT</span>*/}
                {/*<span className='time'>28/03/18  18:35:35</span>*/}
                {/*</li>*/}
                {/*<li className='tab'>*/}
                {/*<span>price(SMT)</span>*/}
                {/*<span>0.073999</span>*/}
                {/*</li>*/}
                {/*<li className='tab'>*/}
                {/*<span>amount(SMT)</span>*/}
                {/*<span>11.173.999</span>*/}
                {/*</li>*/}
                {/*<li className='tab'>*/}
                {/*<span>executed(SMT)</span>*/}
                {/*<span>1273.999</span>*/}
                {/*</li>*/}
                {/*<li className='cancel'>*/}
                {/*<span></span>*/}
                {/*<span>Cancel</span>*/}
                {/*</li>*/}
                {/*</ul>*/}
                <Drawer
                    className={
                        this.state.open ? 'my-drawer dis' : 'my-drawer'
                    }
                    style={{minHeight: document.documentElement.clientHeight}}
                    enableDragHandle
                    position='right'
                    sidebar={sidebar}
                    contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange.bind(this)}
                >
                    <i></i>
                </Drawer>


            </div>
        )
    }
}

export default currentEntrust