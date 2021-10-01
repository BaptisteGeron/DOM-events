const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  console.log(e.target.classList[1])
  let targetedColor = e.target.classList[1];
  console.log(getElapsedTime())
  addSquare(targetedColor);
}



//Everytime the user clicks on one of the action squares
//Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

function addSquare(rgb) {
let newDiv = document.createElement("div");
newDiv.className = "displayedsquare";
let divColor = " " + rgb;
newDiv.className += divColor;
let destination = document.getElementsByTagName("section")[0];

destination.appendChild(newDiv);

//Create a new <li> in the log below to state when the action was done
let newLiTime = getElapsedTime();
let newLiContent = "[" + newLiTime + "] created a new " + rgb + " square";
let writePlace = document.getElementsByTagName("ul")[0];
let newLi = document.createElement("li");
newLi.innerHTML = newLiContent;
writePlace.appendChild(newLi);
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

//Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
//When the spacebar is hit randomly change the background color of the whole page
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //your code
    }
}

//Log when the spacebar is used the same way you used for the generated squares.
//When the l key is pressed the log gets deleted (erases the generated <li>s)
//When the s key is pressed the squares get deleted (erases the generated squares)


//Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square