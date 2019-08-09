// (ROVER) Object
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
}

// (MAP) Object
var map = {
  sizeX: 10,
  sizeY: 10,
  listObstacles: []
}

// (ROVER) Display props
function displayDirection(rover) { console.log("Direction: " + rover.direction); }
function displayPos(rover) { console.log("Position: (" + getPosX(rover) + ", " + getPosY(rover) + ")"); }
function displayTravelLog(rover) { 
  console.log("Travel Log:")
  for (let i = 0 ; i < rover.travelLog.length; i++) {
    console.log(rover.travelLog[i]); 
  }
}

// (MAP) Display props
function displaySize(map) { console.log("Size: " + getSizeX(map) +"x" + getSizeY(map)); }
function displayObstacles(map) {
  console.log("List of obstacles:")
  for (let i = 0 ; i < map.listObstacles.length; i++) {
    console.log(map.listObstacles[i]); 
  }
}

// (ROVER) Get props
function getDirection(rover) { return rover.direction; }
function getPosX(rover) { return getPosX(rover); }
function getPosY(rover) { return getPosY(rover); }

// (MAP) Get props
function getSizeX(map) { return getSizeX(map); }
function getSizeY(map) { return getSizeY(map); }

// (MAP) Functions: addObstacle, removeObstacle
function addObstacle(map, obstaclePosX, obstaclePosY) {
  let isInMap = false;
  if (map.listObstacles !== []) {
      for (let i = 0; i < map.listObstacles.length; i++) {
        if (obstaclePosX === map.listObstacles[i][0] && obstaclePosY === map.listObstacles[i][1]) { isInMap = true; }
      }
    }
  if (isInMap === false) {
    map.listObstacles.push([obstaclePosX, obstaclePosY]);
  }
  console.log("New obstacle: (" + obstaclePosX + ", " + obstaclePosY + ")");
}
function removeObstacle(map, index) {
  map.listObstacles.splice(index, 1);
}

// (ROVER) Functions: turnLeft, turnRight, moveForward, getCommands, updateTravelLog
function turnLeft(rover){
  switch(rover["direction"]) {
    case "N":
      rover["direction"] = "W";
      break;
    case "S":
      rover["direction"] = "E";
      break;
    case "W":
      rover["direction"] = "S";
      break;
    case "E":
      rover["direction"] = "N";
      break;
    default:
      console.log("Error: Undefined rover direction")
      break;
  }
  console.log("turnLeft was called!");
  displayDirection(rover);
}
function turnRight(rover){
  switch(rover["direction"]) {
    case "N":
      rover["direction"] = "E";
      break;
    case "S":
      rover["direction"] = "W";
      break;
    case "W":
      rover["direction"] = "N";
      break;
    case "E":
      rover["direction"] = "S";
      break;
    default:
      console.log("Error: Undefined rover direction");
      break;
  }
  console.log("turnRight was called!");
  displayDirection(rover);
}
function moveForward(rover, map){
  switch(rover["direction"]) {
    case "N":
      if (getPosY(rover) > 0) { getPosY(rover) -= 1; }
      break;
    case "S":
      if (getPosY(rover) < getSizeY(map) - 1) { getPosY(rover) += 1; }
      break;
    case "W":
      if (getPosX(rover) > 0) { getPosX(rover) -= 1; }
      break;
    case "E":
      if (getPosX(rover) < getSizeX(map) - 1) { getPosX(rover) += 1; }
      break;
    default:
      console.log("Error: Undefined rover direction");
      break;
  }
  console.log("moveForward was called!");
  displayPos(rover);
  updateTravelLog(rover, getPosX(rover), getPosY(rover));
}
function moveBackward(rover, map){
  switch(rover["direction"]) {
    case "N":
      if (getPosY(rover) < getSizeY(map) - 1) { getPosY(rover) += 1; }
      break;
    case "S":
      if (getPosY(rover) > 0) { getPosY(rover) -= 1; }
      break;
    case "W":
      if (getPosX(rover) < getSizeX(map) - 1) { getPosX(rover) += 1; }
      break;
    case "E":
      if (getPosX(rover) > 0) { getPosX(rover) -= 1; }
      break;
    default:
      console.log("Error: Undefined rover direction");
      break;
  }
  console.log("moveBackward was called!");
  displayPos(rover);
  updateTravelLog(rover, getPosX(rover), getPosY(rover));
}
function getCommands(rover, map, commands) {
  for (let i = 0; i < commands.length ; i++) {
    switch (commands[i]) {
      case 'f':
        moveForward(rover, map);
        break;
      case 'b':
        moveBackward(rover, map);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log("Error: Incorrect command");
        break;
      }
  }
}
function updateTravelLog(rover, posX, posY) {
  let isInLog = false;
  if (rover.travelLog !== []) {
    for (let i = 0; i < rover.travelLog.length; i++) {
      if (posX === rover.travelLog[i][0] && posY === rover.travelLog[i][1]) { isInLog = true; }
    }
  }
  if (isInLog === false) {
    rover.travelLog.push([posX, posY]);
    // displayTravelLog(rover);
  }
}