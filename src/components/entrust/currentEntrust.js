import React from 'react'
import HanderNav from '../index/handerNav'
// import Sidebar from './sidebar'
import {Tabs, Badge} from 'antd-mobile';
import './entrusts.less'
import {Drawer} from 'antd-mobile'

const tabs = [
    {title: <Badge>OPEN ORDERS</Badge>},
    {title: <Badge>ORDER HISTORY</Badge>}
]

class currentEntrust extends React.Component {
    state = {
        open: false,
        coin: '',
        chargeCoin: ''
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

    render() {
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
                      onChange={(tab, index) => {
                          console.log('onChange', index, tab);
                      }}
                      onTabClick={(tab, index) => {
                          console.log('onTabClick', index, tab);
                      }}
                >
                </Tabs>
                <ul className='tab_box'>
                    <li className='item_tab'>
                        <span><b>Buy</b>SMT/USDT</span>
                        <span className='time'>28/03/18  18:35:35</span>
                    </li>
                    <li className='tab'>
                        <span>price(SMT)</span>
                        <span>0.073999</span>
                    </li>
                    <li className='tab'>
                        <span>amount(SMT)</span>
                        <span>11.173.999</span>
                    </li>
                    <li className='tab'>
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='cancel'>
                        <span></span>
                        <span>Cancel</span>
                    </li>
                </ul>
                <ul className='tab_box'>
                    <li className='item_tab'>
                        <span><b>Buy</b>SMT/USDT</span>
                        <span className='time'>28/03/18  18:35:35</span>
                    </li>
                    <li className='tab'>
                        <span>price(SMT)</span>
                        <span>0.073999</span>
                    </li>
                    <li className='tab'>
                        <span>amount(SMT)</span>
                        <span>11.173.999</span>
                    </li>
                    <li className='tab'>
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='cancel'>
                        <span></span>
                        <span>Cancel</span>
                    </li>
                </ul>
                <ul className='tab_box'>
                    <li className='item_tab'>
                        <span><b>Buy</b>SMT/USDT</span>
                        <span className='time'>28/03/18  18:35:35</span>
                    </li>
                    <li className='tab'>
                        <span>price(SMT)</span>
                        <span>0.073999</span>
                    </li>
                    <li className='tab'>
                        <span>amount(SMT)</span>
                        <span>11.173.999</span>
                    </li>
                    <li className='tab'>
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='cancel'>
                        <span></span>
                        <span>Cancel</span>
                    </li>
                </ul>
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