const search = localStorage.getItem('search');
const input = document.querySelector('input');
input.value = search;
const opt1 = document.querySelector('.option1');
const opt2 = document.querySelector('.option2');
const primary = document.querySelector('.primary');
const arrow = document.querySelector('.arrow');
const mainSearch = document.querySelector('.mainSearch');


arrow.addEventListener('click', function () {
    location.href = 'index.html';
});

opt1.addEventListener('click', function () {
    opt1.classList.add('actBorderBot');
    opt2.classList.remove('actBorderBot');
    primary.innerHTML = "";
    createLecList(obj);
});


opt2.addEventListener('click', function () {
    opt2.classList.add('actBorderBot');
    opt1.classList.remove('actBorderBot');
    primary.innerHTML = "";
    createDemandLecList(demandObj);
});

mainSearch.addEventListener('click', function () {
    localStorage.setItem('search', input.value)
    location.href = 'search.html';
});

obj = {
    '0': {
        img: "images/pro/1.png",
        name: "프로그래밍?파이썬으로 시작!",
        price: 12000,
        star: 5,
    },
    '1': {
        img: "images/pro/2.png",
        name: "IT취업은 자바! 손쉽게 시작!",
        price: 20000,
        star: 4,
    },
    '2': {
        img: "images/pro/3.png",
        name: "코딩테스트 준비해?C++로 준비하자!",
        price: 8000,
        star: 3,
    },
    '3': {
        img: "images/pro/4.png",
        name: "30년 개발경력자의 실력향상강의!",
        price: 10000,
        star: 2,
    },
    '4': {
        img: "images/pro/5.png",
        name: "트렌드언어 파이썬-Django로 취업하자!",
        price: 20000,
        star: 1,
    },
    '5': {
        img: "images/pro/10.png",
        name: "비전공자들을 위한 JS클래스!",
        progress: 12,
    },
}

demandObj = {
    '0': {
        img: "images/pro/6.png",
        name: "취업하고싶어? 스프링 쉽게 배우자!",
        progress: 7,
    },
    '1': {
        img: "images/pro/7.png",
        name: "00회사 개발자 출신 임병철의 입문자용 NodeJS강의",
        progress: 10,
    },
    '2': {
        img: "images/pro/8.png",
        name: "Springboot 로 나만의 블로그 만들자!",
        progress: 3,
    },
    '3': {
        img: "images/pro/9.png",
        name: "신부자의 c#기초 강의",
        progress: 21,
    },
    '4': {
        img: "images/pro/10.png",
        name: "비전공자들을 위한 JS클래스!",
        progress: 12,
    },
    '5': {
        img: "images/pro/5.png",
        name: "트렌드언어 파이썬-Django로 취업하자!",
        progress: 20,
    },
}

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



createLecList(obj); // 처음에 띄어줌

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
        localStorage.setItem('obj', JSON.stringify(obj));
        location.href = 'signUp.html';
    }
    else if (e.currentTarget.dataset.flag == 1) {
        //console.log(e.currentTarget.dataset.flag);
        localStorage.setItem('obj', JSON.stringify(demandObj));
        location.href = 'demandResearch.html';
    }
});