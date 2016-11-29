var tab = document.getElementById("tableau");
var cells = tab.getElementsByTagName("td");
for ( var i=0; i<9; i++){
  cells[i].onclick = clickcell;
  cells[i].className = "noplayer";
}

var player = 1 ;
function clickcell(e){
  if (e.target.className!= "noplayer"){
     return;
   }
  if(player==1){
    e.target.innerHTML = "X";
    e.target.className = "player1";
    win();
    player = 2;


  }

  else
  {
    e.target.innerHTML = "O";
    e.target.className = "player2";
    win();
    player = 1;


  }
}


function win(){
  if (///lignes///
    cells[0].className==("player" + player) &&cells[0].className==cells[1].className && cells[1].className==cells[2].className ||
    cells[3].className==("player" +player)&& cells[3].className==cells[4].className && cells[4].className==cells[5].className ||
    cells[6].className==("player" +player)&& cells[6].className==cells[7].className && cells[7].className==cells[8].className ||
    ////colonnes////
    cells[0].className==("player" + player) &&cells[0].className==cells[3].className && cells[3].className==cells[6].className ||
    cells[1].className==("player" + player) &&cells[1].className==cells[4].className && cells[4].className==cells[7].className ||
    cells[2].className==("player" + player) &&cells[2].className==cells[5].className && cells[5].className==cells[8].className ||
    ////Diagonale ///
    cells[0].className==("player" + player) &&cells[0].className==cells[4].className && cells[4].className==cells[8].className ||
    cells[2].className==("player" + player) &&cells[2].className==cells[4].className && cells[4].className==cells[6].className ){
    document.getElementById('gagnant').innerHTML = "Le joueur "+ player + " a gagné !!";
    document.getElementById('gagnant').style.display = "block";

    for ( var i=0; i<9; i++)
      cells[i].onclick = "";
  }
}
console.log(cells);

 function invisible() {
document.getElementById('gagnant').style.display = "none";
 }

function reset(){
for(i=0; i<9; i++){
  document.getElementById('gagnant').style.display = "none";

  cells[i].className ="noplayer";
  cells[i].innerHTML ="";
  cells[i].onclick = clickcell;
}
}
