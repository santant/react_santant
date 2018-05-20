import React from 'react'

let arrLi = [0, 1, 2, 3, 4, 5]

class ValidateCode extends React.Component {

    state = {
        password: []
    }

    changeValue(ev) {
        let {password} = [...this.state]
        var arr = []
        for (var i = 0; i < ev.target.value.length; i++) {
            arr.push(ev.target.value.charAt(i))
        }
        this.setState({
            password: arr
        })
    }

    render() {
        console.log(this.props)
        const item = this.state.password.map((value, index) => {
            return (
                <div key={index} className='password_number'>{value}</div>
            )
        })
        return (
            <div id='ValidateCode'>
                <div className={
                    this.props.classText ? "erification_box " + this.props.classText : 'erification_box'
                }>
                    <input onChange={this.changeValue.bind(this)} className='password_tel' maxLength='6' type="tel"/>
                    <div className='erification2'>
                        {item}
                    </div>
                    <ul className='erification'>
                        {
                            arrLi.map((val, index) => {
                                if (this.props.borderBottom) {
                                    return <li key={index} style={{borderBottom: `3px solid ${this.props.borderBottom}`}}></li>
                                } else {
                                    return <li key={index}></li>
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ValidateCode
