const BORDEER_SIZE = 8;
let results;
let previousElement;
// TODO: Add ; at end of lines

function cellClicked(element) {
  if (previousElement != undefined) {
    previousElement.classList.remove('click');
  }
  previousElement = element;
  element.classList.add('click');
}

class Piece {
  constructor(row, cell, type, color, src) {
    this.row = row;
    this.cell = cell;
    this.type = type;
    this.color = color
    this.src = src
    this.createPieceElement()
    this.appendPiece()
  }

  createPieceElement() {
    this.img = document.createElement('img')
    this.img.src = this.src
  }

  appendPiece() {
    document.getElementById(this.row + '-' + this.cell).appendChild(this.img)
  }

  getPossibleoleMoves() {
    // TODO: Add support for relative moves
    if (this.type === Rook) { }
    else if (this.type === Knight) { }
    else if (this.type === Bishop) { }
    else if (this.type === Queen) { }
    else if (this.type === King) { }
    else if (this.type === Pawn) { }
    else { console.log("unknown type" + this.type) }
  }

}
class BoardData {
  constructor(pieces) {
    this.pieces = pieces

  }

}



function createPieces() {
  const pieceArr = []
  pieceArr.push(new Piece(0, 0, 'Rook', 'black', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg'))
  pieceArr.push(new Piece(0, 1, 'Knight', 'black', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg'))
  pieceArr.push(new Piece(0, 2, 'Bishop', 'black', 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg'))
  pieceArr.push(new Piece(0, 3, 'Queen', 'black', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg'))
  pieceArr.push(new Piece(0, 4, 'King', 'black', 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg'))
  pieceArr.push(new Piece(0, 5, 'Bishop', 'black', 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg'))
  pieceArr.push(new Piece(0, 6, 'Knight', 'black', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg'))
  pieceArr.push(new Piece(0, 7, 'Rook', 'black', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg'))

  pieceArr.push(new Piece(7, 0, 'Rook', 'white', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'))
  pieceArr.push(new Piece(7, 1, 'Knight', 'white', 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'))
  pieceArr.push(new Piece(7, 2, 'Bishop', 'white', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'))
  pieceArr.push(new Piece(7, 3, 'Queen', 'white', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'))
  pieceArr.push(new Piece(7, 4, 'King', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg'))
  pieceArr.push(new Piece(7, 5, 'Bishop', 'white', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'))
  pieceArr.push(new Piece(7, 6, 'Knight', 'white', 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'))
  pieceArr.push(new Piece(7, 7, 'Rook', 'white', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'))

  for (let A = 0; A < 8; A++) { pieceArr.push(new Piece(1, A, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg')) }
  for (let A = 0; A < 8; A++) { pieceArr.push(new Piece(6, A, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg')) }
  return results;
}



function chess() {
  const table = document.createElement('table');
  table.classList.add('border')
  document.body.appendChild(table);
  for (let i = 0; i < BORDEER_SIZE; i++) {
    const row = table.insertRow();
    for (let j = 0; j < BORDEER_SIZE; j++) {
      const cell = row.insertCell()
      cell.id = i + '-' + j
      cell.setAttribute('onclick', 'clicked(this)')

      if ((i + j) % 2 == 0) {
        cell.className = 'w'
      }
      else { cell.className = 'b' }
    }
  }


}
window.addEventListener('load', () => {
  chess()
  createPieces()

})














































