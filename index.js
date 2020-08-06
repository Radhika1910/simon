var buttonSequence = [];
var userSequence = [];

var started = false;
var level = 0;

var buttonArray = ["btn-1" , "btn-2" , "btn-3" , "btn-4"];

$(document).keypress(function(event){
  if(!started)
  {
    randomNumber();
    started = true;
  }
});

$(".buttn").click(function()
{
    var userChosenButton = $(this).attr("id");
    userSequence.push(userChosenButton);

      audioBG(userChosenButton);
      blinkButton(userChosenButton);

      checkAnswer(userSequence.length - 1);
});

function checkAnswer(gameLevel)
{
  if( userSequence[gameLevel] === buttonSequence[gameLevel] )
  {
    if(userSequence.length === buttonSequence.length)
      {
        setTimeout(function()
        {
          randomNumber();
        },800);
      }
  }
  else
  {
    audioBG("wrong");

    $("body").addClass("wrong");
    setTimeout(function(){
      $("body").removeClass("wrong")}
      ,200);

    $("h1").html("Game Over!Press Any Key To Restart.");

    newStart();
  }

}

function randomNumber()
{
  userSequence = [];

  var randomButton = Math.floor(Math.random() * 4);
  var selectedButton = buttonArray[randomButton];
  buttonSequence.push(selectedButton);

  level++;
  $("h1").text("Level : " + level);

  blinkButton(selectedButton);
  audioBG(selectedButton);

}

function audioBG(buttonNumber)
{
  var audio = new Audio("sounds/" + buttonNumber + ".mp3");
  audio.play();
}

function blinkButton(numberButton)
{
  $("." + numberButton).fadeOut(100);
  $("." + numberButton).fadeIn(100);
}

function newStart()
{
  level = 0;
  buttonSequence = [];
  started = false;
}
