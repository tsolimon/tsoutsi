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
function preload(){
   song = loadSound('data/song.mp3');
   img = loadImage('data/tsoutsi.jpg');
}
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  r= random(20,80);
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
  if (sc!=temp) { 
    timer ++;
  }
   temp=sc;
  if (timer>r){
    song.play();
  flag = true;
   r=random(20,80);
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
 text(hr + ':' + mn + ':' + sc+'...'+ 'timer:'+ timer + '....alarm:' + int(r) , 10, 200);
}

function changeBG() {
  red= 200;
  green=20;
  blue = 10;
}
