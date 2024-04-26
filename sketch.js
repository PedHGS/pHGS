function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(0);
    stroke("blue")
    fill("red")
    
    if(mouseIsPressed){
       rect(mouseX,mouseY,20,35)
       }
  }