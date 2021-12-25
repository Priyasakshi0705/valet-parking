Canvas= document.getElementById("myCanvas") ;
ctx = Canvas.getContext("2d");

car_height= 120;
car_width= 80;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x= 10;
car_y= 10;

function add() {
	background_img_uploaded = new Image();
	background_img_uploaded.onload = uploadBackground;
	background_img_uploaded.src = background_image;

	greencar_img_uploaded = new Image();
	greencar_img_uploaded.onload = uploadgreencar;
	greencar_img_uploaded.src = greencar_image;
}

function uploadBackground() {
	
	ctx.drawImage(background_img_uploaded,0,0,Canvas.width,Canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_img_uploaded,car_x,car_y,car_width,car_height );
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car_y>=10){
		car_y= car_y-10;
		uploadBackground();
		uploadgreencar();
	}

}

function down()
{
	if (car_y<480){
		car_y= car_y+10;
		uploadBackground();
		uploadgreencar();
	}
	
}

function left()
{
	if (car_x>=0){
		car_x= car_x=10;
		uploadBackground();
		uploadgreencar();
	}
	
}

function right()
{
	if (car_x<820){
		car_x= car_x+10;
		uploadBackground();
		uploadgreencar();
	}
	}
