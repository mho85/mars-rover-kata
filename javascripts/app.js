// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0
}

// ======================
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
}
