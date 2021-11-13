const demandlecDesc = document.querySelector('.demandlecDesc');
const demandteacherDesc = document.querySelector('.demandteacherDesc');
const obj = JSON.parse(localStorage.getItem('obj'));
const key = localStorage.getItem('key');

const lecName = document.querySelector('.lecName');
const demandDay = document.querySelector('.demandDay');
console.log(obj);
console.log(key);
lecName.innerHTML = obj[key].name;
demandDay.innerHTML = "D - " + obj[key].progress;

const demandBtn = document.querySelector('.fa-check');
const input = document.querySelector('input');

demandBtn.addEventListener('click', function () {
    input.value = '';
});

demandlecDesc.addEventListener('click', function () {
    demandlecDesc.classList.add('act');
    demandteacherDesc.classList.remove('act');
    
});
demandteacherDesc.addEventListener('click', function () {
    demandteacherDesc.classList.add('act');
    demandlecDesc.classList.remove('act');
});

const arrow = document.querySelector('.arrow');


arrow.addEventListener('click', function () {
    location.href = 'index.html';
});