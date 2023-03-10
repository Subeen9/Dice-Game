var randomNumber = Math.floor(Math.random()*6) +1 ;
var randomImage = "dice"+ randomNumber + ".png";
var imageSrc = "images/" + randomImage;
 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", imageSrc);
 var nextRandomNum = Math.floor(Math.random()*6)+1;
 var image2Src = "images/"+ "dice" + nextRandomNum + ".png";
 var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src",image2Src);



 if(randomNumber>nextRandomNum){
    document.querySelector("h1").innerHTML = "Player 1 won Congrats 🏆";

 }
 else if(nextRandomNum> randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 won Congrats 🏆";
 }
 else{
   document.querySelector("h1").innerHTML = "Draw 🤝";
 }
 
