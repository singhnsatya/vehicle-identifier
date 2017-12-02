import { observable, action, computed, useStrict } from 'mobx';
import { fileApi } from '../../api';

class FileStore {
	@observable todos = ['buy milk', 'buy eggs']
	@observable filter = ''
	@observable allDates = []
	@observable tables = []
	@observable ontable = []
	@computed get filteredTodos() {
		var matchesFilter = new RegExp(this.filter, "i")
		return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
	}

	@action getAllDates() {
		fileApi.dates()
		.then(result => {
			this.allDates = result
		})
	}

	@action getOnDates(date) {
		fileApi.onDates(date)
		.then(result => {
			this.ontable = result.data[0].data
		})
	}
	@action fileUpload(file) {
		fileApi.send(file)
		.then(result => {
			this.tables = result.data;
		})
	}
	
	createTodo(value) {
		this.todos.push(value)
	}
}

var store = window.store = new FileStore

export default store
