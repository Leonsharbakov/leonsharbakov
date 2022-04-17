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
  rook.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chess_rdl45.svg/68px-Chess_rdl45.svg.png"
  cell.appendChild(rook);
}
function PutBlackknight(cell)
{
  let knight = document.createElement("img");
  knight.src = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chess_ndl45.svg"
  cell.appendChild(knight);
}
function PutBlackBishop(cell)
{
  let Bishop = document.createElement("img");
  Bishop.src = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Chess_bdl45.svg"
  cell.appendChild(Bishop);
}


  function PutBlackQueen(cell)
  {
  let Queen = document.createElement("img");
  Queen.src = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Chess_qdl45.svg"
  cell.appendChild(Queen);
}
function PutBlackKing(cell)
{
  let King = document.createElement("img");
  King.src = "https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_kdl45.svg"
  cell.appendChild(King);
}

function PutBlackpawn(cell)
{
  let pawn = document.createElement("img");
 pawn.src = "https://upload.wikimedia.org/wikipedia/commons/0/07/Chess_pdl45.svg"
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
    

    if((i+j) % 2 ==0){
      cell.className='w'}
     else{cell.className='b'}
    }
    }
  

  }
  window.addEventListener('load',chess)








































 
 




