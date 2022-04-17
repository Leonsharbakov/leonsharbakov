const BORDEER_SIZE=8

function chess(){
  const table= document.createElement('table');
document.body.append(table);
for(let i=0;i<BORDEER_SIZE; i++)
{
const row=table.insertRow();
  for(let j=0;j<BORDEER_SIZE; j++){
    const cell= row.insertCell()
    if((i+j) % 2 ==0){
      cell.className='w'}
     else
       {
        cell.className='b'}
      
      }
    }
  }



