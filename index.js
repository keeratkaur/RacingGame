var blue_car = document.getElementById("blueCar");
var race_car = document.getElementById("RacingCar");
var result=document.getElementById("result");
const score=document.getElementById("score");
var game= document.getElementById("game");
var count=0;
var mainsound=document.getElementById("mainsound");
var clashsound=document.getElementById("clashsound");

//blue car moving state
blue_car.addEventListener("animationiteration", function() {
  var random = ((Math.floor(Math.random() * 3)) * 130);
  blue_car.style.left = random + "px";
  count++;
})

//race car moving state
window.addEventListener("keydown", function(e) {
  //pressing right arrow
  if (e.keyCode == "39") {
    //getComputedStyle tells all the Css properties of the element
    var raceCarRight = parseInt(window.getComputedStyle(race_car).getPropertyValue("left"))
    if (raceCarRight < 260) {
      race_car.style.left = (raceCarRight + 130) + "px";
      mainsound.play();
    }
  };

  //pressing left arrow
  if (e.keyCode == "37") {
    var raceCarLeft=parseInt(window.getComputedStyle(race_car).getPropertyValue("left"))
    if (raceCarLeft > 0) {
      race_car.style.left = (raceCarLeft - 130) + "px";
      mainsound.play();

    }
  }
})

//Game Over display
setInterval(function GameOver() {
  var blueCarTop=parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
  var blueCarLeft=parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"))
  var raceCarLeft=parseInt(window.getComputedStyle(race_car).getPropertyValue("left"))

  if((blueCarLeft==raceCarLeft)&& (blueCarTop>250)&&(blueCarTop<450)){
    result.style.display="block";
    game.style.display="none";
    score.innerHTML=`score:${ count}`;

    clashsound.play();
    count=0;
    }

},10)
