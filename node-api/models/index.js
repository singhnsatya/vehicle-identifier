var mongoose = require('mongoose');
var analyze = require('../engine/identifyVehicle')

var vehicleSchema = new mongoose.Schema({
	date: { type: Date, default: Date.now	},
	data: [{
		id: String,
		frame: String,
		powertrain: String,
		wheels: {
				metal: Number,
				plastic: Number,
				positions: []
		},
		vehicle_name: String
	}]
});

module.exports = mongoose.model('Vehicle', vehicleSchema);