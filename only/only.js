const BORDEER_SIZE = 8;

let a
function clicked(e) {

  e.classList.add('click');
  if (a != undefined) { a.classList.remove('click') }
  a = e

}

// function PutBlackRook(cell) {
//   let rook = document.createElement("img");
//   rook.src = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
//   cell.appendChild(rook);
// }
// function PutBlackknight(cell) {
//   let knight = document.createElement("img");
//   knight.src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
//   cell.appendChild(knight);
// }
// function PutBlackBishop(cell) {
//   let Bishop = document.createElement("img");
//   Bishop.src = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
//   cell.appendChild(Bishop);
// }


// function PutBlackQueen(cell) {
//   let Queen = document.createElement("img");
//   Queen.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
//   cell.appendChild(Queen);
// }
// function PutBlackKing(cell) {
//   let King = document.createElement("img");
//   King.src = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
//   cell.appendChild(King);
// }

// function PutBlackpawn(cell) {
//   let pawn = document.createElement("img");
//   pawn.src = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
//   cell.appendChild(pawn);
// }

// function PutwhiteRook(cell) {
//   let rook = document.createElement("img");
//   rook.src = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
//   cell.appendChild(rook);
// }
// function Putwhiteknight(cell) {
//   let knight = document.createElement("img");
//   knight.src = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"
//   cell.appendChild(knight);
// }
// function PutwhiteBishop(cell) {
//   let Bishop = document.createElement("img");
//   Bishop.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
//   cell.appendChild(Bishop);
// }


function PutwhiteQueen(cell) {
  let Queen = document.createElement("img");
  Queen.src = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
  cell.appendChild(Queen);
}
function PutwhiteKing(cell) {
  let King = document.createElement("img");
  King.src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
  cell.appendChild(King);
}

function Putwhitepawn(cell) {
  let pawn = document.createElement("img");
  pawn.src = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
  cell.appendChild(pawn);
}
class piece {
  constructor(row, cell, type, color, src) {
    this.row = row
    this.cell = cell
    this.type = type
    this.type = type
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

}

function creatpis() {
  const pieceArr = []
  pieceArr.push(new piece(0, 0, 'Rook', 'dark', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg'))
  pieceArr.push(new piece(0, 7, 'Rook', 'dark', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg'))
  pieceArr.push(new piece(7, 7, 'Rook', 'white', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'))
  pieceArr.push(new piece(7, 0, 'Rook', 'white', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'))
  pieceArr.push(new piece(0, 1, 'Knight', 'black', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg'))
  pieceArr.push(new piece(0, 6, 'Knight', 'black', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg'))
  pieceArr.push(new piece(7, 6, 'Knight', 'white', 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'))
  pieceArr.push(new piece(7, 1, 'Knight', 'white', 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'))
  pieceArr.push(new piece(0, 2, 'Bishop', 'black', 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg'))
  pieceArr.push(new piece(0, 5, 'Bishop', 'black', 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg'))
  pieceArr.push(new piece(7, 2, 'Bishop', 'white', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'))
  pieceArr.push(new piece(7, 5, 'Bishop', 'white', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'))
  pieceArr.push(new piece(0, 3, 'Queen', 'black', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg'))
  pieceArr.push(new piece(7, 3, 'Queen', 'white', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'))
  pieceArr.push(new piece(0, 4, 'King', 'black', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'))
  pieceArr.push(new piece(7, 4, 'King', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg'))

  pieceArr.push(new piece(1, 0, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'))
  pieceArr.push(new piece(1, 1, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'))
  pieceArr.push(new piece(1, 2, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'))
  pieceArr.push(new piece(1, 3, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'))
  pieceArr.push(new piece(1, 4, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'))
  pieceArr.push(new piece(1, 5, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'))
  pieceArr.push(new piece(1, 6, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'))
  pieceArr.push(new piece(1, 7, 'Pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'))

  pieceArr.push(new piece(6, 0, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'))
  pieceArr.push(new piece(6, 1, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'))
  pieceArr.push(new piece(6, 2, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'))
  pieceArr.push(new piece(6, 3, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'))
  pieceArr.push(new piece(6, 4, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'))
  pieceArr.push(new piece(6, 5, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'))
  pieceArr.push(new piece(6, 6, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'))
  pieceArr.push(new piece(6, 7, 'Pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'))




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

      // if (i == 0 && (j == 0 || j == 7)) { PutBlackRook(cell) };
      // if (i == 0 && (j == 1 || j == 6)) { PutBlackknight(cell) };
      // if (i == 0 && (j == 2 || j == 5)) { PutBlackBishop(cell) };
      // if (i == 0 && j == 3) { PutBlackQueen(cell) };
      // if (i == 0 && j == 4) { PutBlackKing(cell) };
      // if (i == 1) { PutBlackpawn(cell) };

      // if (i === 6) { Putwhitepawn(cell) };
      // if (i === 7 && (j === 0 || j === 7)) { PutwhiteRook(cell) };
      // if (i === 7 && (j === 1 || j === 6)) { Putwhiteknight(cell) };
      // if (i === 7 && (j === 2 || j === 5)) { PutwhiteBishop(cell) };
      // if (i === 7 && j === 3) { PutwhiteQueen(cell) };
      // if (i === 7 && j === 4) { PutwhiteKing(cell) };

      if ((i + j) % 2 == 0) {
        cell.className = 'w'
      }
      else { cell.className = 'b' }
    }
  }


}
window.addEventListener('load', () => {
  chess()
  creatpis()

})














































