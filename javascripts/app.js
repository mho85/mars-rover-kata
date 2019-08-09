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
function getPosX(rover) { return rover.x; }
function getPosY(rover) { return rover.y; }

// (ROVER) Set props
function setDirection(rover, val) { rover.direction = val; }
function setPosX(rover, val) { rover.x = val; }
function setPosY(rover, val) { rover.y = val; }


// (MAP) Get props
function getSizeX(map) { return map.sizeX; }
function getSizeY(map) { return map.sizeY; }

// (MAP) Set props
function setSizeX(map, val) { map.sizeX = val; }
function setSizeY(map, val) { map.sizeY = val; }

// (MAP) Functions: addObstacle, removeObstacle, isAnObstacle, clearObstacles
function addObstacle(map, obstaclePosX, obstaclePosY) {
  if (isAnObstacle(map, obstaclePosX, obstaclePosY) === false) {
    map.listObstacles.push([obstaclePosX, obstaclePosY]);
  }
  console.log("New obstacle: (" + obstaclePosX + ", " + obstaclePosY + ")");
}
function removeObstacle(map, index) {
  map.listObstacles.splice(index, 1);
}
function isAnObstacle(map, obstaclePosX, obstaclePosY) {
  let res = false;
  if (map.listObstacles !== []) {
      for (let i = 0; i < map.listObstacles.length; i++) {
        if (obstaclePosX === map.listObstacles[i][0] && obstaclePosY === map.listObstacles[i][1]) { res = true; }
      }
    }
  return res;
}
function clearObstacles(map) { map.listObstacles = []; }

// (ROVER) Functions: turnLeft, turnRight, moveForward, getCommands, updateTravelLog, initPos
function turnLeft(rover){
  switch(getDirection(rover)) {
    case "N":
      setDirection(rover, "W");
      break;
    case "S":
      setDirection(rover, "E");
      break;
    case "W":
      setDirection(rover, "S");
      break;
    case "E":
      setDirection(rover, "N");
      break;
    default:
      console.log("Error: Undefined rover direction")
      break;
  }
  console.log("turnLeft was called!");
  displayDirection(rover);
}
function turnRight(rover){
  switch(getDirection(rover)) {
    case "N":
      setDirection(rover, "E");
      break;
    case "S":
      setDirection(rover, "W");
      break;
    case "W":
      setDirection(rover, "N");
      break;
    case "E":
      setDirection(rover, "S");
      break;
    default:
      console.log("Error: Undefined rover direction");
      break;
  }
  console.log("turnRight was called!");
  displayDirection(rover);
}
function moveForward(rover, map){
  let futurePosX, futurePosY;
  switch(getDirection(rover)) {
    case "N":
      if (getPosY(rover) > 0) {
        futurePosX = getPosX(rover);
        futurePosY = getPosY(rover) - 1;
      }
      break;
    case "S":
      if (getPosY(rover) < getSizeY(map) - 1) {
        futurePosX = getPosX(rover);
        futurePosY = getPosY(rover) + 1;
      }
      break;
    case "W":
      if (getPosX(rover) > 0) { 
        futurePosX = getPosX(rover) - 1;
        futurePosY = getPosY(rover);
      }
      break;
    case "E":
      if (getPosX(rover) < getSizeX(map) - 1) { 
        futurePosX = getPosX(rover) + 1;
        futurePosY = getPosY(rover);
      }
      break;
    default:
      console.log("Error: Undefined rover direction");
      break;
  }
  console.log("moveForward was called!");
  if (!isAnObstacle(map, futurePosX, futurePosY)) {
    setPosX(rover, futurePosX);
    setPosY(rover, futurePosY); 
  } else {
    console.log("Error: Cannot move due to an obstacle")
  }
  displayPos(rover);
  updateTravelLog(rover, getPosX(rover), getPosY(rover));
}
function moveBackward(rover, map){
  let futurePosX, futurePosY;
  switch(rover["direction"]) {
    case "N":
      if (getPosY(rover) < getSizeY(map) - 1) { 
        futurePosX = getPosX(rover);
        futurePosY = getPosY(rover) + 1;
      }
      break;
    case "S":
      if (getPosY(rover) > 0) { 
        futurePosX = getPosX(rover);
        futurePosY = getPosY(rover) - 1; 
      }
      break;
    case "W":
      if (getPosX(rover) < getSizeX(map) - 1) { 
        futurePosX = getPosX(rover) + 1;
        futurePosY = getPosY(rover);
      }
      break;
    case "E":
      if (getPosX(rover) > 0) { 
        futurePosX = getPosX(rover) - 1;
        futurePosY = getPosY(rover);
      }
      break;
    default:
      console.log("Error: Undefined rover direction");
      break;
  }
  
  console.log("moveBackward was called!");
  if (!isAnObstacle(map, futurePosX, futurePosY)) {
    setPosX(rover, futurePosX);
    setPosY(rover, futurePosY); 
  } else {
    console.log("Error: Cannot move due to an obstacle")
  }
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
function initPos(rover) {
  setPosX(rover, 0);
  setPosY(rover, 0);
  displayPos(rover);
}