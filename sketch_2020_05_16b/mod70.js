class Mod70 {

  constructor(ixpos, iypos) {
    this.xpos = ixpos; 
    this.ypos = iypos;
  }

  display() {
    fill(255);
    noStroke();
    rect(this.xpos, this.ypos, 140, 15);
    //rect(30, 30, 140, 15);
    //print("mod70");
  }
}
