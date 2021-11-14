const primary = document.querySelector('.primary');
const arrow = document.querySelector('.arrow');
const obj = {
    '0': {
        img: "images/pro/1.png",
        name: "프로그래밍?파이썬으로 시작!",
        progress: 15, // 15일 남음
        lecArr: ['강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator',
            '강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator'],
    },
    '1': {
        img: "images/rare/5.jpg",
        name: "카페사장의 바리스타 특강",
        progress: 25,
        lecArr: ['강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator',
            '강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator'],
    },
    '2': {
        img: "images/rare/8.jpg",
        name: "토익독학으로 990점달성, 노하우공유! ",
        progress: 5,
        lecArr: ['강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator',
            '강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator'],
    },
    '3': {
        img: "images/pro/9.png",
        name: "신부자의 c#기초 강의",
        progress: 4,
        lecArr: ['강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator',
            '강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator'],
    },
    '4': {
        img: "images/rare/9.jpg",
        name: "과거 대기업 면접관의 자기소개특강",
        progress: 20,
        lecArr: ['강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator',
            '강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator'],
    },
    '5': {
        img: "images/pro/10.png",
        name: "비전공자들을 위한 JS클래스!",
        progress: 20,
        lecArr: ['강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator',
            '강좌 소개, 범위: 바이블 강좌, 강좌의 상위 레벨 키워드, 비동기 11단계', 'Class 선언, Class 구조: Class 선언문, Class 표현식', 'Class 작성 기준, computed name',
            'constructor, constructor 반환', '상속, extends 키워드, 상속 구조, 메소드 오버라이딩', 'getter, setter, static 메소드, 호이스팅', 'super 키워드, constructor 호출', 'Built-in 오브젝트 상속, Object 상속, Image 오브젝트 상속, Audio 오브젝트 상속', 'this 참조, Generator'],
    },
}

arrow.addEventListener('click', function () {
    location.href = 'index.html';
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


        const lecProgress = document.createElement('div');
        lecProgress.classList.add('lecProgress');
        //console.log(obj[key].progress);
        lecProgress.innerHTML = `<progress value= "${30 - obj[key].progress}" max="30"></progress>`;
        lecDesc.appendChild(lecProgress);


        const lecPrice = document.createElement('div');
        lecPrice.classList.add('lecPrice');
        lecPrice.innerHTML = "강의 진행률";

        lecDesc.appendChild(lecPrice);
        lec.appendChild(lecImg);
        lec.appendChild(lecDesc);
        lecList.appendChild(lec);


    }

    //lecContainer.appendChild(lecList);
    primary.appendChild(lecList);
}




createLecList(obj); // 처음에 띄어줌

// 강의 띄어줌
lecList.addEventListener('click', function (e) {


    //console.log(e.target.parentNode);
    //console.log(obj);
    if (e.target.parentNode.classList.contains('lec')) {
        console.log(e.target.parentNode.dataset.key);
        localStorage.setItem('key', e.target.parentNode.dataset.key);
    }
    else if (e.target.parentNode.classList.contains('lecDesc')) {
        console.log(e.target.parentNode.parentNode.dataset.key);
        localStorage.setItem('key', e.target.parentNode.parentNode.dataset.key);
    }
    else if (e.target.parentNode.classList.contains('lectStar') || e.target.parentNode.classList.contains('lecProgress')) {
        console.log(e.target.parentNode.parentNode.parentNode.dataset.key);
        localStorage.setItem('key', e.target.parentNode.parentNode.parentNode.dataset.key);
    }
    //console.log(e.currentTarget.dataset.flag);
    if (e.currentTarget.dataset.flag == 0) {
        //console.log(e.currentTarget.dataset.flag);
        localStorage.setItem('obj', JSON.stringify(obj));
        location.href = 'lec.html';
    }
});