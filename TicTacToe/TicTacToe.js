firstRowFirstColumn = document.querySelector("#oneOne")
firstRowSecoandColumn = document.querySelector("#oneTwo")
firstRowThirdColumn = document.querySelector("#oneThree")

secoandRowFirstColumn = document.querySelector("#twoOne")
secoandRowSecoandColumn = document.querySelector("#twoTwo")
secoandRowThirdColumn = document.querySelector("#twoThree")

thirdRowfirstColumn = document.querySelector("#threeOne")
thirdRowSecondColumn = document.querySelector("#threeTwo")
thirdRowThirdColumn = document.querySelector("#threeThree")



firstRowFirstColumn.addEventListener("click", function(){
  firstRowFirstColumn.textContent = "X"
})

firstRowFirstColumn.addEventListener( "dblclick", function(){
  firstRowFirstColumn.textContent = "O"

} )

secoandRowFirstColumn.addEventListener("click", function(){
  secoandRowFirstColumn.textContent = "X"
})

secoandRowFirstColumn.addEventListener( "dblclick", function(){
  secoandRowFirstColumn.textContent = "O"
} )

thirdRowfirstColumn.addEventListener("click", function(){
  thirdRowfirstColumn.textContent = "X"
})

thirdRowfirstColumn.addEventListener( "dblclick", function(){
  thirdRowfirstColumn.textContent = "O"
} )

firstRowSecoandColumn.addEventListener("click", function(){
  firstRowSecoandColumn.textContent = "X"
})

firstRowSecoandColumn.addEventListener( "dblclick", function(){
  firstRowSecoandColumn.textContent = "O"
} )

secoandRowSecoandColumn.addEventListener("click", function(){
  secoandRowSecoandColumn.textContent = "X"
})

secoandRowSecoandColumn.addEventListener( "dblclick", function(){
  secoandRowSecoandColumn.textContent = "O"
} )

thirdRowSecondColumn.addEventListener("click", function(){
  thirdRowSecondColumn.textContent = "X"
})

thirdRowSecondColumn.addEventListener( "dblclick", function(){
  thirdRowSecondColumn.textContent = "O"
} )


firstRowThirdColumn.addEventListener("click", function(){
  firstRowThirdColumn.textContent = "X"
})

firstRowThirdColumn.addEventListener( "dblclick", function(){
  firstRowThirdColumn.textContent = "O"
} )

secoandRowThirdColumn.addEventListener("click", function(){
  secoandRowThirdColumn.textContent = "X"
})

secoandRowThirdColumn.addEventListener( "dblclick", function(){
  secoandRowThirdColumn.textContent = "O"
} )

thirdRowThirdColumn.addEventListener("click", function(){
  thirdRowThirdColumn.textContent = "X"
})

thirdRowThirdColumn.addEventListener( "dblclick", function(){
  thirdRowThirdColumn.textContent = "O"
})



// var rows = ['first', 'second', 'third']
// var columns = [ 'First', 'Secoand', 'Third' ]
//
// console.log(typeof(JSON.parse('Hello')))
//
//
// function nameGenerator(){
//   for (var i = 0; i< rows.length; i++){
//     for (var j = 0; j < columns.length; j++){
//       String(rows[i]+'Row'+columns[j]+'Column').addEventListener("click", function(){
//         String(rows[i]+'Row'+columns[j]+'Column').textContent = "X"
//       })
//     }
//   }
// }
//
// nameGenerator();





document.addEventListener('click',winnerChecker );
document.addEventListener('dblclick',winnerChecker );

function winnerChecker(){
  if (firstRowFirstColumn.textContent == "X" && firstRowSecoandColumn.textContent == "X"  && firstRowThirdColumn.textContent == "X"){
    displayMessage("1");
  }
  else if( secoandRowFirstColumn.textContent == "X" && secoandRowSecoandColumn.textContent == "X" && secoandRowThirdColumn.textContent == "X" ){
    displayMessage("1");
  }
  else if ( thirdRowfirstColumn.textContent == "X" && thirdRowSecondColumn.textContent == "X" && thirdRowThirdColumn.textContent == "X" ){
    displayMessage("1");
  }

  if (firstRowFirstColumn.textContent == "X" && secoandRowFirstColumn.textContent == "X"  && thirdRowfirstColumn.textContent == "X"){
    displayMessage("1");
  }
  else if( secoandRowSecoandColumn.textContent == "X" && firstRowSecoandColumn.textContent == "X" && thirdRowSecondColumn.textContent == "X" ){
    displayMessage("1");
  }
  else if ( firstRowThirdColumn.textContent == "X" && secoandRowThirdColumn.textContent == "X" && thirdRowThirdColumn.textContent == "X" ){
    displayMessage("1");
  }

  if (firstRowFirstColumn.textContent == "O" && secoandRowFirstColumn.textContent == "O"  && thirdRowfirstColumn.textContent == "O"){
    displayMessage("2");
  }
  else if( secoandRowSecoandColumn.textContent == "O" && firstRowSecoandColumn.textContent == "O" && thirdRowSecondColumn.textContent == "O" ){
    displayMessage("2");
  }
  else if ( firstRowThirdColumn.textContent == "O" && secoandRowThirdColumn.textContent == "O" && thirdRowThirdColumn.textContent == "O" ){
    displayMessage("2");
  }

  else if ( firstRowFirstColumn.textContent == "X" && secoandRowSecoandColumn.textContent == "X" && thirdRowThirdColumn.textContent == "X" ){
    displayMessage("1");
  }
  else if ( firstRowThirdColumn.textContent == "X" && secoandRowSecoandColumn.textContent == "X" && thirdRowfirstColumn.textContent == "X" ){
    displayMessage("1");
  }
  else if (firstRowFirstColumn.textContent == "O" && firstRowSecoandColumn.textContent == "O"  && firstRowThirdColumn.textContent == "O"){
    displayMessage("2");
  }
  else if( secoandRowFirstColumn.textContent == "O" && secoandRowSecoandColumn.textContent == "O" && secoandRowThirdColumn.textContent == "O" ){
    displayMessage("2");
  }
  else if ( thirdRowfirstColumn.textContent == "O" && thirdRowSecondColumn.textContent == "O" && thirdRowThirdColumn.textContent == "O" ){
    displayMessage("2");
  }
  else if ( firstRowFirstColumn.textContent == "O" && secoandRowSecoandColumn.textContent == "O" && thirdRowThirdColumn.textContent == "O" ){
    displayMessage("2");
  }
  else if ( firstRowThirdColumn.textContent == "O" && secoandRowSecoandColumn.textContent == "O" && thirdRowfirstColumn.textContent == "O" ){
    displayMessage("2");
  }
}

function displayMessage(x){
  message = "Player "+x+" Wins. ";
  document.querySelector("#winner").textContent = message;
}


//clear funciton
var restart = document.querySelector("#b");

var squares = document.querySelectorAll('td');

function clearBoard(){
  for (var i = 0; i < squares.length; i++){
    squares[i].textContent = '';
  }
  document.querySelector("#winner").textContent = "";
}

restart.addEventListener( "click", clearBoard );
