var actionNewChunk = 39; //keyCode for Tab
var actionDuplicateChunk;

var actionNewPoint = 13; // keyCode for Enter
var actionNavigate; ///arrow keys are 37,38,39,40

var myPoints = [];
var whichPointSelected = 0;
var whichChunkSelected = 0;


function setup() {
  let point = new Point();
  let chunk = createInput();
  chunk.input(myInputEvent);
  chunk.parent(point.div);
  point.chunks[0] = chunk;
  
  myPoints.push(point);
}

function addChunk(whichPoint, whatText){
  let anotherChunk = createInput();
  anotherChunk.input(myInputEvent);
  myPoints[whichPointSelected].chunks.push(anotherChunk);
  
  anotherChunk.parent(myPoints[whichPointSelected].div);
}

function addPoint(){
  let anotherPoint = new Point();
  whichPointSelected +=1;
  myPoints.push(anotherPoint);
  
  addChunk(whichPointSelected, "");
}

function myInputEvent() {
  //console.log('you are typing: ', this.value());
}

function keyPressed(){
  switch(keyCode){
      case(actionNewChunk):
        addChunk(whichPointSelected, "");
        break;
      case(actionNewPoint)://enter
        addPoint();
        break;
      case(37):
        break;
      case(38):
        break;
      case(39):
        break;
      case(40):
        break;
      default:
  }
}

// Jitter class
class Point {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.summary = "The point here is...";
    this.height = 30;
    this.chunks = [];
    this.div = createDiv('A Point');
    this.div.addClass('scrolling-wrapper');
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}