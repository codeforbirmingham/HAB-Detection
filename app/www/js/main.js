//Objects
var loco = function(){
	this.latitude 	= "";
	this.longitude 	= "";
	this.altitude 	= "";
	this.accuracy 	= "";

	this.street = "";
	this.city	= "";
	this.state	= "";
	this.zip	= "";

	self = this;

	this.get = function(){
		console.log("Getting Location");
		navigator.geolocation.getCurrentPosition(self.success, self.error, {enableHighAccuracy: true});
	}
	this.success = function(position){
		console.log("Got Location");

		self.latitude 	= position.coords.latitude;
		self.longitude 	= position.coords.longitude;
		self.altitude 	= position.coords.altitude;
		self.accuracy 	= position.coords.accuracy;

	}
	this.error = function(error){
		console.log("Location Error");
	}

}

//Global Vars
var loco = new loco();
	loco.get();

//Global Functions
