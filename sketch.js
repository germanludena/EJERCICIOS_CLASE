
function setup(){
   console.log("setup");
   createCanvas(400,400)

   }
function draw(){
  console.log("draw -framecount:"+frameCount);
    var red = random(0,255);
    var green = random(0,255);
    var blue = random(0,255);
    background(red, green, blue);
    fill(color("red"));
    ellipse(200,200,100, 80);
}