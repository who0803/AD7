

obj = {
    '0': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '1': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '2': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '3': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '4': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '5': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '6': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '7': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '8': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '9': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
    '10': {
        img: "images/flower.jpg",
        name: "꽃을 심어봐요",
        price: 5000
    },
}

const primary = document.querySelector('.primary');

function createLec(obj, str) {
    const lecContainer = document.createElement('div');
    lecContainer.classList.add('lecContainer');

    const lecListName = document.createElement('div');
    lecListName.classList.add('lecListName');
    lecListName.innerHTML = str;

    const lecList = document.createElement('div');
    lecList.classList.add('lecList');

    for (key in obj) {
        const a = document.createElement('a');
        a.href = "signUp.html";
        const lec = document.createElement('div');
        lec.classList.add('lec');

        const lecImg = document.createElement('div');
        lecImg.classList.add('lecImg');
        lecImg.style.backgroundImage = "url(" + obj[key].img + ")";


        const lecDesc = document.createElement('div');
        lecDesc.classList.add('lecDesc');

        const lectName = document.createElement('div');
        lectName.classList.add('lectName');
        lectName.innerHTML = obj[key].name;

        const lecPrice = document.createElement('div');
        lecPrice.classList.add('lecPrice');
        lecPrice.innerHTML = obj[key].price + "원";

        lecDesc.appendChild(lectName);
        lecDesc.appendChild(lecPrice);
        lec.appendChild(lecImg);
        lec.appendChild(lecDesc);
        a.appendChild(lec);
        lecList.appendChild(a);
    }


    lecContainer.appendChild(lecListName);
    lecContainer.appendChild(lecList);
    primary.appendChild(lecContainer);



}



createLec(obj, "인기 강의");
createLec(obj, "최신 강의");
createLec(obj, "이색 강의");

const lecList = document.querySelector('.lecList');
let isMouseDown = false;
let startX, scrollLeft;

lecList.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    lecList.classList.add('active');

    startX = e.pageX - lecList.offsetLeft;
    scrollLeft = lecList.scrollLeft;
});

lecList.addEventListener('mouseleave', () => {
    isMouseDown = false;
    lecList.classList.remove('active');
});

lecList.addEventListener('mouseup', () => {
    isMouseDown = false;
    lecList.classList.remove('active');
});

lecList.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - lecList.offsetLeft;
    const walk = (x - startX) * 1;
    lecList.scrollLeft = scrollLeft - walk;
});




