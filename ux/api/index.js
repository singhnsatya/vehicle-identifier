import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000";

export const fileApi = {
	send: (file) => {
		let endpoint = '/upload';
		return axios.post(endpoint, {
				data: file.data,
				buffer: file.buffer,
				fileName: file.fileName
		}).then(res => {
			return res && res.data && res.data.data;
		})
	},
	dates: () => {
		let endpoint = '/alldates';
		return axios.get(endpoint)
		.then(res => {
			return res && res.data && res.data.data;
		})
	},
	onDates: (date) => {
		let endpoint = '/date';
		return axios.get(endpoint, {
			params: {
				search: date
			}
		}).then(res => {
			return res.data
		})
	}
}