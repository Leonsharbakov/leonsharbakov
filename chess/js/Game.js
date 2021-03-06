class Game {
  constructor(firstPlayer) {
    this.boardData = new BoardData();
    this.currentPlayer = firstPlayer;
    this.winner = undefined;
  }

  tryMove(piece, row, col) {
    const possibleMoves = this.getPossibleMoves(piece);
    for (const possibleMove of possibleMoves) {
      if (possibleMove[0] === row && possibleMove[1] === col) {
        const removedPiece = this.boardData.removePiece(row, col);
        piece.row = row;
        piece.col = col;
        if (removedPiece !== undefined && removedPiece.type === KING) {
          console.log('helooooooooooooooooooooooooooooooooooo')
          this.winner = piece.player;
        }
        this.currentPlayer = piece.getOpponent();
        return true;
      }
    }
    return false;
  }
  getPossibleMoves(piece) {
    if (this.currentPlayer !== piece.player || this.winner !== undefined) {
      console.log('sss')
      return [];
    }
    return piece.getPossibleMoves(this.boardData);
  }
}
