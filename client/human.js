
var me = 0;                                                   // ID du joueur
var cells = [];                                               // Grille pour permettre le déroulement du jeu
var player1;                                                  // configurations du joueur1
var player2;                                                  // configurations du joueur2
var cellsWidth;                                               // largeur de la grille
var cellsHeight;                                              // hauteur de la grille

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
    cellsWidth = config.w;                                              // stock la largeur de la grille dans une variable
    cellsHeight = config.h;                                             // stock la hauteur
    me = config.me;                                                     // stock le ID du joueur
    player1 = config.players[0];                                        // stock les configs du joueur 1
    player2 = config.players[1];                                        // stock les configs du joueur 2

    createMatrix(cellsWidth, cellsHeight);                              // créé une matrice qui aidera pour le visuel
    Grid.create(cellsHeight, cellsWidth);                               // créé la grille qu'on voit

    // cette boucle for fera afficher les obstacles sur la grille
    for(var i = 0; i < config.obstacles.length; i++){
      afficherObstacles(config.obstacles[i].x, config.obstacles[i].y,
                        config.obstacles[i].w, config.obstacles[i].h,
                        cellsHeight, cellsWidth);
    }

    // on fait afficher la position initiale des joueurs
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

// fonction qui affichera le joueur gagnant à la fin d'une partie, ainsi que
// changer la couleur du perdant pour gris.
var victory = function(winner) {

     // la variable m servira à centrer le texte de victoire au tableau.
     // Par défaut, m est le centre de la grille en largeur.
     // Puisque la variable m sera appelée énormément de fois pour servir de position X,
     // il a été préférable de raccourcir son nom de variable, plutôt qu'à
     // un nom de variable du style "milieuDeGrilleEnLargeur".
     var m = Math.floor(cellsWidth/2);

     // Si joueur1 gagne
     if(winner == 1){

       perdant(winner+1);             // on met le perdant en gris
       gagnant(m);                     // on affiche le texte "P  WINS"
       pwins("25", m-9); pwins("12345", m-8); pwins("5", m-7); // codage pour mettre le "1" dans "P1 WINS"

     }
     // Si joueur2 gagne
     else if(winner == 2){

       perdant(winner-1);             // on met le perdant en gris
       gagnant(m);                     // on affiche le texte "P  WINS"
       pwins("25", m-9); pwins("145", m-8); pwins("235", m-7); // affiche le "2"

     }
     // S'il y a égalité
     else{

       // les deux joueurs sont perdants
       perdant(1);
       perdant(2);

       // lignes de code pour écrire "DRAW" si les deux joueurs sont mort en même temps
       pwins("12345", m-8); pwins("15", m-7); pwins("234", m-6);
       pwins("12345", m-4); pwins("13", m-3); pwins("245", m-2);
       pwins("2345", m); pwins("13", m+1); pwins("2345", m+2);
       pwins("1234", m+4); pwins("5", m+5); pwins("234", m+6);
       pwins("5", m+7); pwins("1234", m+8);

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

// fonction qui créé la matrice cells pour
var createMatrix = function(width, height){

  for(var i = 0; i < width; i++) {

    cells[i] = Array(height);
  }

  fill(cells, " ");                     // chaque nouvelle cellule est remplie d'espace vide
  return cells;
}

// fonction qui affiche les obstacles à l'écran et ajoute un '#' dans la grille cells.
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

// fonction qui remplie la matrice d'une valeur en particulier.
var fill = function(matrix, value) {

  for(var i = 0; i < matrix.length; i++) {

    for(var j = 0; j < matrix[i].length; j++) {

      matrix[i][j] = value;
    }

  }

};

/* la fonction pwins colorie les cases blanches "P  WINS" lorqu'un joueur gagne.
 * Petite explication sur le fonctionnement de la fonction: On fait appel à
 * la fonction p("134", m-7). La variable m est le centre de la grille en largeur
 * donc les fonctions pwins seront appelées de m-x à m+x pour que le texte soit
 * centré. le string "134" est en fait la position Y des cases à mettre en blanc.
 * Donc ici on aura trois cases blanches. Si m = 15, les 3 cases colorées
 * seront les cases (x,y) = (8,1), (8,3) et (8,4). */
var pwins = function(casesAColorer, positionX){

  for(var y = 0; y < casesAColorer.length; y++){

    Grid.colorCell(positionX, casesAColorer.charAt(y), 'white')
  }
}

// La fonction gagnant fait afficher le "P  WINS" lorsqu'on a un gagnant.
// La fonction fait appel à la fonction pwins pour éviter les redondances
var gagnant = function(m){

  pwins("12345", m-13); pwins("13", m-12); pwins("123", m-11);
  pwins("1234", m-4); pwins("5", m-3); pwins("234", m-2);
  pwins("5", m-1); pwins("1234", m); pwins("15", m+2);
  pwins("12345", m+3); pwins("15", m+4); pwins("12345", m+6);
  pwins("3", m+7); pwins("4", m+8); pwins("12345", m+9);
  pwins("25", m+11); pwins("135", m+12); pwins("14", m+13);

};

// La fonction perdant met en gris toutes les cellules jouées par le joueur qui a perdu
var perdant = function(joueur){

  for(var y = 0; y < cellsWidth; y++){

    for(var z = 0; z < cellsHeight; z++){

      if(cells[y][z] == joueur){

        Grid.colorCell(y, z, 'gray');
      }
    }
  }
}
