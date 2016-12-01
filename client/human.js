
var me = 0;
var cells = [];
var player1;
var player2;
var cellsWidth;
var cellsHeight;

var createGrid = function(config) {
    /**
     * TODO : écrire le code pour initialiser la grille de jeu en HTML.
     * Vous pouvez utiliser l'API de grille qui était fourni avec le TP1 :
     *
     *     Grid.create(width, height)
     *     Grid.colorCell(x, y, color)
     *
     * Ou vous pouvez décider de générer votre propre rendu directement en
     * HTML en jouant avec le DOM comme vu en classe.
     * Soyez créatifs, l'important est d'avoir quelque chose de joli !
     *
     * Chaque joueur devrait avoir sa propre couleur, qui devrait être
     * différente de la couleur des obstacles.

    Grid.create(width, height);
    */
    cellsWidth = config.w;
    cellsHeight = config.h;
    me = config.me;
    player1 = config.players[0];
    player2 = config.players[1];

    createMatrix(cellsWidth, cellsHeight);
    Grid.create(cellsHeight, cellsWidth);

    for(var i = 0; i < config.obstacles.length; i++){
      afficherObstacles(config.obstacles[i].x, config.obstacles[i].y,
                        config.obstacles[i].w, config.obstacles[i].h,
                        cellsHeight, cellsWidth);
    }

    Grid.colorCell(player1.x, player1.y, 'blue');
    cells[player1.x][player1.y] = '1';
    Grid.colorCell(player2.x, player2.y, 'red');
    cells[player2.x][player2.y] = '2';

};

/**
 * direction peut prendre les valeurs :
 * 'u' (up    => haut)
 * 'd' (down  => bas)
 * 'l' (left  => gauche)
 * 'r' (right => droite)
 */
var direction = 'u';

var nextMove = function(previousMoves) {
    /**
     * TODO : mettre à jour la grille de jeu affichée selon les positions
     * des joueurs indiquées dans l'enregistrement `previousMoves`.
     */
    console.log(previousMoves);
    /**
     * Note : ne modifiez pas cette ligne, ni le contenu de la variable
     * `direction` depuis cette fonction. Cette variable devrait être
     * modifiée uniquement par le code plus bas, lorsque l'utilisateur
     * a appuyé sur une touche du clavier.
    */

    return direction;
};

