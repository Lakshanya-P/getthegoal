
var canvas= new fabric.Canvas("myCanvas");
ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;

block_width=30;
block_height=30;

player_object="";
block_object="";

function load_img(){
    fabric.Image.fromURL("golf-h.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(50);
        player_object.scaleToHeight(50);
        player_object.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(player_object);        
    });
	new_image();
}

function new_image(){
    fabric.Image.fromURL("ball.png", function(Img){
        block_object=Img;
        block_object.scaleToWidth(50);
        block_object.scaleToHeight(50);
        block_object.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(block_object);        
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x == hole_x)&&(ball_y==hole_y)){
		canvas.remove(block_object);
		document.getElementById("hd3").innerHTML="You have hit the goal!";
		document.getElementById("myCanvas").style.borderColor="red";

	}

	else{
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
		if(ball_y>=0){
			ball_y=ball_y - 5;
			canvas.remove(block_object);
			new_image();
		}
	}

	function down()
	{
		if(ball_y<=450){
			ball_y=ball_y + 5;
			canvas.remove(block_object);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x - 5;
			canvas.remove(block_object);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x + 5;
			canvas.remove(block_object);
			new_image();
		}
	}
	
}

