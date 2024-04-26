function setup() {
    createCanvas(1920, 1024);
  }
  
  function draw() {
    background(0);
    stroke("blue")
    fill("red")
    
    if(mouseIsPressed){
       rect(mouseX,mouseY,20,35)
       }
  }

This work is licensed under CC BY-NC-ND 4.0 
