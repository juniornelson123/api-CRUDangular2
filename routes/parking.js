module.exports = function(app){
	var Parking = app.controllers.parking

	app.get("/parkings",  Parking.index)	
	app.get("/parking/:id", Parking.show)	
	app.get("/parking/user/:value", Parking.find_by)	
	app.post("/parkings", Parking.create)	
	app.put("/parking/:id", Parking.update)	
	app.delete("/parking/:id", Parking.delete)	
}