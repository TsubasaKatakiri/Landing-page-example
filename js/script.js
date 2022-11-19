//menu toggle
const menubutton_intro = document.getElementById('menu_button_intro');
const menubutton_header = document.getElementById('menu_button_header');
const menuintro = document.getElementById('menu_intro');
const menuheader = document.getElementById('menu_header');

menubutton_intro.addEventListener('click', toggleMenu);
menubutton_header.addEventListener('click', toggleMenu);

function toggleMenu(){
    menuintro.classList.toggle('active');
    menuheader.classList.toggle('active');
}
    

//header show / hide
const header = document.getElementById('header');

window.onload=checkScrollHeader();
window.addEventListener('scroll', checkScrollHeader);

function checkScrollHeader(){
    if(document.documentElement.scrollTop >= window.innerHeight){
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

//up button
const upbutton = document.getElementById('up_button');

window.onload=checkScrollButton();
window.addEventListener('scroll', checkScrollButton);

function checkScrollButton(){
    if(document.documentElement.scrollTop >= window.innerHeight){
        upbutton.classList.add('active');
    } else {
        upbutton.classList.remove('active');
    }
}