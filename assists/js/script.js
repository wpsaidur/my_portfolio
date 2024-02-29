const toggle = document.querySelector('.toggle');
const sideContainer = document.querySelector('.side-container');
const sideBar = document.querySelector('.side-bar-block');
const sideBarBtn = document.querySelector('#side-bar-btn');

toggle.addEventListener('click', function(){
    sideContainer.classList.add('side-container-add');
    sideBar.classList.add('side-bar-block-add');
})
sideBarBtn.addEventListener('click', function(){
    sideContainer.classList.remove('side-container-add');
    sideBar.classList.remove('side-bar-block-add');
})
