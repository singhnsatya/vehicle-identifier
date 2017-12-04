import React from 'react';
import { observer, inject } from 'mobx-react';
import Table from '../React-table';
// import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class Dropdowns extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			table: false,
			value: -1,
			date: null
		}
	}
	handleChange(e, k, v) {
		const {downdata} = this.props;
		if(v != -1) {
			this.setState({value: v, date: downdata[v]['_id']})
			this.props.store.getOnDates(downdata[v]['_id'])
			this.setState({table: true})
		}
	}
	render() {
	const styles = {
	  customWidth: {
	    width: 400,
	  },
	};

		const {downdata} = this.props;
		var items = downdata.map((user, index) => {
  		let date = new Date(user['_id']).toString();
  		return <MenuItem value={index} key={user['_id']} primaryText={date} />
  	})

  	items.unshift(<MenuItem value={-1} key={-1} primaryText={"Select Date"} />)

		const tabledata = this.props.store.ontable.toJS();
		var drop = (
		<div>
          <MuiThemeProvider>
          <DropDownMenu
          className="material-select"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
        {items}
        </DropDownMenu>
	      </MuiThemeProvider>
          <Table data={tabledata} table={this.state.table} />
      </div>
		)
		var emptydown = (
			<div>
          <MuiThemeProvider>
          <DropDownMenu
          className="material-select"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
        <MenuItem value={-1} key={-1} primaryText={"Select Date"} />
        </DropDownMenu>
	      </MuiThemeProvider>
	      </div>
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