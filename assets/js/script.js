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

object.addEventListener("click",objectClicked);

function objectClicked() {
    // hide object as it clicked
    object.style.display = "none";
    // save object clicking time
    clickedTime = Date.now();
    // calculate  reacion time
    reactionTime = (clickedTime - createdTime)/1000;
    // display reaction time
    reactionTimeDisplay.innerHTML = "Your reaction time: " + reactionTime +" sec";
    // make new object
    displayAfterDelay();
}
