var playernum = 2;
var winnernum = 0;

var tab = document.getElementById("tableau");
var cells = tab.getElementsByTagName("td");


//////////////////////////////////////////////////////////////
for(var i=0; i<cells.length; i++)
{
  // ajouter un événement onclick sur chaque cellule
  cells[i].onclick = clickCell;

  // initialiser chaque cellule avec une classe neutre
  cells[i].className = "noplayer";

  // associer une variable à chaque cellule, pour mémoriser son état :
  cells[i].state = 0;
    // state=0 => case vide, pas jouée
    // state=1 => case tenue par le joueur1
    // state=2 => case tenue par le joueur2
}



//////////////////////////////////////////////////////////////
function clickCell(e)
{
  // console.log(e.target.parentNode.rowIndex+" "+e.target.cellIndex+" "+e.target.id);
  // console.log("e.target.state = "+e.target.state);


  // e.target représente la cellule cliquée :
  if(e.target.state != 0){
    // la case a déjà été jouée, ne pas exécuter la suite du code :
    return;
  }

  if(playernum==1)
  {
    // le dernier joueur était player1, changer pour player2 :
    playernum = 2;
    e.target.className = "player2";
    e.target.state = 2;
  }
  else
  {
    // le dernier joueur était player2, changer pour player1 :
    playernum = 1;
    e.target.className = "player1";
    e.target.state = 1;
  }

  checkGrid();

}



//***********************************************//
//        Vérifier si un joueur a gagné          //
//***********************************************//
function checkGrid(){
  // check row 0 :
  if(cells[0].state!=0 && cells[0].state==cells[1].state && cells[1].state==cells[2].state){
    alertWinner();
  }
  // check row 1 :
  else if(cells[3].state!=0 && cells[3].state==cells[4].state && cells[4].state==cells[5].state){
    alertWinner();
  }
  // check row 2 :
  else if(cells[6].state!=0 && cells[6].state==cells[7].state && cells[7].state==cells[8].state){
    alertWinner();
  }
  // check column 0 :
  else if(cells[0].state!=0 && cells[0].state==cells[3].state && cells[3].state==cells[6].state){
    alertWinner();
  }
  // check column 1 :
  else if(cells[1].state!=0 && cells[1].state==cells[4].state && cells[4].state==cells[7].state){
    alertWinner();
  }
  // check column 2 :
  else if(cells[2].state!=0 && cells[2].state==cells[5].state && cells[5].state==cells[8].state){
    alertWinner();
  }
  // check diagonal left to right :
  else if(cells[0].state!=0 && cells[0].state==cells[4].state && cells[4].state==cells[8].state){
    alertWinner();
  }
  // check diagonal right to left :
  else if(cells[2].state!=0 && cells[2].state==cells[4].state && cells[4].state==cells[6].state){
    alertWinner();
  }
  else if(allCellsPlayed()){
    alertNul();
  }
}

function alertWinner(){
  alert("The winner is : player "+playernum);
  setTimeout(reset,500);// appeler la fonction 'reset' dans 500ms
}

function alertNul(){
  alert('Match nul');
  setTimeout(reset,500);// appeler la fonction 'reset' dans 500ms
}

// Vérifier si toutes les cases ont été jouées,
// retourner 'true' si c'est le cas
function allCellsPlayed()
{
  // console.log('checking allCellsPlayed');
  for(var i=0; i<cells.length; i++){
    if(cells[i].state==0){
      return false;
    }
  }
  return true;
}

function reset(){
  for(var i=0; i<cells.length; i++){
    cells[i].className = "noplayer";
    cells[i].state = 0;
  }
}
