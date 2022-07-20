canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var greencar_imgTag = "empty";
var background_img_Tag = "empty";

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_img_Tag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
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
		right();
		console.log("right");
	}
	if(keyPressed == '39')
	{
		left();
		console.log("left");
	}
}

function up()
{
	if(keyPressed == '38')
		{

			if(greencar_y >=0)
			{
				greencar_y = greencar_y - 10;
				console.log("When up arrow is pressed, x= " + greencar_x + " | y = " + greencar_y);
				uploadBackground();
				uploadgreencar();
			}
		}
}

function down()
{
	if(keyPressed == '40')
		{

			if(greencar_y <=400)
			{
				greencar_y = greencar_y + 10;
				console.log("When down arrow is pressed, x= " + greencar_x + " | y = " + greencar_y);
				uploadBackground();
				uploadgreencar();
			}
		}
}

function right()
{
	if(keyPressed == '37')
		{

			if(greencar_x >=0)
			{
				greencar_x = greencar_x - 10;
				console.log("When right arrow is pressed, x= " + greencar_x + " | y = " + greencar_y);
				uploadBackground();
				uploadgreencar();
			}
		}
}

function left()
{
	if(keyPressed == '39')
		{

			if(greencar_x <=800)
			{
				greencar_x = greencar_x + 10;
				console.log("When left arrow is pressed, x= " + greencar_x + " | y = " + greencar_y);
				uploadBackground();
				uploadgreencar();
			}
		}
}

if (greencar_x == 425 && greencar_y == 85)
{
	document.getElementById("div1").innerHTML.style.display = block;
}