var victory = function(winner) {
    /**
     * TODO : mettre à jour la grille en indiquant d'une couleur différente
     * le/les joueurs morts.
     */
     var m = Math.floor(cellsWidth/2);
     var n = Math.floor(cellsHeight/2);

     console.log(winner);

     var gagnant = function(){

       Grid.colorCell(m-13, n-2, 'white'); Grid.colorCell(m-13, n-1, 'white'); Grid.colorCell(m-13, n, 'white');
       Grid.colorCell(m-13, n+1, 'white'); Grid.colorCell(m-13, n+2, 'white'); Grid.colorCell(m-12, n-2, 'white');
       Grid.colorCell(m-12, n, 'white'); Grid.colorCell(m-11, n-2, 'white'); Grid.colorCell(m-11, n-1, 'white');
       Grid.colorCell(m-11, n, 'white'); Grid.colorCell(m-4, n-2, 'white'); Grid.colorCell(m-4, n-1, 'white');
       Grid.colorCell(m-4, n, 'white'); Grid.colorCell(m-4, n+1, 'white'); Grid.colorCell(m-3, n+2, 'white');
       Grid.colorCell(m-2, n-1, 'white'); Grid.colorCell(m-2, n, 'white'); Grid.colorCell(m-2, n+1, 'white');
       Grid.colorCell(m-1, n+2, 'white'); Grid.colorCell(m, n-2, 'white'); Grid.colorCell(m, n-1, 'white');
       Grid.colorCell(m, n, 'white'); Grid.colorCell(m, n+1, 'white'); Grid.colorCell(m+2, n-2, 'white');
       Grid.colorCell(m+2, n+2, 'white'); Grid.colorCell(m+3, n-2, 'white'); Grid.colorCell(m+3, n-1, 'white');
       Grid.colorCell(m+3, n, 'white'); Grid.colorCell(m+3, n+1, 'white'); Grid.colorCell(m+3, n+2, 'white');
       Grid.colorCell(m+4, n-2, 'white'); Grid.colorCell(m+4, n+2, 'white'); Grid.colorCell(m+6, n-2, 'white');
       Grid.colorCell(m+6, n-1, 'white'); Grid.colorCell(m+6, n, 'white'); Grid.colorCell(m+6, n+1, 'white');
       Grid.colorCell(m+6, n+2, 'white'); Grid.colorCell(m+7, n, 'white'); Grid.colorCell(m+8, n+1, 'white');
       Grid.colorCell(m+9, n-2, 'white'); Grid.colorCell(m+9, n-1, 'white'); Grid.colorCell(m+9, n, 'white');
       Grid.colorCell(m+9, n+1, 'white'); Grid.colorCell(m+9, n+2, 'white'); Grid.colorCell(m+11, n-1, 'white');
       Grid.colorCell(m+11, n+2, 'white'); Grid.colorCell(m+12, n-2, 'white'); Grid.colorCell(m+12, n, 'white');
       Grid.colorCell(m+12, n+2, 'white'); Grid.colorCell(m+13, n-2, 'white'); Grid.colorCell(m+13, n+1, 'white');

     };

     var perdant = function(joueur){


       for(var y = 0; y < cellsWidth; y++){

         for(var z = 0; z < cellsHeight; z++){

           if(cells[y][z] == joueur){

             Grid.colorCell(y, z, 'gray');
           }
         }
       }
     }

     if(winner == 1){

       Grid.colorCell(m-9, n-1, 'white'); Grid.colorCell(m-9, n+2, 'white'); Grid.colorCell(m-8, n-2, 'white');
       Grid.colorCell(m-8, n-1, 'white'); Grid.colorCell(m-8, n, 'white'); Grid.colorCell(m-8, n+1, 'white');
       Grid.colorCell(m-8, n+2, 'white'); Grid.colorCell(m-7, n+2, 'white');
       Grid.colorCell(player2.x, player2.y, 'gray');

       perdant(winner+1);
       gagnant();
     }
     else if(winner == 2){

       Grid.colorCell(m-9, n-2, 'white'); Grid.colorCell(m-9, n+2, 'white'); Grid.colorCell(m-8, n-2, 'white');
       Grid.colorCell(m-8, n+1, 'white'); Grid.colorCell(m-8, n+2, 'white'); Grid.colorCell(m-7, n-1, 'white');
       Grid.colorCell(m-7, n, 'white'); Grid.colorCell(m-7, n+2, 'white');
       Grid.colorCell(player1.x, player1.y, 'gray');

       perdant(winner-1);
       gagnant();
     }
     else{

       Grid.colorCell(m-8, n-2, 'white'); Grid.colorCell(m-8, n-1, 'white'); Grid.colorCell(m-8, n, 'white');
       Grid.colorCell(m-8, n+1, 'white'); Grid.colorCell(m-8, n+2, 'white'); Grid.colorCell(m-7, n-2, 'white');
       Grid.colorCell(m-7, n+2, 'white'); Grid.colorCell(m-6, n-1, 'white'); Grid.colorCell(m-6, n, 'white');
       Grid.colorCell(m-6, n+1, 'white'); Grid.colorCell(m-4, n-2, 'white'); Grid.colorCell(m-4, n-1, 'white');
       Grid.colorCell(m-4, n, 'white'); Grid.colorCell(m-4, n+1, 'white'); Grid.colorCell(m-4, n+2, 'white');
       Grid.colorCell(m-3, n-2, 'white'); Grid.colorCell(m-3, n, 'white'); Grid.colorCell(m-2, n-1, 'white');
       Grid.colorCell(m-2, n+1, 'white'); Grid.colorCell(m-2, n+2, 'white'); Grid.colorCell(m, n-1, 'white');
       Grid.colorCell(m, n, 'white'); Grid.colorCell(m, n+1, 'white'); Grid.colorCell(m, n+2, 'white');
       Grid.colorCell(m+1, n-2, 'white'); Grid.colorCell(m+1, n, 'white'); Grid.colorCell(m+2, n-1, 'white');
       Grid.colorCell(m+2, n, 'white'); Grid.colorCell(m+2, n+1, 'white'); Grid.colorCell(m+2, n+2, 'white');
       Grid.colorCell(m+4, n-2, 'white'); Grid.colorCell(m+4, n-1, 'white'); Grid.colorCell(m+4, n, 'white');
       Grid.colorCell(m+4, n+1, 'white'); Grid.colorCell(m+5, n+2, 'white'); Grid.colorCell(m+6, n+1, 'white');
       Grid.colorCell(m+7, n+2, 'white'); Grid.colorCell(m+8, n-2, 'white'); Grid.colorCell(m+8, n-1, 'white');
       Grid.colorCell(m+8, n, 'white'); Grid.colorCell(m+8, n+1, 'white');
     }
};

