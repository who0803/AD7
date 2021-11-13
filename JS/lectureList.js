const opt1 = document.querySelector('.option1');
const opt2 = document.querySelector('.option2');
const primary = document.querySelector('.primary');
const arrow = document.querySelector('.arrow');
const obj = JSON.parse(localStorage.getItem('obj'));
const titleName = localStorage.getItem('titleName');
const websiteTitle = document.querySelector('.website-title');

websiteTitle.innerHTML = titleName;
arrow.addEventListener('click', function () {
    location.href = 'index.html';
});

opt1.addEventListener('click', function () {
    opt1.classList.add('actBorderBot');
    opt2.classList.remove('actBorderBot');
    primary.innerHTML = "";
    createLecList(obj[0]);
});


opt2.addEventListener('click', function () {
    opt2.classList.add('actBorderBot');
    opt1.classList.remove('actBorderBot');
    primary.innerHTML = "";
    createDemandLecList(obj[1]);
});




const lecList = document.createElement('div');
lecList.classList.add('lecList');
// 강의 리스트
function createLecList(obj) {
    lecList.innerHTML = "";
    lecList.dataset.flag = '0';

    for (key in obj) {
        const lec = document.createElement('div');
        lec.classList.add('lec');
        lec.dataset.key = key;

        const lecImg = document.createElement('div');
        lecImg.classList.add('lecImg');
        lecImg.style.backgroundImage = "url(" + obj[key].img + ")";


        const lecDesc = document.createElement('div');
        lecDesc.classList.add('lecDesc');

        const lectName = document.createElement('div');
        lectName.classList.add('lectName');
        lecDesc.appendChild(lectName);
        lectName.innerHTML = obj[key].name;


        const lectStar = document.createElement('div');
        lectStar.classList.add('lectStar');
        lecDesc.appendChild(lectStar);
        for (let i = 0; i < obj[key].star; i++) {   // 별 숫자만큼
            lectStar.insertAdjacentHTML("beforeend", `<i class="fas fa-star"></i>`);
        }
        for (let i = 0; i < 5 - obj[key].star; i++) {   // 별 숫자만큼
            lectStar.insertAdjacentHTML("beforeend", `<i class="far fa-star"></i>`);
        }

        const lecPrice = document.createElement('div');
        lecPrice.classList.add('lecPrice');
        lecPrice.innerHTML = "₩ " + obj[key].price;



        lecDesc.appendChild(lecPrice);
        lec.appendChild(lecImg);
        lec.appendChild(lecDesc);
        lecList.appendChild(lec);

        
    }

    //lecContainer.appendChild(lecList);
    primary.appendChild(lecList);
}

// 수요조사 강의 리스트
function createDemandLecList(obj) {
    lecList.innerHTML = "";
    lecList.dataset.flag = '1';

    for (key in obj) {
        const lec = document.createElement('div');
        lec.classList.add('lec');
        lec.dataset.key = key;
        

        const lecImg = document.createElement('div');
        lecImg.classList.add('lecImg');
        lecImg.style.backgroundImage = "url(" + obj[key].img + ")";


        const lecDesc = document.createElement('div');
        lecDesc.classList.add('lecDesc');

        const lectName = document.createElement('div');
        lectName.classList.add('lectName');
        lectName.innerHTML = obj[key].name;

        const lecProgress = document.createElement('div');
        lecProgress.classList.add('lecProgress');
        //console.log(obj[key].progress);
        lecProgress.innerHTML = `<progress value= "${30 - obj[key].progress}" max="30"></progress>`;

        const lecPrice = document.createElement('div');
        lecPrice.classList.add('lecPrice');
        lecPrice.innerHTML = "수요조사";

        lecDesc.appendChild(lectName);
        lecDesc.appendChild(lecProgress);
        lecDesc.appendChild(lecPrice);
        lec.appendChild(lecImg);
        lec.appendChild(lecDesc);
        lecList.appendChild(lec);

    }
    primary.appendChild(lecList);
}



createLecList(obj[0]); // 처음에 띄어줌

// 강의 띄어줌
lecList.addEventListener('click', function(e) {
    
    
    //console.log(e.target.parentNode);
    //console.log(obj);
    if (e.target.parentNode.classList.contains('lec') ) {
        //console.log(e.target.parentNode.dataset.key);
        localStorage.setItem('key', e.target.parentNode.dataset.key);
    }
    else if (e.target.parentNode.classList.contains('lecDesc')) {
        //console.log(e.target.parentNode.parentNode.dataset.key);
        localStorage.setItem('key', e.target.parentNode.parentNode.dataset.key);
    }
    else if (e.target.parentNode.classList.contains('lectStar') || e.target.parentNode.classList.contains('lecProgress')) {
        //console.log(e.target.parentNode.parentNode.parentNode.dataset.key);
        localStorage.setItem('key', e.target.parentNode.parentNode.parentNode.dataset.key);
    }
    //console.log(e.currentTarget.dataset.flag);
    if (e.currentTarget.dataset.flag == 0) {
        //console.log(e.currentTarget.dataset.flag);
        localStorage.setItem('obj', JSON.stringify(obj[0]));
        location.href = 'signUp.html';
    }
    else if (e.currentTarget.dataset.flag == 1) {
        //console.log(e.currentTarget.dataset.flag);
        localStorage.setItem('obj', JSON.stringify(obj[1]));
        location.href = 'demandResearch.html';
    }
});