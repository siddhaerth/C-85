canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array=["nasa image 1.jpg","nasa image 2.jpg","nasa image 3.jpg","nasa image 4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image =nasa_mars_images_array[random_number];
console.log("background_image= " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_tag = new Image();
    background_tag.onload = upload_background;
    background_tag.src = background_image;

    rover_tag = new Image();
    rover_tag.onload = upload_rover;
    rover_tag.src = rover_image;

}

function upload_background() {
    ctx.drawImage(background_tag, 0, 0, canvas.width, canvas.height)
}

function upload_rover() {
    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() 
{

if(rover_y >=0)
{
    rover_y= rover_y -10;
    console.log("when up arrow is clicked, x=" + rover_x + ", y=" + rover_y);
    upload_background();
    upload_rover();
}
}

function down() 
{

if(rover_y <=500)
{
    rover_y= rover_y +10;
    console.log("when down arrow is clicked, x=" + rover_x + ", y=" + rover_y);
    upload_background();
    upload_rover();
}
}

function left() 
{

if(rover_x >=0)
{
    rover_x= rover_x -10;
    console.log("when left arrow is clicked, x=" + rover_x + ", y=" + rover_y);
    upload_background();
    upload_rover();
}
}

function right() 
{

if(rover_x <=700)
{
    rover_x= rover_x +10;
    console.log("when right arrow is clicked, x=" + rover_x + ", y=" + rover_y);
    upload_background();
    upload_rover();
}  
}