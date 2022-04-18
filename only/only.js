const BORDEER_SIZE=8;

let a
function  clicked(e){

  e.classList.add('click');
  if(a!=undefined){a.classList.remove('click')}
  a=e
  
}

function PutBlackRook(cell)
{
  let rook = document.createElement("img");
  rook.src = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
  cell.appendChild(rook);
}
function PutBlackknight(cell)
{
  let knight = document.createElement("img");
  knight.src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
  cell.appendChild(knight);h
}
function PutBlackBishop(cell)
{
  let Bishop = document.createElement("img");
  Bishop.src = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
  cell.appendChild(Bishop);
}


  function PutBlackQueen(cell)
  {
  let Queen = document.createElement("img");
  Queen.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
  cell.appendChild(Queen);
}
function PutBlackKing(cell)
{
  let King = document.createElement("img");
  King.src = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
  cell.appendChild(King);
}

function PutBlackpawn(cell)
{
  let pawn = document.createElement("img");
 pawn.src = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
  cell.appendChild(pawn);
}

function PutwhiteRook(cell)
{
  let rook = document.createElement("img");
  rook.src = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
  cell.appendChild(rook);
}
function Putwhiteknight(cell)
{
  let knight = document.createElement("img");
  knight.src = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"
  cell.appendChild(knight);
}
function PutwhiteBishop(cell)
{
  let Bishop = document.createElement("img");
  Bishop.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
  cell.appendChild(Bishop);
}


  function PutwhiteQueen(cell)
  {
  let Queen = document.createElement("img");
  Queen.src = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
  cell.appendChild(Queen);
}
function PutwhiteKing(cell)
{
  let King = document.createElement("img");
  King.src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
  cell.appendChild(King);
}

function Putwhitepawn(cell)
{
  let pawn = document.createElement("img");
 pawn.src = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
  cell.appendChild(pawn);
}







function chess(){
  const table= document.createElement('table');
  table.classList.add('border')
document.body.appendChild(table);
for(let i=0;i<BORDEER_SIZE; i++)
{
    const row=table.insertRow();
  for(let j=0;j<BORDEER_SIZE; j++){
    const cell= row.insertCell()
    cell.setAttribute('onclick','clicked(this)')

    if(i==0 && (j==0 || j==7)){ PutBlackRook(cell)};
    if(i==0 && (j==1||j==6)){   PutBlackknight(cell)};
    if(i==0 && (j==2||j==5)){   PutBlackBishop(cell)};
    if(i==0 && j==3){           PutBlackQueen(cell)};
    if(i==0 && j==4){           PutBlackKing(cell)};
    if(i==1 ){PutBlackpawn(cell)};

    if(i===6){ Putwhitepawn(cell)};
    if(i===7&&(j===0||j===7)){PutwhiteRook(cell)};
    if(i===7&&(j===1||j===6)){Putwhiteknight(cell)};
    if(i===7&&(j===2||j===5)){PutwhiteBishop(cell)};
    if(i===7&&j===3){PutwhiteQueen(cell)};
    if(i===7&&j===4){ PutwhiteKing(cell)};

    if((i+j) % 2 ==0){
      cell.className='w'}
     else{cell.className='b'}
    }
    }
  

  }
  window.addEventListener('load',chess)








































 
 




