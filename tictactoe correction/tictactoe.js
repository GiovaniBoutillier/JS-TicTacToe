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
}



//////////////////////////////////////////////////////////////
function clickCell(e)
{
  // console.log(e.target.parentNode.rowIndex+" "+e.target.cellIndex);
  // console.log("e.target.className = "+e.target.className);


  // e.target représente la cellule cliquée :
  if(e.target.className != "noplayer"){
    // la case a déjà été jouée, ne pas exécuter la suite du code :
    return;
  }

  if(playernum==1)
  {
    // le dernier joueur était player1, changer pour player2 :
    playernum = 2;
    e.target.className = "player2";
  }
  else
  {
    // le dernier joueur était player2, changer pour player1 :
    playernum = 1;
    e.target.className = "player1";
  }

  checkGrid();

}



//***********************************************//
//        Vérifier si un joueur a gagné          //
//***********************************************//
function checkGrid(){
  // check row 0 :
  // le test 'cells[0].state!=0' permet de vérifier que la première case a été joué
  if(cells[0].className!="noplayer" && cells[0].className==cells[1].className && cells[1].className==cells[2].className){
    alertWinner();
  } 
  // check row 1 :
  else if(cells[3].className!="noplayer" && cells[3].className==cells[4].className && cells[4].className==cells[5].className){
    alertWinner();
  }
  // check row 2 :
  else if(cells[6].className!="noplayer" && cells[6].className==cells[7].className && cells[7].className==cells[8].className){
    alertWinner();
  }
  // check column 0 :
  else if(cells[0].className!="noplayer" && cells[0].className==cells[3].className && cells[3].className==cells[6].className){
    alertWinner();
  }
  // check column 1 :
  else if(cells[1].className!="noplayer" && cells[1].className==cells[4].className && cells[4].className==cells[7].className){
    alertWinner();
  }
  // check column 2 :
  else if(cells[2].className!="noplayer" && cells[2].className==cells[5].className && cells[5].className==cells[8].className){
    alertWinner();
  }
  // check diagonal left to right :
  else if(cells[0].className!="noplayer" && cells[0].className==cells[4].className && cells[4].className==cells[8].className){
    alertWinner();
  }
  // check diagonal right to left :
  else if(cells[2].className!="noplayer" && cells[2].className==cells[4].className && cells[4].className==cells[6].className){
    alertWinner();
  }
  else if(allCellsPlayed()){
    alertNul();
  }
}

function alertWinner(){
  alert("The winner is : player"+playernum);
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
    if(cells[i].className=="noplayer"){
      return false;
      // Dès qu'une cellule n'a pas été jouée (className=="noplayer"),
      // on sait que la phrase "toutes les cellules sont jouées" est fausse
      // Pas la peine d'aller plus loin, on peut retourner 'false'
      // et arrêter la suite de la boucle 'for'
    }
  }
  // si l'on arrive ici c'est que la condition (cells[i].className=="noplayer")
  // n'a jamais été vérifiée, donc que toutes les cellules ont la classe "player1" ou "player2",
  // donc que toutes les cases ont été jouées => retourner 'true' :
  return true;
}

// réinitialiser toutes les cellules avec la classe "noplayer"
function reset(){
  for(var i=0; i<cells.length; i++){
    cells[i].className = "noplayer";
  }
}
