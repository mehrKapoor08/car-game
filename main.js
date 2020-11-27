canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car1width=120;
var car1height=70;
car_1image= "car1.png";
var car1_x=10;
var car1_y=10;

var car2width=120;
var car2height=70;
car_2image= "car1.png";
var car2_x=10;
var car2_y=100;

backgroundImage="racing.gif";


function add(){
    backgroundImageTag=new Image();
    backgroundImageTag.onload=uploadBackground;
backgroundImageTag.src=backgroundImage;

car_1imageTag=new Image();
car_1imageTag.onload=uploadcar1;
car_1imageTag.src=car_1image;

car_2imageTag=new Image();
car_2imageTag.onload=uploadcar2;
car_2imageTag.src=car_2image;


}
function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0,0,canvas.width,canvas.height);

}
function uploadCar1(){
    ctx.drawImage(car_1imageTag, car1_x, car1_y, car1width,  car1height);
    ctx.drawImage(car_2imageTag, car2_x, car2_y, car2width,  car2height);

}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed=e.keyCode;
    if ( keyPressed=='38'){
        console.log("up");
        up();
        

    }
    if ( keyPressed=='40'){
        console.log("down");
        down();
        
        
    }    if ( keyPressed=='37'){
        console.log("left");
        left();
        
        
    }    if ( keyPressed=='39'){
        console.log("right");
        right();
        
        
    }
}
