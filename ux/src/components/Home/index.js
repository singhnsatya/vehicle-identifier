import React from 'react';
import DateTable from '../React-table';
import ReactFileReader from 'react-file-reader';
import { history } from '../../helpers';
import { observer, inject } from 'mobx-react';
import './home.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Homes extends React.Component {
	constructor() {
		super();
		this.state = {
			date: '',
			fileName: '',
			buffer: '',
			table: false,
			filter: false
		}
		this.uploadFile = this.uploadFile.bind(this);
		this.handleClick = this.handleClick.bind(this)
	}
	uploadFile(files) {
		// history.push('/')
		if(this.props.location.pathname == "/filter") {
			history.push('/')
		}
		$("#filter").hide();
		// $("#summary").remove();
		let fileData = [files['base64'][0].split(',')]
		var bufferData = fileData[0][1];
		if(files.fileList[0].size > 0) {
			this.setState({buffer: bufferData, fileName: files.fileList[0].name, date: new Date()})
			let data = this.state;
			// console.log(data)
			this.props.store.fileUpload(data);
			this.setState({table: true})
		}
	}
	handleClick() {
		// console.log('test')
		this.setState({filter:true})
		history.push('/filter')
	}
	render() {
		var data = this.props.store.tables.toJS();
		console.log(data)
		const style = {
  margin: 12,
};
		return (
			<div id="root-left">
			<p className="xml-title">Upload a xml file</p><br/>
			<div id="div-button">
			<div className="div-button-left">
			<ReactFileReader fileTypes={[".xml"]} base64={true} multipleFiles={true} handleFiles={this.uploadFile.bind(this)}>
			  <MuiThemeProvider>
			<RaisedButton backgroundColor="#283593" className="btn-upload" label="Upload" style={style} labelColor="white" />
			</MuiThemeProvider>{this.state.fileName}
			</ReactFileReader>
			</div>
			<div className="div-button-right">
			<MuiThemeProvider>
			<RaisedButton backgroundColor="#283593" className="btn-upload" label="Filter" style={style} labelColor="white" onClick={this.handleClick}/>
			</MuiThemeProvider>
			</div>
			</div>
			<DateTable data={data} table={this.state.table} />
			</div>
		)
	}
}

const Home = inject('store')(observer(Homes))
export default Home
