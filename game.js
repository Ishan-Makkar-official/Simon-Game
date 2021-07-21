// alert("ishan");

var match=["ishan"];
match=[];
var buttonColors=["red","blue","green","yellow"]
function nextSequence()
{
  var randomNumber=Math.floor(Math.random()*4);
  var color=buttonColors[randomNumber];
  var audio=new Audio("sounds/"+color+".mp3");
  audio.play();
  match.push(color);
  return color;
}

var count=1;
$("#level-title").html("Level "+count);
var tobematched=[];
var rcolor=nextSequence();
$("#"+rcolor).addClass("pressed");
setTimeout(function()
{
  $("#"+rcolor).removeClass("pressed");
},200);


$(".btn").click(function()
{
var color=this.id;
this.classList.add("pressed");
var audio=new Audio("sounds/"+color+".mp3");
audio.play();
setTimeout(function()
{
  $("#"+color).removeClass("pressed");
},160);

var index=tobematched.push(color)-1;
// console.log(index);
if(tobematched[index]!=match[index])
{
    $("#level-title").html("Game Over");
    $("body").addClass("game-over");
    var audio=new Audio("sounds/"+"wrong"+".mp3");
    audio.play();
}

setTimeout(function()
{
  if(tobematched.length==match.length)
  {
    tobematched=[];
    count++;
    $("#level-title").html("Level "+count);
    var color=nextSequence();
    document.querySelector("#"+color).classList.add("pressed");
    setTimeout(function()
    {
      $("#"+color).removeClass("pressed");
    },200);


  }
},260);


}
);


$("body").keydown(function(event)
{
  var color=event.key;
  switch(color)
  {
    case "t":
    color="green";
    break;

    case "y":
    color="red";
    break;

    case "g":
    color="yellow";
    break;

    case "h":
    color="blue";
    break;
  }
  // var color=this.id;
  $("#"+color).addClass("pressed");
  var audio=new Audio("sounds/"+color+".mp3");
  audio.play();
  setTimeout(function()
  {
    $("#"+color).removeClass("pressed");
  },160);

  var index=tobematched.push(color)-1;
  // console.log(index);
  if(tobematched[index]!=match[index])
  {
      $("#level-title").html("Game Over");
      $("body").addClass("game-over");
      var audio=new Audio("sounds/"+"wrong"+".mp3");
      audio.play();
  }

  setTimeout(function()
  {
    if(tobematched.length==match.length)
    {
      tobematched=[];
      count++;
      $("#level-title").html("Level "+count);
      var color=nextSequence();
      document.querySelector("#"+color).classList.add("pressed");
      setTimeout(function()
      {
        $("#"+color).removeClass("pressed");
      },200);


    }
  },360);




});
