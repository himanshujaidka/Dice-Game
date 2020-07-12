var randomNumber1=Math.floor(Math.random()*6)+1;
var dice="dice"+randomNumber1+".png";
var randomdice="images/"+dice;

var imge1=document.querySelectorAll("img")[0];
imge1.setAttribute("src", randomdice);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdice2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🏆 Player 1 Won";
}
else if (randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Won 🏆";
}
else
{
  document.querySelector("h1").innerHTML="Match Tie"
}
