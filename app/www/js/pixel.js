function pixelToRGB(canvas, x, y){

	var imgData=canvas.getImageData(x,y,1,1);

	var red 	= imgData.data[0];
	var green 	= imgData.data[1];
	var blue 	= imgData.data[2];

	return {red,green,blue};
}

//assuming they are color objects
//returns the average color difference in percentages
function distanceRGB(color1, color2){
	var diffRed   = Math.abs(color1.getRed() - color2.getRed());
	var diffGreen = Math.abs(color1.getGreen() - color2.getGreen());
	var diffBlue  = Math.abs(color1.getBlue() - color2.getBlue());
	
	//percentages
	var perRed    = diffRed / 255;
	var perGreen  = diffGreen / 255;
	var perBlue   = diffBlue / 255;
	
	return((perRed + perGreen + perBlue) / 3 *100);

}
