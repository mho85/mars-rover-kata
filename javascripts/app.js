// Iteration 1: The rover object
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
}

// Iteration 2: Turning the rover (Left)
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
      console.log("The direction of the rover is undefined.")
      break;
  }
  console.log("turnLeft was called!");
}

// Iteration 2: Turning the rover (Right)
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
      console.log("The direction of the rover is undefined.");
      break;
  }
  console.log("turnRight was called!");
}

// Iteration 3: Moving the rover
function moveForward(rover){
  switch(rover["direction"]) {
    case "N":
      if (rover.y !== 0) {  // Otherwise the rover stays at the same position.
        rover.y -= 1;
      }
      break;
    case "S":
      rover.y += 1;
      break;
    case "W":
      if (rover.x !== 0) {  // Otherwise the rover stays at the same position.
        rover.x -= 1;
      }
      break;
    case "E":
      rover.x += 1;
      break;
    default:
      console.log("The direction of the rover is undefined.");
      break;
  }
  console.log("moveForward was called");
  console.log("Rover's position: (" + rover.x + ", " + rover.y + ")");
  updateTravelLog(rover, rover.x, rover.y);
}

// Iteration 4: Commands
function getCommands(rover, commands) {
  for (let i = 0; i < commands.length ; i++) {
    switch (commands[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log("Incorrect command: skip to the next one.");
        break;
      }
  }
  console.log("getCommands was called");
}

// Iteration 5: Tracking
function updateTravelLog(rover, posX, posY) {
  let res = false;

  console.log("updateTravelLog was called");

  for (let i = 0; i < rover.travelLog.length; i++) {
    if (posX === rover.travelLog[i][0] && posY === rover.travelLog[i][1]) {
      res = true;
    }
  }

  if (res === false) {
    rover.travelLog.push([posX, posY]);
    console.log("TravelLog has been updated.")
  }

}