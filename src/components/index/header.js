import React from 'react'
import logoURL from './../../assets/images/logo.png';
class SantantHeader extends React.Component {
	render() {
		return (
			<div className='santant-header'><img className="logo" src={logoURL } />  </div>
		)
	}
}
export default SantantHeader