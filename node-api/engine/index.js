var base64 = require('js-base64').Base64;
var parser = require('xml2json');
var identifyVehicle = require('./identifyVehicle')

function decode(base) {
	return new Promise((resolve, reject) => {		
		resolve(Base64.decode(base));
	}).then(res => {
		var json = parser.toJson(res)
		return json;
	}).then(result => {
		return identifyVehicle.getVehicle(result);
	}).catch(error => {
		return error
	})
}

module.exports = {
	decode: decode
}