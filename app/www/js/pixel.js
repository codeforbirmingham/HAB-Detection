function pixelToRGB(canvas, x, y){

	var imgData=canvas.getImageData(x,y,1,1);

	var red 	= imgData.data[0];
	var green 	= imgData.data[1];
	var blue 	= imgData.data[2];

	return [red,green,blue];
}

//color = [r, g, b ]
//returns the average color difference as a percentage. 
function distanceRGB(color1, color2){
	var diffRed   = Math.abs(color1[0] - color2[0]);
	var diffGreen = Math.abs(color1[1] - color2[1]);
	var diffBlue  = Math.abs(color1[2] - color2[2]);
	
	//percentages
	var perRed    = diffRed / 255;
	var perGreen  = diffGreen / 255;
	var perBlue   = diffBlue / 255;
	
	return((perRed + perGreen + perBlue) / 3 *100);

}
