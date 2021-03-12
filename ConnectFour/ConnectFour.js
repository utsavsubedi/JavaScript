
N = 7
$(".mainSpace").append( circleCreator(N) )


function circleCreator(N){
  something = ""
  for (var i = 0; i < N; i++){
    something = something+"<div class = 'playSpace'>"
    for (var j = 0; j<N; j++){
      something = something+"<div class = 'circle'></div>"
    }
    something = something+"</div>"
  }
  return something
}


var i = N - 1
var j = N - 1
var k = N - 1
var l = N - 1
var m = N - 1
var n = N - 1
var o = N - 1

var turn = 'player1'

$(".circle").on('click', function(){
  if (turn == 'player1'){
    turn = 'player2'
    kolor = 'Coral'
  }
  else{
    turn = 'player1'
    kolor = 'Chartreuse'
  }
  console.log(turn)


var index = $(this).index()
// console.log(index)
if ( index == 0 ){
  $('.circle').eq(index + 7 * i).css('background-color', kolor)
  i = i - 1
}
else if (index == 1){
  $('.circle').eq(index + 7 * j).css('background-color', kolor)
  j = j - 1
}
else if (index == 2){
  $('.circle').eq(index + 7 * k).css('background-color', kolor)
  k = k - 1
}
else if (index == 3){
  $('.circle').eq(index + 7 * l).css('background-color', kolor)
  l = l - 1
}
else if (index == 4){
  $('.circle').eq(index + 7 * m).css('background-color', kolor)
  m = m - 1
}
else if (index == 5){
  $('.circle').eq(index + 7 * n).css('background-color', kolor)
  n = n - 1
}
else if (index == 6){
  $('.circle').eq(index + 7 * o).css('background-color', kolor)
  o = o - 1
}

gameStatus()

})




function returnColor(circleNum){
  // console.log($(".circle").eq(circleNum).css('background-color'))
  return $(".circle").eq(circleNum).css('background-color')
}

function colorMatchCheck(one, two, three, four){

  return ( (one ==  two) && (two == three) &&  (three == four) && (one != "rgb(173, 216, 230)") && (one != undefined) )

}


function verticalWinCheck(){
  for(var i = 0; i< 7; i++ ){
    for (var j = 0; j<4; j++){

      if ( colorMatchCheck(returnColor(i+7*(j)), returnColor(i+7*(j+1)), returnColor(i+7*(j+2)), returnColor(i+7*(j+3)) ) ){
        console.log('Vertical Match')
        return true
      }
      else{
        continue
      }

    }
  }
}

function horizontalWinCheck(){
  for(var i = 0; i< 7; i++ ){
    for (var j = 0; j<4; j++){
      // console.log(colorMatchCheck(returnColor(i+j) , returnColor(i+1+j), returnColor(i+2+j), returnColor(i+3+j) ))
      if ( colorMatchCheck(returnColor((i*7)+(j)) , returnColor((i*7)+(1+j)), returnColor((i*7)+(2+j)), returnColor((i*7)+(3+j)) ) ){
        console.log('Horizontal Match')
        return true
      }
      else{
        continue
      }

    }
  }
}

function diagonalWinCheck(){
  for (var i = 0; i<4; i++){
    for (var j = 0; j<5; j++){
      //left diagonal checker
        if ( colorMatchCheck(returnColor(8*j) , returnColor(8*(1+j)), returnColor(8*(2+j)), returnColor(8*(3+j)) ) ){
          console.log('Diagonal left Match')
          return true
        }

        if ( colorMatchCheck(returnColor(8*j + j) , returnColor(8*(1+j) + j), returnColor(8*(2+j) + j), returnColor(8*(3+j) + j) ) ){
          console.log('Diagonal left Match')
          return true
        }

        if ( colorMatchCheck(returnColor(8*j - j) , returnColor(8*(1+j) - j), returnColor(8*(2+j) - j), returnColor(8*(3+j) - j) ) ){
          console.log('Diagonal left Match')
          return true
        }

      //right diagonal checker
      if ( colorMatchCheck(returnColor(6*(j+1)) , returnColor(6*(2+j)), returnColor(6*(3+j)), returnColor(6*(4+j)) ) ){
        console.log('Diagonal right Match')
        return true
      }

      if ( colorMatchCheck(returnColor(6*(j+2) + (j+1)) , returnColor(6*(3+j) + (j+1)), returnColor(6*(4+j) + (j+1)), returnColor(6*(5+j) + (j+1)) ) ){
        console.log('Diagonal right Match')
        return true
      }

      if ( colorMatchCheck(returnColor(6*(j+1) - (j+1)) , returnColor(6*(1+j) - (j+1)), returnColor(6*(2+j) - (j+1)), returnColor(6*(3+j) - (j+1) ) )){
        console.log('Diagonal right Match')
        return true
      }
    }
  }
}

function gameStatus(){
  if ( horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck() ){
    console.log("Game Over")
  }
}
