function pixelToRGB(canvas, x, y){

	var imgData=canvas.getImageData(x,y,1,1);

	var red 	= imgData.data[0];
	var green 	= imgData.data[1];
	var blue 	= imgData.data[2];

	return {red,green,blue};
}