
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



$('.circle').click( function() {
  for (var i = 0; i<N, i++)
} )

var turn = 'player1'

document.addEventListener('click', function(){

  if (turn === 'player1'){
    turn = 'player2'
  }
  else{
    turn = 'player2'
  }
  console.log(turn)
})
