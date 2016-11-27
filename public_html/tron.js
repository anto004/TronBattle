/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var board = [];
for(var i=0; i<20; i++){
    board[i] =  new Array(30);
    for(var j=0; j<30; j++)
        board[i][j] = 0;
    }
// game loop
while (true) {
    var inputs = readline().split(' ');
    var N = parseInt(inputs[0]); // total number of players (2 to 4).
    var P = parseInt(inputs[1]); // your player number (0 to 3).
    for (var i = 0; i < N; i++) {
        var inputs = readline().split(' ');
        var X0 = parseInt(inputs[0]); // starting X coordinate of lightcycle (or -1)
        
        var Y0 = parseInt(inputs[1]); // starting Y coordinate of lightcycle (or -1)
        
        var X1 = parseInt(inputs[2]); // starting X coordinate of lightcycle (can be the same as X0 if you play before this player)
        
        var Y1 = parseInt(inputs[3]); // starting Y coordinate of lightcycle (can be the same as Y0 if you play before this player)
        
        //printErr('X0 '+ X0 + 'Y0 '+ Y0);
        printErr('X1 '+ X1 + 'Y1 '+ Y1);
        debugBoard(X0,Y0,X1,Y1);

    }

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print('LEFT');// A single line with UP, DOWN, LEFT or RIGHT
}

function debugBoard(X0,Y0,X1,Y1){
    board[Y0][X0] = 1;
    board[Y1][X1] = 1;
    
        for(var i=0; i<20; i++){
        printErr(board[i]);
        }
    }
