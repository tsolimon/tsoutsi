// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY
let song;
let timer=0;
let r;
let temp=0;
let red = 0;
let blue= 0;
let green = 0;
let img;
let flag = false;
let uv;
let start = false;
let step;

function preload(){
   song = loadSound('data/song.mp3');
   img = loadImage('data/tsoutsi.jpg');
   
}
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  uv = 50;
  step = 40;
  r=(uv,uv+step);
  button = createButton('START');
  button.position(width/3, 20);
  button.mousePressed(changeBG);
}

function draw() {
  background(red,green,blue);
  translate(200, 200);
  rotate(-90);


  let hr = hour();
  let mn = minute();
  let sc = second();
     if (start) {
  if (sc!=temp) { 
    timer ++;
  }
   temp=sc;
  if (timer>r){
    song.play();
  flag = true;
   r=random(uv,uv+step);
    timer=0;
  }
  if (timer>4){
  flag = false;
  }
 if (flag){
   image(img,0,0, width/2,height/2);
 }
  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  //arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  //arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

   fill(255);
   noStroke();
 text('Value:'+ uv +'...'+ 'Step:'+ step +'.........tsoutsiii.......'+ 'Timer:'+ timer + '...Alarm:' + int(r) , -180, 200);
}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){    
   uv = uv-10;
  }
  else if(keyCode === RIGHT_ARROW){
  uv = uv+10;
  }
   else if(keyCode === UP_ARROW){
 step = step+10;
  }
  else if(keyCode === DOWN_ARROW){
 step = step-10;
  }
 }
function changeBG() {
  red= 200;
  green=20;
  blue = 10;
 start = true;
}
