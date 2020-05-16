
let blocchi = []; // Declare object

function setup() {
  createCanvas(710, 400);
  // Create object
  blocchi.push(new Base(width/4, height/5*4, 0, 0, 1));
  blocchi.push(new Base(width/4*2, height/5*4, 0, 0, 2));
  
}


function draw() {
  background(50, 89, 100);
  for (let i = 0; i < blocchi.length; i++) {
    blocchi[i].display();
  }
  
}
