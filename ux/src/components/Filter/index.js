import React from 'react';
import { history } from '../../helpers';
import Dropdown from './Dropdown';
import { observer, inject } from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './dropdown.css';

class Filters extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			drop: true
		}
	}
	goBack() {
		history.push('/')
	}
	componentWillMount() {
		this.props.store.getAllDates()		
	}
	render() {
		const data = this.props.store.allDates.toJS();
		return ( 
			<div id="root-right">
			<p className="filter-title">Filter According to dates</p>
			<div>
			</div>
			<button className="btn-cancel" onClick = { this.goBack.bind(this) }> Cancel < /button>
			<Dropdown downdata={data} />
			</div>
			)
	}
}

const Filter = inject('store')(observer(Filters))
export default Filter