/**
 * TODO : capturer les événements du clavier et ajuster `direction`
 * en conséquence.
*/
document.addEventListener('keypress', function(evenement) {
    /* regardez ce que contient la variable d'événement dans la console
     * pour déterminer quelle touche a été appuyée
     */

    console.log(evenement);

    /**
     * Selon la touche sur laquelle on a appuyé, modifiez la variable
     * `direction` qui sera retournée la prochaine fois que le serveur
     * demandera quelle direction prendre.
     */

    switch(evenement.key) {

    case 'w':

	direction = 'u';
	break;

    case 's':

	direction = 'd';
	break;

    case 'd':

	direction = 'r';
	break;

    case 'a':

	direction = 'l';
	break;

    }
});

/**
 * direction peut prendre les valeurs :
 * 'u' (up    => haut)
 * 'd' (down  => bas)
 * 'l' (left  => gauche)
 * 'r' (right => droite)
 */
var direction = 'u';

var nextMove = function(previousMoves) {
    /**
     * TODO : mettre à jour la grille de jeu affichée selon les positions
     * des joueurs indiquées dans l'enregistrement `previousMoves`.
     */
    /**
     * Note : ne modifiez pas cette ligne, ni le contenu de la variable
     * `direction` depuis cette fonction. Cette variable devrait être
     * modifiée uniquement par le code plus bas, lorsque l'utilisateur
     * a appuyé sur une touche du clavier.
     */

    if(previousMoves.length == 2) {
	updatePlayer(player1, previousMoves[0]);
	updatePlayer(player2, previousMoves[1]);
    }

    return direction;
};

var createMatrix = function(width, height){

  for(var i = 0; i < width; i++) {

    cells[i] = Array(height);
  }

  fill(cells, " ");
  return cells;
}

var afficherObstacles = function(x, y, width, height, limiteW, limiteH){

  for(var k = 0; k < width; k++){

    for(var l = 0; l < height; l++){

      if(x+k >= 0 && y+l >= 0 && x+k < limiteH && y+l < limiteW){
        cells[x+k][y+l] = '#';
        if(k == 0 || l == 0){

          Grid.colorCell(x+k, y+l, 'firebrick');
        }
        else{

          Grid.colorCell(x+k, y+l, 'maroon');
        }
      }
    }
  } return cells;
};

var updatePlayer = function(player, previousMove) {


    var color = "blue";
    var x = player.x;
    var y = player.y;

    if(player.id == 2) {

	color = "red";

    }


    switch(previousMove.direction) {

    case 'u':

	y--;
	break;

    case 'd':

	y++;
	break;

    case 'l':

	x--;
	break;

    case 'r':

	x++;
	break;

    }

    player.x = x;
    player.y = y;
    cells[player.x][player.y] = "" + player.id;
    Grid.colorCell(x, y, color);

}

var printMatrix = function(matrix) {

    var text = "";

    for(var y = 0; y < matrix[0].length; y++) {

	for(var x = 0; x < matrix.length; x++) {

	    text += matrix[x][y];

	}

	text += "\n";

    }

    console.log(text);

};

var fill = function(matrix, value) {

  for(var i = 0; i < matrix.length; i++) {

    for(var j = 0; j < matrix[i].length; j++) {

      matrix[i][j] = value;
      Grid.colorCell(i, j, 'black');

    }

  }

};
