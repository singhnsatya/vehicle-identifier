import React from 'react';
import Table from '../React-table';
import ReactFileReader from 'react-file-reader';
import { history } from '../../helpers';
import { observer, inject } from 'mobx-react';

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
		$("#filter").hide();
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
		console.log(this.props.store)
		var data = this.props.store.tables.toJS();
		console.log(data)
		return (
			<div>
			<p className="title">Upload a xml file</p><br/>
			<ReactFileReader fileTypes={[".xml"]} base64={true} multipleFiles={true} handleFiles={this.uploadFile.bind(this)}>
			  <button className='btn'>Upload</button>
			</ReactFileReader>
			<button onClick={this.handleClick}>Filter</button>
			<p>{this.state.fileName}</p>
			<Table data={data} table={this.state.table} />
			</div>
		)
	}
}

const Home = inject('store')(observer(Homes))
export default Home
