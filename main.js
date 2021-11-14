let nav = document.querySelector('#nav');
let main = document.querySelector('main');

function changeBG(){
    if(window.scrollY > 0){
        // nav.style.backgroundColor = "white";
        alert('hi');
    }
}

window.onscroll = changeBG;
