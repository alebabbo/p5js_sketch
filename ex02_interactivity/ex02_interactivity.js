/*
 * @name Interactivity 1
 * @frame 720,425
 * @description The circle changes color when you click on it.
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>.
 * </em></p>
 */

// for red, green, and blue color values
let r, g, b;

var click1;
var clickSave;

function setup() {
  let c = createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  print("ciao");

  //Create, style and resize clickables.
  click1 = new Clickable();  
  click1.cornerRadius = 0;
  click1.locate(20, 20);
    click1.resize(80, 80);
  //This function is ran when the clickable is hovered but not pressed.
  click1.onHover = function() {
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
    this.text = "Yay!";
  }
  //This function is ran when the clickable is NOT hovered.
  click1.onOutside = function() {
    this.color = "#EEEEEE";
    this.text = "Hello there!";
    this.textColor = "#000000";
  }
  //This function is ran when the clickable is pressed.
  click1.onPress = function() {
    this.stroke = "#FF0000";
  }
  //This funcion is ran when the cursor was pressed and then
  //rleased inside the clickable. If it was pressed inside and
  //then released outside this won't work.
  click1.onRelease = function() {
    alert("Yay!");
  }
  
    clickSave = new Clickable();
      click1.locate(20, 40);
        clickSave.onPress = function() {
    this.stroke = "#FF0000";
  }
      clickSave.onRelease = function() {
          print("save");
  saveCanvas('myCanvas', 'jpg');
    alert("salva!");
  }
}
function draw() {
  background(127);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
  click1.draw();
    clickSave.draw();
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

//function keyPressed() {

//}
