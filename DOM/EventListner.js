
headOne = document.querySelector("#one")
headTwo = document.querySelector("#two")
headThree = document.querySelector("#three")

headOne.addEventListener( "mouseover" , function(){
  headOne.textContent = "Mouse is currently over me";
  headOne.style.color = "lightblue";
})

headOne.addEventListener( "mouseout", function(){
  headOne.textContent = "Hover Over Me";
  headOne.style.color = "black";
} )

headTwo.addEventListener( "click", function(){
  headTwo.textContent = "I was Clicked!";
  headTwo.style.color = "lightgreen";
} )

headThree.addEventListener( "dblclick", function(){
  headThree.textContent = "I Was Double Clicked!!";
  headThree.style.color = "lightgrey";
} )
