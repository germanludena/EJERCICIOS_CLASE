function setup(){
    console.log("setup");
    createCanvas(200,200);
  

}

function draw(){
    clear();
    background(125);
    if(mouseX < 100 && mouseY<100){
        fill(color('red'));


    }else if(mouseX < 100 && mouseY> 100){
        fill(color('white'));
    } if (mouseX > 100 && mouseY <100)  {
    fill(color("orange"));
    }else if(mouseX>100 && mouseY>100)
    fill(color("black"));
ellipse(mouseX,mouseY,50,50);
}
    