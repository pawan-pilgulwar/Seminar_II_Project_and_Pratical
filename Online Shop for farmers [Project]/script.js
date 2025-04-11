let menulogo = document.querySelector('#menu-logo');

menulogo.addEventListener('click', ()=>{
    let menu = document.querySelector('.menu')
    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
    let content = document.querySelector('.content')
    content.style.opacity = content.style.opacity === '0.9' ? '1' : '0.9';
})

let menuBtn = document.querySelector('#menu-button')

menuBtn.addEventListener('click', ()=>{
    console.log('clicked')
    let menu = document.querySelector('.menu')
    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
    let content = document.querySelector('.content')
    content.style.opacity = '1';
})