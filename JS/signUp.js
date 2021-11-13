const lectureDesc = document.querySelector('.lectureDesc');
const teacherDesc = document.querySelector('.teacherDesc');
const feedback = document.querySelector('.feedback');
const obj = JSON.parse(localStorage.getItem('obj'));
const key = localStorage.getItem('key');
const lecName = document.querySelector('.lecName');
const lecPrice = document.querySelector('.lecPrice');
console.log(obj);
console.log(key);
lecName.innerHTML = obj[key].name;
lecPrice.innerHTML = "₩ " + obj[key].price;


lectureDesc.addEventListener('click', function () {
    lectureDesc.classList.add('act');
    teacherDesc.classList.remove('act');
    feedback.classList.remove('act');
});
teacherDesc.addEventListener('click', function () {
    teacherDesc.classList.add('act');
    lectureDesc.classList.remove('act');
    feedback.classList.remove('act');
});
feedback.addEventListener('click', function () {
    feedback.classList.add('act');
    teacherDesc.classList.remove('act');
    lectureDesc.classList.remove('act');
});

const arrow = document.querySelector('.arrow');


arrow.addEventListener('click', function () {
    location.href = 'index.html';
});