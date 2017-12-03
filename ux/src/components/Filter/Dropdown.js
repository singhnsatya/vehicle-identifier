import React from 'react';
import { observer, inject } from 'mobx-react';
import Table from '../React-table';

class Dropdowns extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			table: false
		}
	}
	handleChange(e) {
		console.log(e.target.value)
		this.setState({date: e.target.value})
		this.props.store.getOnDates(e.target.value)
		this.setState({table: true})
	}
  /*get() {
  	this.props.actions.getOnDates("2017-12-02T10:16:59.884Z")	
  }*/
	render() {
		const {downdata} = this.props;
		const tabledata = this.props.store.ontable.toJS();
		var drop = (
		<div>
		<select ref="select" id="dateList" className="my-select" onChange={this.handleChange}>
			  <option value="" selected disabled hidden>Select Date</option>
            {            	
            	downdata.map(user => {
            		let date = new Date(user['_id']).toString();
            		return <option key={user['_id']} value={user['_id']}>{date}</option>
            	})
          }
          </select>
          <Table data={tabledata} table={this.state.table} />
      </div>
		)
		var emptydown = (
			<select ref="select" id="dateList" className="my-select" onChange={this.handleChange}>
			  <option value="" selected disabled hidden>No Records to show</option>
			  </select>
		)
		return (
			<div>
			  { downdata && downdata.length && drop || emptydown}
			</div>
			)
	}
}

const Dropdown = inject('store')(observer(Dropdowns))
export default Dropdown