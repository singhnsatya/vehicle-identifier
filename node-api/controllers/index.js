var Vehicle = require('../models');
var engine = require('../engine');

var home = exports.home = (req, res) => {
	res.send('Welcome')
}

var insertVehicle = exports.insertVehicle = (req, res) => {

	engine.decode(req.body.buffer)
		.then(result => {
			var newVehicle = new Vehicle({
				date: Date.now(),
				data: result
			})
			newVehicle.save()
				.then(result => {
					return res.status(200).json({
						success: true,
						data: result
					})
				})
		}).catch(error => {
				return res.status(400).json({
					success: true,
					error: error
				})
		})
}

var getDates = exports.getDates = (req, res) => {
	Vehicle.aggregate([{$group:{"_id": "$date"}}, {$sort:{_id: -1}}])
	.then(result => {
		return res.status(200).json({
			success: true,
			data: result
		})
	}).catch(error => {
		return res.status(400).json({
			success: true,
			error: error
		})
	})
}

var getOnDates = exports.getOnDates = (req, res) => {
	Vehicle.find({"date":{"$eq": new Date(req.query.search)}})
	.then(result => {
		return res.status(200).json({
			success: true,
			data: result
		})
	}).catch(error => {
		return res.status(400).json({
			success: true,
			error: error
		})
	})
}