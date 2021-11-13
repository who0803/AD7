const homeMenu = document.querySelector('.homeMenu');
const lectureMenu = document.querySelector('.lectureMenu');
const chatMenu = document.querySelector('.chatMenu');

homeMenu.addEventListener('click', function () {
    location.href = 'index.html';
});

chatMenu.addEventListener('click', function () {
    location.href = 'chat.html';
});

lectureMenu.addEventListener('click', function () {
    location.href = 'myLecList.html';
});