class Map_Generation {
  constructor(file) {
    this.file = file;
    this.width = 0;
    this.height = 0;
    this.getSizeMap();
  }
  getSizeMap() {
    let X = 0,
      Y = 0,
      I = 0;
    let file = new XMLHttpRequest();
    file.open("GET", this.file, false);
    file.send(null);
    this.file = file.responseText;
    //console.log(file.responseText);
    while (file.responseText[X] == "X") X++;
    while (I != file.responseText.length) {
      if (file.responseText[I] == "\u000A") {
        Y++;
      }
      I++;
    }
    this.width = X * 50;
    this.height = Y * 50;
  }
  get getWidthMap() {
    return this.width;
  }
  get getHeigthMap() {
    return this.height;
  }
  get getFileMap() {
    return this.file;
  }
}
var array = [];
var array2d = [[][][]]
const MapDK = new Map_Generation("../map/map1.txt");
(() => {
  let parent = document.querySelector("main");
  let canvasCompenent = document.createElement("canvas");
  canvasCompenent.setAttribute("id", "game");
  canvasCompenent.setAttribute("width", MapDK.getWidthMap);
  canvasCompenent.setAttribute("height", MapDK.getHeigthMap);
  canvasCompenent.setAttribute("style", "background-color:black;");
  parent.appendChild(canvasCompenent);
})();

const canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

function drawDK() {
  let i = 0, X = 0, Y = 25, width = 50, height = 25;
  while (i != MapDK.getFileMap.length){
    if (MapDK.getFileMap[i] == "_") {
        console.log('in condition');
      let floor = new Image();
      floor.onload = function() {
        ctx.drawImage(floor, X, Y, width, height);
        X += 50;
      };

      floor.src = "./images/floorDK.png";
    }
  i++;
}
}
drawDK();


/**
 * 
 * @param {Object} caracter 
 */
const colision = (caracter)=>{
  for(let i = 0;i<map.length;i++){
    for(let j = 0;j<map[i].length;i++){
        if(caracter.x+caracter.width > 0 && caracter.isRight ==  true){
         caracter.x -= 2; 
        }else if(caracter.x+caracter.width <  canvas.clientWidth && caracter.isLeft == true){
          caracter.x += 2; 
        }
    }
  }
}
