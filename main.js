var canvas_my=document.getElementById("myCanvas");
var ctx=canvas_my.getContext("2d");
var car1_width=100;
var car1_height=90;
var car1_x=10;
var car1_y=10;

var car1_image="https://www.clipartmax.com/png/middle/26-268510_28-collection-of-car-clipart-top-view-transparent-race-car-cartoon-top.png";


var car1_img;

function add(){
    
    car1_img=new Image();
    car1_img.onload=upLoadcar1;
    car1_img.src=car1_image;

    }

    function upLoadcar1(){

        ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height);
    }





window.addEventListener("keydown", my_keydown)
function my_keydown(e){

    var my_keydown=e.keyCode;
    console.log(my_keydown);

    if (my_keydown=="37"){

        Left();
        console.log("left");
    }

    if (my_keydown=="38"){

        Up();
        console.log("Up");
    }

    if (my_keydown=="39"){

        Right();
        console.log("Right");
    }

    if (my_keydown=="40"){

        Down();
        console.log("Down");
    }
}

function Down(){
    if (car1_y<=500){
    
        car1_y=car1_y+10;
        console.log(car1_x+", "+car1_y);
        upLoadBackground();
        upLoadRover();
    }
    
    
    }
    
    
    
    function Up(){
        
        if (car1_y>=10){
    
            car1_y=car1_y-10;
            console.log(car1_x+", "+car1_y);
            upLoadBackground();
            upLoadRover();
        }
    }
    
    
    
    function Right(){
    
        if (car1_x<=690){
    
            car1_x=car1_x+10;
            console.log(car1_x+", "+car1_y);
            upLoadBackground();
            upLoadRover();
        }
    
    }
    
    
    
    function Left(){
        
        if (car1_x>=10){
    
            car1_x=car1_x-10;
            console.log(car1_x+", "+car1_y);
            upLoadBackground();
            upLoadRover();
        }
    }