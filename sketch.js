var ryeSlider;
var gyeSlider;
var byeSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    ryeSlider = createSlider(0, 255, 100);
    ryeSlider.position(20,20);
    
    gyeSlider = createSlider(0, 255, 100);
    gyeSlider.position(20,50);
    
    byeSlider = createSlider(0, 255, 100);
    byeSlider.position(20,80);
}

function draw(){
    redValue = ryeSlider.value();
    greenValue = gyeSlider.value();
    blueValue = byeSlider.value();
    
    background(redValue, greenValue, blueValue);
}