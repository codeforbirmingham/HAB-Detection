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

var photo = function(){
	self = this;

	this.location = "";

	this.getNew = function(){
		console.log("Getting new photo");
		navigator.camera.getPicture(
			self.success,
			self.fail,
			{
				quality: 50,
				destinationType: Camera.DestinationType.DATA_URL
			}
		);
	}
	this.getCurrent = function(){
		console.log("Getting Current photo");
	}
	this.display = function(imageData){
		console.log("Displaying photo");
		var image = document.getElementById('imageDIV');
    		image.src = "data:image/jpeg;base64," + imageData;
	}

	this.success = function(imageData){
		console.log("Camera Success");
		self.display(imageData);
	}
	this.fail = function(){
		console.log("Camera Failed");
	}

}


//Global Vars
var loco = new loco();
	loco.get();

var photo = new photo();

//Global Functions
function toCanvas(base64){
	var canvas = document.getElementById('imgCanvas');
	var ctx    = canvas.getContext('2d');
	var img    = new Image();
	img.src    = "data:image/jpeg;base64," + base64;
	img.onload = function(){
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	}
}
	
function testImage(){
    $.get("examples/testimage.txt", function(data){
        toCanvas(data);
    });
}
