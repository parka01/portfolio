var buttonLength = document.querySelectorAll(".drum").length;

for(var i=0; i<buttonLength; i++){
  document.querySelectorAll("button")[i].addEventListener("click", drumClick
  );
}


function drumClick(){
  //alert("Clicked!");

  var assignedCharacter = this.className;
  switch (assignedCharacter) {
    case "w drum":
            const drumSound1 = new Audio("sounds/tom-1.mp3");
            drumSound1.play();
      break;

    case "a drum":
            const drumSound2 = new Audio("sounds/tom-2.mp3");
            drumSound2.play();
    break;
    case "s drum":
            const drumSound3 = new Audio("sounds/tom-3.mp3");
            drumSound3.play();
      break;
    case "d drum":
            const drumSound4 = new Audio("sounds/tom-4.mp3");
            drumSound4.play();
      break;
    case "j drum":
            const drumSound5 = new Audio("sounds/crash.mp3");
            drumSound5.play();
      break;
    case "k drum":
            const drumSound6 = new Audio("sounds/kick-bass.mp3");
            drumSound6.play();
      break;
    case "l drum":
            const drumSound7 = new Audio("sounds/snare.mp3");
            drumSound7.play();
      break;
    default: console.log(assignedCharacter);



  }
}
document.addEventListener("keydown", drumKeyboard);
function drumKeyboard(event){
  var pressedKey = event.key;
  switch (pressedKey) {
    case "w":
      const drumSound1 = new Audio("sounds/tom-1.mp3");
            drumSound1.play();
    break;
    case "a":
      const drumSound2 = new Audio("sounds/tom-2.mp3");
            drumSound2.play();
    break;
    case "s":
      const drumSound3 = new Audio("sounds/tom-3.mp3");
            drumSound3.play();
    break;
    case "d":
      const drumSound4 = new Audio("sounds/tom-4.mp3");
            drumSound4.play();
    break;
    case "j":
      const drumSound5 = new Audio("sounds/crash.mp3");
            drumSound5.play();
    break;
    case "k":
      const drumSound6 = new Audio("sounds/kick-bass.mp3");
            drumSound6.play();
    break;
    case "l":
      const drumSound7 = new Audio("sounds/snare.mp3");
            drumSound7.play();
    break;
    default: console.log(event.code);
  }
}