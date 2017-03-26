module.exports = function(app){
	var Parking = app.models.parking
	var parkingController = {
		index: function(req, res){
			Parking.find({}).exec().then(function(parkings){
				res.json(parkings)
			}, function(erro){
				res.status(422).json(erro)

			})
		},

		show: function(req, res){
			Parking.findById(req.params.id).exec().then(function(parking){
				res.json(parking)
			}, function(erro){
				res.status(422).json(erro)

			})
		},
		
		find_by: function(req, res){
			//let params = req.params.param
			Parking.find({user: req.params.value}).exec().then(function(parking){
				res.json(parking)
			}, function(erro){
				res.status(422).json(erro)

			})
		},

		create: function(req, res){
			console.log(req.body)
			Parking.create(req.body).then(function(parkings){
				res.json(parkings)
			}, function(erro){
				res.status(422).json(erro)

			})
		},

		update: function(req, res){
			console.log(req.body)
		
			Parking.findByIdAndUpdate(req.params.id, req.body).exec().then(function(parking){
				res.json(parkings)
			}, function(erro){
				res.status(422).json(erro)

			})
		},

		delete: function(req, res){
			Parking.findOneAndRemove({'_id' : req.params.id}).exec().then(function(parking){
				res.status(200).json(parking)
			}, function(erro){
				res.status(422).json(erro)

			})
		},
	}

	return parkingController
}