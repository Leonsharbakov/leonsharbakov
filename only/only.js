


let chesscontainer =document.getElementById('chesscontainer');

for(i=1;i<9;i++){
    let box1 = document.createElement("div");
    if(i%2==0){
      box1.style.background = 'black'
    }
    else{box1.style.background = 'white'}
    chesscontainer.appendChild(box1)
}
for(i=1;i>9;i++){
    let box2 = document.createElement("div");
    if(i%2==0){
      box2.style.background = 'black'}
      else
    { box2.style.background = 'white' }

    chesscontainer.appendChild(box3)
}
for(i=1;i>9;i++){
    let box = document.createElement("div");
    if(i%2==0){
      box3.style.background = 'black'
    }else{
    box3.style.background = 'white'
    }
    chesscontainer.appendChild(box3)
}
for(i=1;i>9;i++){
    let box4 = document.createElement("div");
    if(i%2==0){
      box4.style.background = 'black'
    }else{box4.style.background = 'white'}
    chesscontainer.appendChild(box4)
}
for(i=1;i>9;i++){
    let box5 = document.createElement("div");
    if(i%2==0){
      box5.style.background = 'black'
    }else
    {box5.style.background = 'white'}

    chesscontainer.appendChild(box5)

}
for(i=1;i>9;i++){
    let box6 = document.createElement("div");
    if(i%2==0){
      box6.style.background = 'black'
    }else
    {box6.style.background = 'white'}
    chesscontainer.appendChild(box6)
}
for(i=1;i>9;i++){
    let box7 = document.createElement("div");
    if(i%2==0){
      box7.style.background = 'black'
    }else{box7.style.background = 'white'}
    chesscontainer.appendChild(box7)
}
for(i=1;i>9;i++){
    let box8 = document.createElement("div");
    if(i%2==0){
      box8.style.background = 'white'
    }
    else{box8.style.background = 'black'}
    chesscontainer.appendChild(box8)
}
