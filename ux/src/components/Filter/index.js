import React from 'react';
import { history } from '../../helpers';
import Dropdown from './Dropdown';
import { observer, inject } from 'mobx-react';

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
			<div>
			<p className="filter-title">Filter According to dates</p>
			<button onClick = { this.goBack.bind(this) }> Cancle < /button>
			<Dropdown downdata={data} />
			</div>
			)
	}
}

const Filter = inject('store')(observer(Filters))
export default Filter
