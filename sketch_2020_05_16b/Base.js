// Base class
let button;

let plus_sx = []; // Declare object

let levelSx = 0;
let levelDx = 0;
let levelHeight = 26;


class Base {


  constructor(ixpos, iypos, iHeightSx, iHeightDx, iindex) {
    this.xpos = ixpos; 
    this.ypos = iypos;
    this.HeightSx = iHeightSx; // pixel più alto a SX
    this.HeightDx = iHeightDx; // pixel più alto a SX
    this.index = iindex;

  }


  display() {

    // piedi
    fill(200, 200, 200);
    noStroke();
    rect(this.xpos, this.ypos, 140, 15);

    button = createButton('click me');
    button.position(this.xpos, this.ypos + 10);
    button.mousePressed(changeBG);
    
    let xp = this.xpos; // nelle funzioni di click non prende le variabili dell'oggetto
    let yp = this.ypos - levelSx;
    
    function changeBG() {
      let val = random(255);
      print(val);
      plus_sx.push(new Mod70(xp, yp));
      levelSx += levelHeight;
    }


    for (let i = 0; i < plus_sx.length; i++) {
      //print(i);
      plus_sx[i].display();
    }
  }
}
