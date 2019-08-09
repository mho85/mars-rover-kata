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
function displayPos(rover) { console.log("Position: (" + rover.x + ", " + rover.y + ")"); }
function displayTravelLog(rover) { 
  console.log("Travel Log:")
  for (let i = 0 ; i < rover.travelLog.length; i++) {
    console.log(rover.travelLog[i]); 
  }
}

// (MAP) Display props
function displaySize(map) { console.log("Size: " + map.sizeX +"x" + map.sizeY); }
function displayObstacles(map) {
  console.log("List of obstacles:")
  for (let i = 0 ; i < map.listObstacles.length; i++) {
    console.log(map.listObstacles[i]); 
  }
}

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
      if (rover.y > 0) { rover.y -= 1; }
      break;
    case "S":
      if (rover.y < map.sizeY - 1) { rover.y += 1; }
      break;
    case "W":
      if (rover.x > 0) { rover.x -= 1; }
      break;
    case "E":
      if (rover.x < map.sizeX - 1) { rover.x += 1; }
      break;
    default:
      console.log("Error: Undefined rover direction");
      break;
  }
  console.log("moveForward was called!");
  displayPos(rover);
  updateTravelLog(rover, rover.x, rover.y);
}
function moveBackward(rover, map){
  switch(rover["direction"]) {
    case "N":
      if (rover.y < map.sizeY - 1) { rover.y += 1; }
      break;
    case "S":
      if (rover.y > 0) { rover.y -= 1; }
      break;
    case "W":
      if (rover.x < map.sizeX - 1) { rover.x += 1; }
      break;
    case "E":
      if (rover.x > 0) { rover.x -= 1; }
      break;
    default:
      console.log("Error: Undefined rover direction");
      break;
  }
  console.log("moveBackward was called!");
  displayPos(rover);
  updateTravelLog(rover, rover.x, rover.y);
}
function getCommands(rover, commands) {
  for (let i = 0; i < commands.length ; i++) {
    switch (commands[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
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