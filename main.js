var HanoiGame = function (pegs, discs) {
    this.pegs = pegs;
    this.discs = discs;
    this.board = [];
    this.fullPeg = [];
};

HanoiGame.prototype.initialize = function () {
    this.board = [];
    this.fullPeg = [];
    for(var i = this.discs; i > 0; i--) {
        this.fullPeg.push(i);
    }
    for(var j = 0; j < this.pegs; j++) {
        if(j === 0) {
            this.board.push(this.fullPeg);
        } else {
            this.board.push([]);
        }
    }
};

HanoiGame.prototype.checkWinner = function () {
    this.board.forEach(function (peg, index) {
        if(index != 0 && peg === this.fullPeg) {
            console.log('You have won the round!');
            hanoiGameInstance.initialize();
        }
    });
};

HanoiGame.prototype.moveDisc = function (targetPeg, destinationPeg) {
    targetPeg = this.board[targetPeg - 1];
    destinationPeg = this.board[destinationPeg - 1];

    if (targetPeg[targetPeg.length - 1] > destinationPeg[destinationPeg.length - 1]) {
        console.log('You cannot move a larger disc on to a smaller disc! The board is still: ');
        this.readBoard();
    } else {
        console.log('Your move was successful! The board is now: ');
        destinationPeg.push(targetPeg.pop());
        this.readBoard();
        this.checkWinner();
    }
};

HanoiGame.prototype.readBoard = function () {
    this.board.forEach(function (peg) {
        console.log(`--- ${peg.join(' ')}`);
    });
}

var hanoiGameInstance = new HanoiGame(3, 5);
hanoiGameInstance.initialize();
console.log(hanoiGameInstance.board);
