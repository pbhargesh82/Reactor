// generate random hex color code


function makeRandomColor() {
    var color = "#";
    letters = "0123456789ABCDEF".split("");
    
    for( var i=0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    
    return color;
}

var object = document.getElementById("object");
var createdTime; 
var clickedTime;
var reactionTime;
var reactionTimeArray = [];
var totalReactionTime;
var avgReactionTime;

const reducer = (previousValue, currentValue) => previousValue + currentValue;

function makeObject() {
    // generate height of the object
    var top = Math.random();
    top = top * 300;
    
    // generate width of the object
    var left = Math.random();
    left = left * 500;
    
    // random radius for object to make it either square or circle
    if(Math.random() > 0.5) {
        object.style.borderRadius = "50%";
    } else {
        object.style.borderRadius = "0"
    }
    
    // giving height and width to the created object
    object.style.minHeight = top + "px";
    object.style.maxWidth = left + "px";
    
    // positioning object relative for different placement
    object.style.position = "relative";
    object.style.top = top + "px";
    object.style.left = left + "px";
    
    //assign color to the objext and display it
    object.style.backgroundColor = makeRandomColor();
    object.style.display = "block";
    
    // save object creation time
    createdTime = Date.now();  
}

// make object appear after a random delay
function displayAfterDelay() {
    setTimeout(makeObject,Math.random()*2000);
}

displayAfterDelay();

var reactionTimeDisplay = document.getElementById("reactionTimeDisplay");
var totalReactionTimeDisplay = document.getElementById("totalReactionTimeDisplay");
var objectsClicked = document.getElementById("objectsClicked");
var avgReactionTimeDisplay = document.getElementById("avgReactionTimeDisplay");

object.addEventListener("click",objectClicked);

function objectClicked() {
    // hide object as it clicked
    object.style.display = "none";
    // save object clicking time
    clickedTime = Date.now();
    // calculate  reacion time
    reactionTime = (clickedTime - createdTime)/1000;
    // display reaction time
    // reactionTimeDisplay.innerHTML = "Your reaction time: " + reactionTime +" sec";
    reactionTimeDisplay.innerHTML = reactionTime.toFixed(2) +" sec";
    // push reactionTime to reactionTimeArray
    reactionTimeArray.push(reactionTime);
    totalReactionTime = reactionTimeArray.reduce(reducer);
    // totalReactionTimeDisplay.innerHTML = "Your total reaction time: " + totalReactionTime +" sec";
    totalReactionTimeDisplay.innerHTML = totalReactionTime.toFixed(2) +" sec";
    // objectsClicked.innerHTML = "Objects clicked: " + reactionTimeArray.length;
    objectsClicked.innerHTML = reactionTimeArray.length;
    avgReactionTime = totalReactionTime/ reactionTimeArray.length;
    // avgReactionTimeDisplay.innerHTML = "Your avg reaction time: " + avgReactionTime +" sec";
    avgReactionTimeDisplay.innerHTML = avgReactionTime.toFixed(2) +" sec";
    // make new object
    displayAfterDelay();
}

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click",reset);

function reset() {
   location.reload();
}
