

function getRandomColor(){
  letter = "0123456789ABCDEF";
  color = "#";
  for ( var i = 0; i<6; i++ ){
    randomNumber = Math.floor( Math.random() * 16 );
    color += letter[randomNumber];
  }
  return color;
}

function setRandomColour(){
  document.querySelector("#h1").style.color = getRandomColor();
}

setInterval("setRandomColour()", 500);
