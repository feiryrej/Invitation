// create 2 variables to hold the mouse position
let mouseX = 0;
let mouseY = 0;

// get the flashlight element
let flashlight = document.getElementById("flashlight");

// check if the device is a touch device
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

// create a function to get the mouse position
function getMousePosition(e) {
  // if the device is not a touch device, get the pageX and pageY position
  // if the device is a touch device, get the touches[0].pageX and touches[0].pageY position
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  // set the CSS variable --Xpos to the mouseX position
  flashlight.style.setProperty("--Xpos", mouseX + "px");
  // set the CSS variable --Ypos to the mouseY position
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

// add a mousemove event listener to the document to run the getMousePosition function
document.addEventListener("mousemove", getMousePosition);
// add a touchmove event listener to the document to run the getMousePosition function
document.addEventListener("touchmove", getMousePosition);


