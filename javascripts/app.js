// Rover Object Goes Here
// ======================
var rover = {
  direction: "N"
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
      console.log("The direction of the rover is undefined.")
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
