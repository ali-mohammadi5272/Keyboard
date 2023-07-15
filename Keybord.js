"use strict";
    
let button = document.getElementsByTagName('button');

document.body.addEventListener('keypress' , pressKEY);
function pressKEY(event){
    for(let i = 0; i < 26; i++){
        if(event.code == 'Key' + `${button[i].innerHTML}`){
            button[i].classList.toggle('press');
        }
    }
}


document.body.addEventListener('keyup' , upKEY);
function upKEY(event){
    for(let i = 0; i < 26; i++){
        if(event.code == 'Key' + `${button[i].innerHTML}`){
            button[i].classList.toggle('press');
        }
    }
}