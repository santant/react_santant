import React from 'react'
import {Tabs, Badge} from 'antd-mobile';
import ServerApi from "./../api";
import './finance.less'

const tabs = [
    {title: <Badge>DEPOSIT</Badge>},
    {title: <Badge>WITHDRAWAL</Badge>}
    // {title: <Badge>DETALLS</Badge>},
]

class financeHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: null,
            depositList: [],
            withdrawsList: [],
            currentTab: 0
        }
    }

    componentDidMount() {
        //充值记录
        ServerApi.getfinanceHistory(null).then(res => {
            let result = res.data.data;
            if (result && result.length > 0) {
                let resultData = [];
                for (let i = 0, len = result.length; i < len; i++) {
                    resultData.push({
                        "id": result[i].id,
                        "to_address": result[i].to_address,
                        "currency": result[i].currency,
                        "tx_hash": result[i].tx_hash,
                        "amount": Number(result[i].amount).toFixed(6),
                        "state": result[i].state,
                        "updated_at": this.timestampToTime(result[i].updated_at)
                    });
                }
                this.setState({
                    depositList: resultData
                })
            }
        })

        //提币记录
        ServerApi.latest_withdraws(null).then(res => {
            let result = res.data.data;
            if (result && result.length > 0) {
                let resultData = [];
                for (let i = 0, len = result.length; i < len; i++) {
                    resultData.push({
                        "id": result[i].id,
                        "to_address": result[i].to_address,
                        "currency": result[i].currency,
                        "tx_hash": result[i].tx_hash,
                        "amount": Number(result[i].amount).toFixed(6),
                        "state": result[i].state,
                        "updated_at": this.timestampToTime(result[i].updated_at)
                    });
                }
                this.setState({
                    withdrawsList: resultData
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

    handelChange = (tab, index) => {
        this.setState({
            currentTab: index
        })
    }

    render() {
        let {depositList, withdrawsList} = this.state;
        return (
            <div id='financeHistory'>
                <div className="history_title">
                    HISTORY
                </div>
                <Tabs tabs={tabs}
                      initialPage={0}
                      tabBarBackgroundColor='#2e3d45'
                      tabBarActiveTextColor='#fff'
                      tabBarInactiveTextColor='#7391a1'
                      onChange={(tab, index) => this.handelChange(tab, index)}
                      onTabClick={(tab, index) => this.handelChange(tab, index)}
                >
                </Tabs>

                <div className='tabs_content' style={{display: this.state.currentTab === 0 ? 'block' : 'none'}}>
                    {depositList && depositList.length > 0 ? depositList.map((item, index) =>
                        <div className='content_padding' key={index}>
                            <div className='time_status'>
                                <span>{item.updated_at}</span>
                                <span>{item.state}</span>
                            </div>
                            <p className='price'>{item.currency} {item.amount}</p>
                            <p className='key'>Address:{item.to_address}</p>
                            <p className='key_msg'>{item.currency}</p>
                        </div>
                    ) : ''}
                </div>
                <div className='tabs_content' style={{display: this.state.currentTab === 1 ? 'block' : 'none'}}>
                    {withdrawsList && withdrawsList.length > 0 ? withdrawsList.map((item, index) =>
                        <div className='content_padding' key={index}>
                            <div className='time_status'>
                                <span>{item.updated_at}</span>
                                <span>{item.state}</span>
                            </div>
                            <p className='price'>{item.currency} {item.amount}</p>
                            <p className='key'>Address:{item.to_address}</p>
                            <p className='key_msg'>{item.currency}</p>
                        </div>
                    ) : ''}
                </div>
            </div>
        )
    }
}

export default financeHistory